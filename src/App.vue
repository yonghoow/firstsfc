<template>
  <h3>The &lt;TransitionGroup&gt; Component</h3>
  <p>New products are given animations given the &lt;TransiitonGroup&gt; component</p>
  <input type="text" v-model="inpName">
  <button @click="addE1">Add</button>
  <TransitionGroup tag="ol">
    <li v-for="x in products" :key="x">
      {{ x }}
    </li>
  </TransitionGroup>
</template>

<script>
  export default {
    data() {
      return {
        products: ['Apple', 'Pizza', 'Rice'],
        inpName: ''
      }
    },
    methods: {
      addE1() {
        const e1 = this.inpName;
        this.products.push(e1);
        this.inpName = null;
      }
    }
  }
</script>

<style>
  .v-enter-from {
    opacity: 0;
    rotate: 180deg;
  }
  .v-enter-to {
    opacity: 1;
    rotate: 0deg;
  }
  .v-enter-active {
    transition: all 0.7s;
  }
</style>