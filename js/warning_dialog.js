'use strict';

const setDeployElements = document.querySelectorAll('.setWarning');
const overlay = document.querySelector('.overlay');

setDeployElements.forEach((setDeploy) => {
  setDeploy.addEventListener('click', () => {
    if (overlay.style.display === 'block') {
      overlay.style.display = 'none';
      document.body.classList.remove('modal-open');
    } else {
      overlay.style.display = 'block';
      document.body.classList.add('modal-open');
    }
  });
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});
