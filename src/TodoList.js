import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return ( <
        div >
        <
        h1 > Todo List < /h1> <
        input type = "text"
        placeholder = "Add a task"
        value = { task }
        onChange = {
            (e) => setTask(e.target.value)
        }
        /> <
        button onClick = { addTask } > Add < /button> <
        ul > {
            tasks.map((task, index) => ( <
                li key = { index } > { task } <
                button onClick = {
                    () => deleteTask(index)
                } > Delete < /button> < /
                li >
            ))
        } <
        /ul> < /
        div >
    );
}

export default TodoList;