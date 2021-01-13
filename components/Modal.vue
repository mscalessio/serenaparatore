<template>
  <div class="fixed z-50 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen p-4 text-center">
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            class="absolute inset-0 bg-black opacity-90"
            @click="$emit('close')"
          ></div>
        </div>
      </transition>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <!-- <span class="inline-block align-middle h-screen" aria-hidden="true"
        >&#8203;</span
      > -->

      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          class="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 lg:max-w-5xl w-full sm:w-4/5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  mounted() {
    const close = (e) => {
      const ESC = 27
      if (e.keyCode !== ESC) return
      this.$emit('close')
    }
    // Close the modal when the
    // user presses the ESC key.
    document.addEventListener('keyup', close)
    this.$on('hook:destroyed', () => {
      document.removeEventListener('keyup', close)
    })

    // Activate the modal when the component is mounted.
    this.activate()
    this.$on('hook:destroyed', () => {
      // Deactivate when the component is destroyed.
      this.deactivate()
    })
  },
  methods: {
    activate() {
      this.previousActiveElement = document.activeElement

      this.disableScrolling()
      this.inert()
      // this.focusFirstDescendant()
    },
    async deactivate() {
      this.enableScrolling()
      await this.inert(false)
      this.restoreFocus()
    },
    disableScrolling() {
      this.scrollPosition = window.pageYOffset

      // Disable scrolling on all devices (including iOS).
      const $body = document.querySelector('body')
      $body.style.overflow = 'hidden'
      $body.style.position = 'fixed'
      $body.style.top = `-${this.scrollPosition}px`
      $body.style.width = '100%'
    },
    enableScrolling() {
      const $body = document.querySelector('body')
      $body.style.removeProperty('overflow')
      $body.style.removeProperty('position')
      $body.style.removeProperty('top')
      $body.style.removeProperty('width')

      window.scrollTo(0, this.scrollPosition)
    },
    async inert(status = true) {
      await this.$nextTick()
      ;[...this.$root.$el.children].forEach((child) => {
        if (child === this.$el || child.contains(this.$el)) return
        child.inert = status
      })
    },
    focusFirstDescendant(element) {
      const focusable = this.$el.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable[0] && focusable[0].focus) focusable[0].focus()
    },
    restoreFocus() {
      const element = this.focusElement || this.previousActiveElement

      if (element && element.focus) element.focus()
    },
  },
}
</script>
