<template>
  <div id="app">
    <HeaderNavbar></HeaderNavbar>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderNavbar from './components/HeaderNavbar'

export default {
  components: {HeaderNavbar}  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.box-shadow { box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05); }
</style>
