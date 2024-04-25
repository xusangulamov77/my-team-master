const  elBtn = [...document.querySelectorAll('.team-about__more')]
const teamCardContent = [...document.querySelectorAll('.team-card__content')]

for (let i = 0; i < elBtn.length; i++) {
    elBtn[i].addEventListener('mouseover',() => {
        elBtn[i].style.background = '#79C8C7'
    })
    elBtn[i].addEventListener('mouseout',() => {
        elBtn[i].style.background = '#F67E7E'
    })

    elBtn[i].addEventListener('click',() => {
        elBtn[i].classList.toggle('active')
        for (let k = 0; k < teamCardContent.length; k++) {
            teamCardContent[i].classList.add('active-content')
            teamCardContent[k].classList.remove('active-content')
        }
    })
}







