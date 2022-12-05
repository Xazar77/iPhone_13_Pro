const accordeon = () => {

    const btns = document.querySelectorAll('.characteristics__title')
    const descr = document.querySelectorAll('.characteristics__description')

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btns.forEach((el, id) => {

                el.classList.remove('active')
                descr[id].style.height = ''
                descr[id].classList.remove('active')

               
            })
            btn.classList.add('active')
            descr[index].style.height = descr[index].scrollHeight + 'px'
            descr[index].classList.add('active')
        })
        if(btn.classList.contains('active')) {
            console.log('yes')
            btn.addEventListener('click', () => {
                btn.classList.remove('active')
                descr[index].style.height = ''
                descr[index].classList.remove('active')
            })
        }
    })










    // const chItems = document.querySelectorAll('.characteristics__item')

    // chItems.forEach(item => {
    //     const chBtn = item.querySelector('.characteristics__title')
    //     const chContent = item.querySelector('.characteristics__description')


    //     chBtn.addEventListener('click', () => {

    //         if(chContent.classList.contains('open')) {
    //             chContent.style.height = ''
    //         } else {
    //             chContent.style.height = chContent.scrollHeight + 'px'
    //         }
    //         chBtn.classList.add('active')
    //         chContent.classList.add('open')
    //     })
    // })

}
export default accordeon