<template>
  <div>
    <Navbar :sticky="$route.name === 'work-slug'" />
    <Nuxt />
    <Footer />
    <PortalTarget name="end-body"></PortalTarget>
  </div>
</template>
