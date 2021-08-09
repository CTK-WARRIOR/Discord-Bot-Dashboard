<template>
  <main>
  Please wait..
</main>
</template>

<script>
export default {
  mounted() {
  if(!this.$auth.loggedIn && !this.$route.query.code) { this.$auth.loginWith('discord') }
  else this.$auth.redirect("/")  
  }
}
</script>