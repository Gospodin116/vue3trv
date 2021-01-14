<template>
  <ul>
    <li><router-link :to="{ name: 'index' }">Index</router-link></li>
    <li><router-link :to="{ name: 'auth.login' }">Login</router-link></li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
