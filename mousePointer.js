const cursorPointer = document.getElementById('cursorPointer');

const movePointer = (e) => {
  const mouseY = e.clientY - cursorPointer.offsetHeight / 2;
  const mouseX = e.clientX - cursorPointer.offsetWidth / 2;
  cursorPointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}

const clickPointer = (e) => {
  cursorPointer.classList.remove('mouseup')
  cursorPointer.classList.add('mousedown')
}

const unclickPointer = (e) => {
  cursorPointer.classList.remove('mousedown')
  cursorPointer.classList.add('mouseup')
}

window.addEventListener('mousemove', movePointer);
window.addEventListener('mousedown', clickPointer);
window.addEventListener('mouseup', unclickPointer);