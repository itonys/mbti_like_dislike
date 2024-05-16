'use strict';

const iconSearch = document.querySelector('.header-search');
const searchModal = document.querySelector('.search-modal');
const closeBtn = document.querySelector('.close-btn');

iconSearch.addEventListener('click', () => {
  if (searchModal.classList.contains('show')) {
    searchModal.classList.remove('show');
    setTimeout(() => {
      searchModal.style.display = 'none';
    }, 300); // 애니메이션 시간에 맞춰서 조정
  } else {
    searchModal.style.display = 'flex';
    setTimeout(() => {
      searchModal.classList.add('show');
    }, 10); // 약간의 지연을 주어 display: block이 적용되도록 함
  }
});

document.addEventListener('click', (event) => {
  if (
    !iconSearch.contains(event.target) &&
    !searchModal.contains(event.target)
  ) {
    searchModal.classList.add('hide');
    setTimeout(() => {
      searchModal.classList.remove('show', 'hide');
      searchModal.style.display = 'none';
    }, 300); // 애니메이션 시간에 맞춰서 조정
  }
});

closeBtn.addEventListener('click', () => {
  searchModal.classList.add('hide');
  setTimeout(() => {
    searchModal.classList.remove('show', 'hide');
    searchModal.style.display = 'none';
  }, 300); // 애니메이션 시간에 맞춰서 조정
});
