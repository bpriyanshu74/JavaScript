const button = document.querySelector('.todo-submit');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');

// adding event listener
button.addEventListener('click',addTodo);


//creating function addTodo
function addTodo(event){
  //removing default behaviour
  event.preventDefault();
  //adding div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  todoItem.innerText = todoInput.value;
  todoDiv.appendChild(todoItem);
  
  const completeButton = document.createElement('button');
  completeButton.classList.add('complete-btn');
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completeButton);

  const trashButton = document.createElement('button');
  trashButton.classList.add('trash-btn');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = ""; 

  trashButton.addEventListener('click',function()
  {
    todoDiv.classList.add('fall');
    todoDiv.addEventListener('transitionend',function(){
      todoDiv.remove();
    })
   
  })
  completeButton.addEventListener('click',function(){
    todoDiv.classList.toggle('completed');
  })
 
  const filterOption = document.querySelector('.filter-todo');
  filterOption.addEventListener('click',function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo)
    {
      switch(e.target.value){
        case 'all':
          todo.style.display = 'flex';
          break;
        case 'completed':
          if(todo.classList.contains('completed')){
            todo.style.display = 'flex';
          }
          else{
            todo.style.display = 'none';
          }
          break;
        case 'uncomplete':
          if(!todo.classList.contains('completed')){
              todo.style.display = 'flex';
            }
          else{
              todo.style.display = 'none';
            }
          break;
          }
        })
      }
  )}







