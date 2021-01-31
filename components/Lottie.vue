<template>
  <div :id="id ? id : `animation`" ref="lavContainer"></div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  props: {
    id: String,
    options: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      default: undefined,
    },
    height: Number,
    width: Number,
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
      },
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData && this.options.animationData,
      path: this.options.path && this.options.path,
      rendererSettings: this.options.rendererSettings,
    })
    this.$emit('animCreated', this.anim)
  },
}
</script>
