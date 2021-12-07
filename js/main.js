// Это попап\всплывашка
const closeBtn = document.querySelector('.biscard__socnet-close');
const tooltip = document.querySelector('.header__quest-inner');

setTimeout(popUpVisible, 3000);

closeBtn.addEventListener('click',(e) => {
  e.preventDefault()
  tooltip.style.transform = "translateX(-200vh)";
  
});

function popUpVisible() {
tooltip.style.transform = "translateX(0vh)"
};
// конец всплывашки
