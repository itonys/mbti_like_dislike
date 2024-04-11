'use strict';

// プロフィール pulldown : header .acount
const myLanguage = document.querySelector('.language');
const myLang = document.querySelector('.lang-pulldown');
let isPulldown = false;

myLanguage.addEventListener('click', togglePulldown);

function togglePulldown(event) {
  event.stopPropagation();
  if (isPulldown) {
    closePulldown();
  } else {
    openPulldown();
  }
}

function openPulldown() {
  myLang.style.display = 'block';
  isPulldown = true;
  document.addEventListener('click', outsideLang);
}

function closePulldown() {
  myLang.style.display = 'none';
  isPulldown = false;
  document.removeEventListener('click', outsideLang);
}

function outsideLang(event) {
  if (!myLang.contains(event.target)) {
    closePulldown();
  }
}
