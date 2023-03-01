(function () {

  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "Введите название нового дела";
    buttonWrapper.classList.add("input-group-append");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Добавить дело";
    button.disabled = true;

    input.addEventListener('input', function () {

      if (input.value == '') {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    })

    form.append(input);
    form.append(buttonWrapper);
    buttonWrapper.append(button);

    return {
      form,
      input,
      button,
    };
  }

  function createTodoList() {
    let list = document.createElement("ul");
    list.classList.add("list-group");
    return list;
  }

  function createTodoItem(name, done, storageKey) {
    let item = document.createElement("li");
    let buttonGroup = document.createElement("div");
    let doneButton = document.createElement("button");
    let deleteButton = document.createElement("button");


    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    item.textContent = name;

    buttonGroup.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Готово";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Удалить";

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    if (done === true) {
      item.classList.add("list-group-item-success");
    }

    doneButton.addEventListener('click', () => toggleDone(item, storageKey));
    deleteButton.addEventListener('click', () => toggleDelete(item, storageKey));

    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  function toggleDone(item, storageKey) {
    item.classList.toggle("list-group-item-success");
    const isDone = item.classList.contains('list-group-item-success');
    const idx = itemIndex(item);
    const dataFromStorage = JSON.parse(localStorage.getItem(storageKey));
    dataFromStorage[idx].done = isDone;
    localStorage.setItem(storageKey, JSON.stringify(dataFromStorage));
  };

  function toggleDelete(item, storageKey) {
    const idx = itemIndex(item);
    const dataFromStorage = JSON.parse(localStorage.getItem(storageKey));
    if (confirm("Вы уверены?")) {
      item.remove();
      // dataFromStorage.splice(idx, 1);
      let newArr = dataFromStorage.filter((el) => el !== dataFromStorage[idx]);
      localStorage.setItem(storageKey, JSON.stringify(newArr));
    }
  };


  function itemIndex(item) {
    const list = item.parentElement;
    const elements = Array.from(list.children);
    id = elements.indexOf(item);
    return id;
  };


  function createTodoApp(container, title = 'Список дел', storageKey, defaultTodos) {

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);


    if (localStorage.getItem(storageKey) === null) {
      localStorage.setItem(storageKey, JSON.stringify(defaultTodos));
    }
    let arrDefaultTodos = JSON.parse(localStorage.getItem(storageKey));

    let todoItemLSDefault;
    for (let key of arrDefaultTodos) {
      todoItemLSDefault = createTodoItem(key['name'], key['done'], storageKey);
      todoList.append(todoItemLSDefault.item);
    }

    todoItemForm.form.addEventListener("submit", function (e) {
      e.preventDefault();
      arrDefaultTodos = JSON.parse(localStorage.getItem(storageKey));
      if (!todoItemForm.input.value) {
        return;
      }

      arrDefaultTodos.push({
        name: todoItemForm.input.value,
        done: false,
      });

      localStorage.setItem(storageKey, JSON.stringify(arrDefaultTodos));

      let todoItem = createTodoItem(todoItemForm.input.value, 'false', storageKey);

      todoList.append(todoItem.item);
      todoItemForm.input.value = "";
      todoItemForm.button.disabled = true;
    });
  }

  window.createTodoApp = createTodoApp;
})();
