// Clear existing stars if reloaded
const starfield = document.querySelector('.starfield');
starfield.innerHTML = '';

const starCount = 100;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random size between 1px and 2.5px
  const size = Math.random() * 1.5 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  // Random position in viewport
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';

  // Random animation delay to stagger twinkle
  star.style.animationDelay = (Math.random() * 10) + 's';

  starfield.appendChild(star);
}