document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('.red-btn');
  const modal = document.querySelector('.modal');
  const menuColumns = document.querySelectorAll('.menu-column');
  const menuMoreContainer = document.querySelector('.menu-more-container');
  const column1 = document.querySelector('#column-1');
  const column2 = document.querySelector('#column-2');

  menuColumns.forEach((column) => {
    column.style.display = 'none';
  });
  menuMoreContainer.style.display = 'none';

  modal.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  button.addEventListener('click', (e) => {
    modal.className = 'modal modal-show';
  });

  const modalLinks = document.querySelectorAll('.modal-links li');

  modalLinks.forEach((link) => {
    link.addEventListener('click', function () {
      const targetId = link.getAttribute('data-target');
      menuColumns.forEach((column) => {
        column.style.display = 'none';
      });

      const targetColumn = document.getElementById(targetId);
      if (targetColumn) {
        targetColumn.style.display = 'flex';

        if (targetId === 'drinks' && isTeaSelected()) {
          menuMoreContainer.style.display = 'flex';
        } else {
          menuMoreContainer.style.display = 'none';
        }
      }
    });
  });


  function isTeaSelected() {
    const drinksColumn = document.getElementById('drinks');
    const drinkItems = drinksColumn.querySelectorAll('.modal-links li');
    for (const item of drinkItems) {
      if (item.textContent === 'Чай') {
        return true;
      }
    }
    return false;
  }


  function populateMenuItems(data, container) {
    data.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.classList.add("f-left");


      const div = document.createElement("div");

      const name = document.createElement("p");
      name.textContent = item.itemName;

      const price = document.createElement("h5");
      price.classList.add("wgt-500");
      price.textContent = item.itemPrice;

      const quantity = document.createElement("span");
      quantity.classList.add("lt");
      quantity.textContent = item.itemQuantity;

      menuItem.appendChild(img);
      name.appendChild(quantity);
      div.appendChild(name);
      div.appendChild(price);
      menuItem.appendChild(div);

      container.appendChild(menuItem);
    });
  }

  const drinksData = [
    {
      imgSrc: "img/tea.svg",
      itemName: "Чай \"Асорті\" (12 шт), 50 г.",
      itemPrice: "294,84 грн",
      itemQuantity: "1 уп."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Асорті\" без доданого цукру, з медом (24 шт), 50 г.",
      itemPrice: "347,52 грн",
      itemQuantity: "1 уп."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Лісові ягоди\" (13 шт), 50 г.",
      itemPrice: "289,40 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Облепиха з чебрецем\" (12 шт), 50 г.",
      itemPrice: "270,00 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Асорті\" (24 шт), 60 г.",
      itemPrice: "350,00 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Асорті\" (24 шт), 60 г.",
      itemPrice: "285,00 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Асорті\" (13 шт), 40 г.",
      itemPrice: "395,00 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Калина з естрогоном\" (12 шт), 50 г.",
      itemPrice: "240,00 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Смородина з базиліком\" (12 шт), 50 г.",
      itemPrice: "240,00 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Чорниця\" (12 шт), 50 г.",
      itemPrice: "250,00 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Полуниця\" (12 шт), 50 г.",
      itemPrice: "299,00 грн",
      itemQuantity: "1 шт."
    },

    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Абрикос\" (12 шт), 50 г.",
      itemPrice: "179,00 грн",
      itemQuantity: "1 шт."
    },
    { imgSrc: "img/tea.svg",
      itemName: "Чай \"Лісова ягода\" (12 шт), 50 г.",
      itemPrice: "199,00 грн",
      itemQuantity: "1 шт."
    },
  ];

  populateMenuItems(drinksData, column1);
  populateMenuItems(drinksData, column2);
  document.addEventListener('click', (e) => {
    if (e.target !== modal && e.target !== button && !modal.contains(e.target)) {
      modal.className = 'hide';
    }
  });
});



  // Mobile menu script


const burgerButton = document.querySelector('.burger');
const modal = document.querySelector('.mb-menu');
const closeButton = document.querySelector('.close-button'); // Этот элемент нужно создать

burgerButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

