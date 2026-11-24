let items = [
  "Сделать проектную работу",
  "Полить цветы",
  "Пройти туториал по Реакту",
  "Сделать фронт для своего проекта",
  "Прогуляться по улице в солнечный день",
  "Помыть посуду",
];

const listElement = document.querySelector(".to-do__list");
const itemTemplate = document.querySelector("#to-do__item-template");
const itemElement = itemTemplate.content.querySelector(".to-do__item");

function loadTasks() {
  return items;
}

function createItem(item) {
  const clone = itemElement.cloneNode(true);
  const textElement = clone.querySelector(".to-do__item-text");

  textElement.textContent = item;
  return clone;
}

items = loadTasks();
items.forEach((item) => {
  listElement.append(createItem(item));
});

