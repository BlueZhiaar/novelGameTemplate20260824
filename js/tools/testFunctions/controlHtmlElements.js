// ファイルの最上部付近で1度だけ宣言
let typeTimerId = null;


/**
 * 次のシーンに移るため画面をクリアにする
 * 
 */
export const messageArea = document.getElementById("messageArea");



// 画面を消去する関数
export function clearScene() {
  if (typeTimerId !== null) {
    clearTimeout(typeTimerId);
    typeTimerId = null;
  }
  messageArea.textContent = '';
}

// シーンをセットする関数
export function setScene(txt_body) {
  const targetElement = messageArea;
  const speed = 70;
  



  let charIndex = 0;

  function typeWriter() {
    if (charIndex < txt_body.length) {
      targetElement.textContent += txt_body.charAt(charIndex);
      charIndex++;
      typeTimerId = setTimeout(typeWriter, speed);
    } else {
      typeTimerId = null;
    }
  }

  typeWriter();
}


 // ボタンを生成する関数（第5引数に「クリック時に動かす処理」を1つだけ渡す）
// functions.js
export function makeButton(label, className, id, parentId, onClick) {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.className = className;
  btn.id = id;

  if (typeof onClick === 'function') {
    btn.addEventListener('click', onClick);
  }

  document.getElementById(parentId).appendChild(btn);
  return btn;
}

export function clearButton(){
    let selectButtonArea =document.getElementById("selectButtonArea");
    selectButtonArea.innerHTML ='';
}
