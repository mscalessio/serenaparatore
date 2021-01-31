<template>
  <span class="flex flex-row items-center">
    <Lottie
      id="logo-animation"
      class="w-28"
      :options="{
        path: '/remote/animation/logo.json',
        loop: true,
        autoplay: true,
      }"
    />
    <p class="hidden lg:block w-auto leading-3">
      Serena Paratore <br />
      <span class="text-xs font-light">art director & motion designer</span>
    </p>
  </span>
</template>

<script>
export default {
  name: 'LogoNew',
}
</script>
