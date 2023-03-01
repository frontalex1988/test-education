// Задание 2.
// Цель задания
// Научиться преобразовывать объекты в другие сущности. Получить базовые навыки для создания и размещения на странице DOM-элементов.

function createSelect(array, value) {
  let element = document.createElement('select');

  if (Array.isArray(array) === true && typeof array[0] === 'object') {
    for (let i in array) {
      let option = document.createElement('option');
      option.value = array[i].value;
      option.innerHTML = array[i].label;
      element.appendChild(option);
      if (option.value === value) {
        option.setAttribute('selected', true);
      }
    }
  }

  else if (Array.isArray(array) !== true) {
    let entriesObj = Object.entries(obj);
    for (let [key, value] of entriesObj) {
      let option = document.createElement('option');
      option.innerHTML = value;
      option.value = key;
      element.appendChild(option);
    }
  }
  else {
    for (let i in array) {
      let option = document.createElement('option');
      option.innerHTML = array[i];
      option.value = array[i];
      element.appendChild(option);
    }
  }

  return element;
}
