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


const eye2 = document.querySelector('.eye2');
const pupil2 = document.querySelector('.pupil2');

document.addEventListener('mousemove', (e) => {
  const rect = eye2.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;

  const angle = Math.atan2(dy, dx);
  const maxMove = rect.width / 6;

  const x = Math.cos(angle) * maxMove;
  const y = Math.sin(angle) * maxMove;

  pupil2.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});
