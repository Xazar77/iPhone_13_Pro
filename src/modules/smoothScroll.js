import { scrollIntoView } from "seamless-scroll-polyfill";



const smoothScroll = () => {


    const headerMenu = document.querySelectorAll('.header-menu__item a')
    const cardsLinks = document.querySelector('.card-details__link-characteristics')
    
    
    const arr = [...headerMenu,cardsLinks]
    arr.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const id = e.target.getAttribute('href').substr(1)

            if(id !== '') {
               scrollIntoView(document.getElementById(id), { behavior: "smooth", block: "start"}) 
            } 

            
        })
    })

}
export default smoothScroll