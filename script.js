const gradients = ['gradient-0', 'gradient-1', 'gradient-2', 'gradient-3'];
const main = document.querySelector('main');

main.addEventListener('click', () => {
  const currentClass = main.className;
  const currentIndex = parseInt(currentClass.split('-')[1]);
  const nextIndex = (currentIndex + 1) % gradients.length;
  main.className = gradients[nextIndex];
});