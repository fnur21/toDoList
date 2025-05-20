document.addEventListener('DOMContentLoaded', function() {
    const addTDButton = document.getElementById('addTD');
    const toDoContainer = document.getElementById('toDoContainer');
    const inputText = document.getElementById('inputText');
    const clearTD = document.getElementById('clearTD');

    addTDButton.addEventListener('click', function() {
        if (inputText.value.trim() === '') {
            alert('Lütfen bir görev girin!');
            return;
        }

        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        
        const taskText = document.createElement('span');
        taskText.textContent = inputText.value;
        
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-times');
        deleteIcon.style.color = 'var(--danger-color)';
        
        todoItem.appendChild(taskText);
        todoItem.appendChild(deleteIcon);
        toDoContainer.appendChild(todoItem);
        
        inputText.value = '';
        inputText.focus();

        // Tek tıkla tamamlandı işaretleme
        todoItem.addEventListener('click', function(e) {
            if (e.target !== deleteIcon) {
                todoItem.classList.toggle('completed');
            }
        });

        // Çift tıkla silme
        todoItem.addEventListener('dblclick', function() {
            todoItem.classList.add('fade-out');
            setTimeout(() => {
                todoItem.remove();
            }, 300);
        });

        // Delete icon ile silme
        deleteIcon.addEventListener('click', function() {
            todoItem.classList.add('fade-out');
            setTimeout(() => {
                todoItem.remove();
            }, 300);
        });
    });

    // Tüm görevleri temizle
    clearTD.addEventListener('click', function() {
        if (confirm('Tüm görevleri silmek istediğinize emin misiniz?')) {
            toDoContainer.innerHTML = '';
        }
    });

    // Enter tuşu ile ekleme
    inputText.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTDButton.click();
        }
    });
});
