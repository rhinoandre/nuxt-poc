<template>
  <li>
    <input type="checkbox" :id="todo.id" v-model="todo.done">
    <label for="list3" :class="{ done: todo.done }">{{ todo.label }}</label>
  </li>
</template>

<script>
export default {
  props: ['todo']
}
</script>
