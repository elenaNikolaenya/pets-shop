const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

//part 1

const cardTemplate = document.querySelector('#item-template');
const container = document.querySelector('#shop-items');

function makeCardByTemplate(imgSrc, tagsArr, itemTitle, itemDescription, itemPrice) {
  const card = cardTemplate.content.cloneNode(true);

  card.querySelector('img').src = imgSrc;
  
  tagsArr.forEach(function(item) {  
    const tag = document.createElement('div');
    tag.classList.add('tag');    
    tag.textContent = item;
    card.querySelector('.tags').append(tag);
  })  

  card.querySelector('h1').textContent = itemTitle;
  card.querySelector('p').textContent = itemDescription;
  card.querySelector('.price').textContent = itemPrice;
  return card;
}


items.forEach(function(item) {
  const {title, description, tags, price, img} = item; 
  const itemCard = makeCardByTemplate(img, tags, title, description, price);
  container.append(itemCard);
});

//part 2

const button = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const notFound = document.querySelector('#nothing-found');

function searchItems() {
  const searchQuery = searchInput.value.trim().toLowerCase();
  let somethingRendered = false;

  container.innerHTML = '';
  notFound.textContent = '';  

  items.forEach(function(item) {        
    if (item['title'].toLowerCase().includes(searchQuery)) {
      const {title, description, tags, price, img} = item;
      const itemCard = makeCardByTemplate(img, tags, title, description, price);
      container.append(itemCard);
      somethingRendered = true;
    }           
  });

  if (!somethingRendered) {
    notFound.textContent = "Ничего не найдено";
  };
};

button.addEventListener('click', searchItems);
