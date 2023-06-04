// window.addEventListener('DOMContentLoaded', function() {
//   var ticker = document.querySelector('.ticker1__list');
//   var items = ticker.querySelectorAll('.ticker1__item');
  
//   // Копируем элементы списка для создания эффекта зацикленности
//   for (var i = 0; i < items.length; i++) {
//     var clone = items[i].cloneNode(true);
//     ticker.appendChild(clone);
//   }
// });


window.addEventListener('DOMContentLoaded', function() {
  const ticker1 = document.querySelector('.ticker1__list--1');
  const ticker2 = document.querySelector('.ticker2__list--2');
  const items1 = ticker1.querySelectorAll('.ticker1__item');
  const items2 = ticker2.querySelectorAll('.ticker2__item');

  // Копируем элементы списка для создания эффекта зацикленности
  for (let i = 0; i < items1.length; i++) {
    const clone1 = items1[i].cloneNode(true);
    ticker1.appendChild(clone1);
  }

  for (let i = 0; i < items2.length; i++) {
    const clone2 = items2[i].cloneNode(true);
    ticker2.appendChild(clone2);
  }
});

