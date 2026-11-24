let items = [
  "Сделать проектную работу",
  "Полить цветы",
  "Пройти туториал по Реакту",
  "Сделать фронт для своего проекта",
  "Прогуляться по улице в солнечный день",
  "Помыть посуду",
];

const listElement = document.querySelector(".to-do__list");
const formElement = document.querySelector(".to-do__form");
const inputElement = document.querySelector(".to-do__input");
const itemTemplate = document.querySelector("#to-do__item-template");
const itemElement = itemTemplate.content.querySelector(".to-do__item");
const storageKey = "tasks";

function loadTasks() {
  const savedTasks = localStorage.getItem(storageKey);
  return savedTasks === null ? items : JSON.parse(savedTasks);
}

function createItem(item) {
  const clone = itemElement.cloneNode(true);
  const textElement = clone.querySelector(".to-do__item-text");

  textElement.textContent = item;
  return clone;
}

function getTasksFromDOM() {
  const itemsNamesElements = listElement.querySelectorAll(".to-do__item-text");
  const tasks = [];

  itemsNamesElements.forEach((textElement) => {
    tasks.push(textElement.textContent);
  });

  return tasks;
}

function saveTasks(tasks) {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const item = inputElement.value.trim();
  if (!item) {
    return;
  }

  listElement.prepend(createItem(item));
  items = getTasksFromDOM();
  saveTasks(items);
  inputElement.value = "";
});

items = loadTasks();
items.forEach((item) => {
  listElement.append(createItem(item));
});

