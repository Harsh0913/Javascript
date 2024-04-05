document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
        if (taskInput.value !== '') {
            const taskText = taskInput.value;
            const li = document.createElement('li');
            li.innerHTML = `<span>${taskText}</span><button class="delete-btn">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const li = event.target.closest('li');
            li.remove();
        }
    });
});
