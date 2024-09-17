document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        
        if (taskValue !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${taskValue} <button class="deleteButton">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
            
            // Add event listener to delete button
            li.querySelector('.deleteButton').addEventListener('click', () => {
                taskList.removeChild(li);
            });
        }
    });

    // Optionally handle "Enter" key press to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
