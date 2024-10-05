<template>
  <h1>Dynamic Components</h1>
  <p>With the &lt;KeepAlive max="2"&gt; only the last two visited component will remember the user inputs.</p>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-one'"> One</label>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-two'"> Two</label>
  <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-three'"> Three</label>
  <keep-alive :max="2">
    <component :is="compName"></component>
  </keep-alive>
</template>

<script>
  export default {
    data() {
      return {
        compName: 'comp-one'
      }
    }
  }
</script>

<style>
  #app {
    width: 350px;
    margin: 10px;
  }
  #app > div {
    margin-top: 10px;
    padding: 10px;
    border: solid black 2px;
  }
  h2 {
    text-decoration: underline;
  }
  label {
    display: inline-block;
    padding: 5px;
  }
  label:hover {
    cursor: pointer;
  }
</style>