const tabs = () => {

    const tabBtns = document.querySelectorAll('.card-detail__change')
    const tabsTitle = document.querySelector('.card-details__title')
    const tabsPrice = document.querySelector('.card-details__price')
    const tabsImages = document.querySelectorAll('.card__image_item')
    

// console.log(tabsImage)

    const tabsOptions = [
        {
            name: 'Graphite',
            memory: '128',
            price: 70000,
       
        },
        {
            name: 'Silver',
            memory: '256',
            price: 85000,
       
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: 99990,

        }
    ]


    const changeContent = (idx) => {
        const {name, memory, price} = tabsOptions[idx]
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${memory}GB ${name}`
        tabsPrice.textContent = `${price}₽`
        document.title = tabsTitle.textContent

    }



    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tabBtns.forEach((el, id) => {
                el.classList.remove('active')
                tabsImages[id].classList.add('hidden')
            })
            btn.classList.add('active')
            tabsImages[index].classList.remove('hidden')
            

            changeContent(index)
        })
   
    })

    changeContent(0)

}

export default tabs