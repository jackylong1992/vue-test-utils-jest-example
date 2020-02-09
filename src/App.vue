<template>
  <div id="app">
    <message-toggle @update:toggleMessage="updateToggleMessage" />
    <list :items="['list item 1', 'listen item 2']" />
    <p>Toogle message = {{toggleMessage}}</p>
  </div>
</template>

<script>
import MessageToggle from '@/components/MessageToggle.vue'
import List from '@/components/List.vue'

export default {
  components: {
    MessageToggle,
    List
  },
  data () {
    return {
      toggleMessage: '',
    }
  },
  methods: {
    updateToggleMessage: function(mes) {
      this.toggleMessage = mes;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
