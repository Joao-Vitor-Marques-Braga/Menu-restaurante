const menu = [
    {
        id: 1,
        title: 'Brownie',
        category: "Café",
        price: 'R$:15',
        img: "./images/brownie.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id: 2,
        title: 'Café',
        category: 'Café',
        price: 'R$:7',
        img: "./images/café.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id: 3,
        title: 'Camarão',
        category: 'Almoço',
        price: 'R$:50',
        img: "./images/camarão.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id: 4,
        title: 'Picanha ao molho',
        category: 'Almoço',
        price: 'R$:45',
        img: "./images/carne.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id: 5,
        title: 'Croissant',
        category:'Café',
        price: 'R$:15',
        img: "./images/croissant.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id: 6,
        title: 'Dunets',
        category:'Café',
        price: 'R$:10',
        img: "./images/dunets.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
        id:7,
        title: 'Hamburguer com fritas',
        category:'Almoço',
        price: 'R$:25',
        img: './images/hamburguer-com-fritas.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        id:8,
        title: 'Macarrão',
        category: 'Almoço',
        price: "R$:25",
        img: './images/macarrão.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        id:9,
        title: 'Panquecas',
        category: 'Café',
        price: "R$:15",
        img: './images/panquecas.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        id:10,
        title: 'Salada',
        category: 'Almoço',
        price: "R$:20",
        img: './images/salada.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        id:11,
        title: 'Shake de Bluebarry',
        category: 'Bebidas',
        price: "R$:10",
        img: './images/shake-bluebarry.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        id:12,
        title: 'Shake de Chocolate',
        category: 'Bebidas',
        price: "R$:15",
        img: './images/shake-chocolate.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        id:13,
        title: 'Suco de Laranja',
        category: 'Bebidas',
        price: "R$:10",
        img: './images/shake-laranja.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },

    {
        id:14,
        title: 'Shake de Morango',
        category: 'Bebidas',
        price: "R$:15",
        img: './images/shake-morango.jpg',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
];

const sectionCenter = document.querySelector(".centralizar");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
displayMenu = displayMenu.join("");
  // console.log(displayMenu);

sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Tudo"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Tudo") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
