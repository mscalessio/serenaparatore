<template>
  <div>
    <Navbar sticky :fillBg="$route.name === 'about'" />
    <Nuxt />
    <Footer />
    <PortalTarget name="end-body"></PortalTarget>
  </div>
</template>
