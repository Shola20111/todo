const todoList = [{
    name: 'watch TV',
    dueDate: '2025-02-12'
  }, {
    name: 'Read Newpaper',
    dueDate: '2025-02-12'
  }];
  
  function addTodo(){
      const inputElement = document.querySelector('.js-inputElement');
      const name = inputElement.value;
      const dueDateInputElement = document.querySelector('.js-dueDate');
      const dueDate = dueDateInputElement.value;
      todoList.push({name, dueDate});
      inputElement.value = '';
      dueDateInputElement.value = '';
      renderTodoList();
  }

  function renderTodoList(){
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++){
      const todoObject = todoList[i];
      const name = todoObject.name;
      const dueDate = todoObject.dueDate;
      console.log(name);
      const html = `
          <div class="todo-date">${name}</div>
          <div class="due-date todo-date">${dueDate}</div> 
          <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
          " class="delete-button">Delete</button>
      `;
      todoListHTML += html;
      document.querySelector('.js-showTodo').innerHTML = todoListHTML;
      
    }
  }
  localStorage.getItem("todoList", )
  renderTodoList();


  let s = "12345";
  let n = s.length;


   for (let i = 1; i <= Math.floor(n / 2); i++) {
        const first = s.slice(0, i);
        
        if(first[0] === '0') continue;
        let num = BigInt(first);
        let current = first;
        let next = num + 1n;
        console.log(next)

   }