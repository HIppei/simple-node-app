// エレメントを取得
const dialog = document.getElementById('dialog');
const overlay = document.getElementById('overlay');
const openButton = document.getElementById('open-button');

// 表示処理
openButton.addEventListener('click', open);
function open() {
  dialog.style.opacity = 1;
  dialog.style.visibility = 'visible';
  overlay.style.opacity = 1;
  overlay.style.visibility = 'visible';
}

// 非表示処理
overlay.addEventListener('click', close);
function close() {
  dialog.style.opacity = 0;
  dialog.style.visibility = 'hidden';
  overlay.style.opacity = 0;
  overlay.style.visibility = 'hidden';
}
