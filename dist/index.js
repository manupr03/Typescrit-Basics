import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(response => {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    console.log(`it has id ${id}, with a title ${title} and finished ${finished}`);
});
