<template>
  <div>
    <Navbar :sticky="$route.name === 'work-id'" />
    <Nuxt />
    <Footer />
    <PortalTarget name="end-body"></PortalTarget>
  </div>
</template>
