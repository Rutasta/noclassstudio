
// curtain 

const curtain = document.getElementById('contact-content');
const curtainSection = document.getElementById('curtain');

function onScroll() {
    requestAnimationFrame(() => {
        const sectionTop = curtainSection.offsetTop;
        const scrollY = window.scrollY;
        const progress = scrollY - sectionTop;

        const liftLimit = curtain.offsetHeight / 4; // how much the curtain lifts

        if (progress >= 0 && progress <= liftLimit) {
            curtain.style.transform = `translateY(-${progress}px)`;
        } else if (progress < 0) {
            curtain.style.transform = 'translateY(0)';
        } else {
            curtain.style.transform = `translateY(-${liftLimit}px)`;
        }
    });
}

window.addEventListener('scroll', onScroll);


//main animation 
document.addEventListener('DOMContentLoaded', () => {
  const nameMain = document.querySelector('.name-main');
  const text = nameMain.textContent;
  nameMain.innerHTML = '';

  // Split into individual spans
  for (let char of text) {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    nameMain.appendChild(span);
  }
});






// eye

const eye = document.querySelector('.eye');
const pupil = document.querySelector('.pupil');

document.addEventListener('mousemove', (e) => {
  const rect = eye.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;

  const angle = Math.atan2(dy, dx);
  const maxMove = rect.width / 6;

  const x = Math.cos(angle) * maxMove;
  const y = Math.sin(angle) * maxMove;

  pupil.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});

// hadn 


const img = document.getElementById("followImg");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Smooth follow (lerp)
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;

 img.style.transform = `
  translate(${currentX}px, ${currentY}px)
  translate(0, 0)
`;


  requestAnimationFrame(animate);
}

animate();

const overlay = document.querySelector('.overlay');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // adjust 0.1 for subtle movement
  overlay.style.transform = `translateY(${scrollY * 0.1}px)`;
});
const nav = document.getElementById('navbar');
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
document.querySelectorAll('.nav-link a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});
