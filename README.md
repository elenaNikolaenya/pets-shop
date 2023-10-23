# Домашнее задание к модулю "Объекты"
Сегодня тебе предстоит разработать интернет-магазин товаров для животных! Ну, по крайней мере, его часть.

Базовый уровень задания обязателен для получения зачета по модулю, продвинутый — по желанию.

## Базовый уровень
Выведи в интерфейсе товары для животных (массив `items`)
- Используй шаблон (template) с `id="item-template"` в [index.html](https://github.com/CodegirlSchool/pets-shop/blob/main/index.html#L43)

- Название [товара](https://github.com/CodegirlSchool/pets-shop/blob/main/script.js#L2) (`title`) помести в `h1`,
описание (`description`) — в `p`, картинку (`img`) — в одноименный тег, цену (`price`) — в `span` с классом `"price"` и массив тегов `tags` — в `div class="tags"`
  ```html
  <div class="shop-item">
    <img src="">
    <div class="content">
      <div class="tags"></div>
      <h1></h1>
      <p></p>
      <span class="price"></span>
    </div>
  </div>
  ```
- Отрисованные объекты подставь внутрь элемента с `id="shop-items"`



## Продвинутый уровень
Добавь поиск на сайт 🔎 

- При клике на кнопку c `id="search-btn"` должно браться значение из поля с `id="search-input"`

- Проверяй, что введенная строка содержится в `title` товара. Если это так, то товар подходит под условие поиска.

- Будет здорово, если сделаешь поиск нечувствительным к регистру и лишним пробелам.

- Если под условие поиска подошел хотя бы один товар, отобрази массив результатов в элементе с `id="shop-items"`. 

- Для очистки контейнера от результатов предыдущего поиска используй свойство `innerHTML`

  Например, следующий код очистит контейнер от его содержимого:
  ```html
  container.innerHTML = '';
  ```
  (здесь container — элемент с `id="shop-items"`)

- Если не нашлось ни одного товара, подходящего под условие поиска, показывай текст "Ничего не найдено". Для этого используй элемент с `id="nothing-found"`. Не забудь его спрятать (очистить его содержимое) перед следующим поиском


Желаю удачи! 😊


# Homework for the module "Objects"
Today you have to develop an online store for pet products! Well, at least part of it.

The basic level of the assignment is required to receive credit for the module, the advanced level is optional.

## Basic level
Display pet products in the interface (array `items`)
- Use template with `id="item-template"` in [index.html](https://github.com/CodegirlSchool/pets-shop/blob/main/index.html#L43)

- Place the name of [product](https://github.com/CodegirlSchool/pets-shop/blob/main/script.js#L2) (`title`) in `h1`,
description (`description`) - in `p`, picture (`img`) - in the tag of the same name, price (`price`) - in `span` with class `"price"` and an array of tags `tags` - in `div class="tags"`
   ```html
   <div class="shop-item">
     <img src="">
     <div class="content">
       <div class="tags"></div>
       <h1></h1>
       <p></p>
       <span class="price"></span>
     </div>
   </div>
   ```
- Place the objects inside the element with `id="shop-items"`



## Advanced level
Add search to the site 🔎

- When you click on the button with `id="search-btn"` the value should be taken from the field with `id="search-input"`

- Check if the entered string is contained in the `title` of the product. If so, the product matches the search condition.

- It would be great if you made the search case-insensitive and extra spaces insensitive.

- If at least one product matches the search condition, display an array of results in the element with `id="shop-items"`.

- To clear the container from the results of the previous search, use the `innerHTML` property

   For example, the following code will clear the container of its contents:
   ```html
   container.innerHTML = '';
   ```
   (here container is the element with `id="shop-items"`)

- If a product that matches the search condition wasn't found, display the text “Nothing found.” To do this, use an element with `id="nothing-found"`. Don't forget to hide it (clear its contents) before the next search

Good luck! 😊