<template>
<div>
    <button class="btn btn-large">+</button>
    <section class="todos">
        <ul>
            <Todo v-for="todo in todos"
              :key="todo.id"
              :todo="todo" />
        </ul>
    </section>
</div>
</template>

<script>
import Todo from '@/components/Todo'
export default {
    asyncData ({ store }) {
      return store.dispatch('getTodos')
    },
    components: {
        Todo
    }
}
</script>

<style scoped>
div {
    width: 30%;
    border: 1px solid black;
    margin: 0 auto;
}
ul {
    margin-left: 0;
}
li {
    list-style-type: none;
}
.done {
    text-decoration-line: line-through;
}
</style>
