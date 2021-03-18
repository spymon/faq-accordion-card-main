const questionBx = document.querySelectorAll('.questionBx')

const box = document.getElementById('box')
questionBx.forEach(e => {
  e.addEventListener('click', function () {
    /* let arr = Array.from(questionBx).forEach(x => x.classList.remove('show')) */
    /*.filter(x => x.classList.contains('show'))
     */

    /* this.classList.contains('show')
      ? this.classList.remove('show')
      : this.classList.add('show') */
    this.classList.toggle('show')

    box.style.animation = 'jump 300ms forwards'
    setTimeout(() => {
      box.style.animation = ''
    }, 300)
  })
})
