const questionBx = document.querySelectorAll('.questionBx')

const box = document.getElementById('box')
questionBx.forEach(e => {
  e.addEventListener('click', function () {
    this.classList.toggle('show')
    box.style.animation = 'jump 300ms forwards'
    setTimeout(() => {
      box.style.animation = ''
    }, 300)
  })
})
