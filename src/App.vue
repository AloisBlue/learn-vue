<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Counter />
    <Squared />
    <Lower />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Squared from './components/Squared.vue';
import Lower from './components/Lower.vue';

export default {
  name: 'app',
  components: {
    Counter,
    Squared,
    Lower
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
