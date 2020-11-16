// hide header on scroll down & show on scroll up
const header = document.getElementById('header')
let lastPos = document.documentElement.scrollTop
window.addEventListener('scroll', function () {
  const currPos = document.documentElement.scrollTop
  if (currPos > lastPos) {
    if (currPos > header.offsetHeight) {
      header.classList.add('hide-header')
      header.classList.remove('nice-shadow')
    }
  } else {
    header.classList.remove('hide-header')
    header.classList.add('nice-shadow')
  }
  lastPos = currPos
})
