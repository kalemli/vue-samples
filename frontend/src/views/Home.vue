<template>
  <div class="home">
    <button class="btn btn-sm btn-success mx-1" v-tooltip="msg">Hover me</button>
    <button class="btn btn-sm btn-primary mx-1" v-tooltip="{
            content: msg,
            placement: 'bottom-center',
            classes: ['info'],
            targetClasses: ['it-has-a-tooltip'],
            offset: 7,
            delay: {
              show: 500,
              hide: 300,
            },
          }">Hover me</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    
  },
  data: function() {
    return {
      msg: 'Hi, this is tooltip..'
    }
  }
}
</script>
