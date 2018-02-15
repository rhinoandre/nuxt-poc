<template>
  <li>
    <input type="checkbox" :id="todo.id" v-model="todo.done" @click="inputClick()">
    <label for="list3" :class="{ done: todo.done }">{{ todo.label }}</label>
  </li>
</template>

<script>
export default {
  props: ['todo'],
  created () {
    console.log(this.todo)
  },
  methods: {
    inputClick() {
      this.todo.value = 'tes'
    }
  }
}
</script>

<style>
.done {
    text-decoration-line: line-through;
}
</style>
