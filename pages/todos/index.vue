<template>
<div>
    <button class="btn btn-large">+</button>
    <section class="todos">
        <ul>
            <Todo :todo="{ id: 1, done: false, label: 'Do the dishes' }" />
            <Todo :todo="{ id: 2, done: false, label: 'Clean my house' }" />
            <Todo :todo="{ id: 3, done: false, label: 'Love my wife' }" />
        </ul>
    </section>
</div>
</template>

<script>
import { Todo } from '@/components/Todo'
export default {
    data: () => (
        {
            list1: false,
            list2: false,
            list3: false
        }
    ),
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
