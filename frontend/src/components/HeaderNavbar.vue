<template>
    <div class="d-flex flex-column sticky-top flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">{{ appName }}</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/">Home</a>
        <a class="p-2 text-dark" href="/tables">DataTable</a>
        <a class="p-2 text-dark" href="/calculator">Calculator</a>
        <a class="p-2 text-dark" href="/grid">DataGrid</a>
        <a class="p-2 text-dark" href="/about">About</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'appName'
    ])
  }  
}
</script>