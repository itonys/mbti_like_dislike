'use strict';

// first loading-bar
const loadingBar1 = document.querySelector('.loading-bar.left-bar');
const percentNum1 = loadingBar1.querySelector('.persent-num');
const ratioClass1 = Array.from(loadingBar1.classList).find((cls) =>
  cls.startsWith('ratio--')
);
const percentValue1 = parseInt(ratioClass1.split('--')[1]);

if (percentValue1 <= 15) {
  percentNum1.style.display = 'none'; // hidden
} else {
  percentNum1.style.display = 'block';
}

// second loading-bar
const loadingBar2 = document.querySelector('.loading-bar.right-bar');
const percentNum2 = loadingBar2.querySelector('.persent-num');
const ratioClass2 = Array.from(loadingBar2.classList).find((cls) =>
  cls.startsWith('ratio--')
);
const percentValue2 = parseInt(ratioClass2.split('--')[1]);

if (percentValue2 <= 15) {
  percentNum2.style.display = 'none'; // hidden
} else {
  percentNum2.style.display = 'block';
}
