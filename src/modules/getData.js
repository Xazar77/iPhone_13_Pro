


const getData = () => {
    const list = document.querySelector('.cross-sell__list')
    const moreBtn = document.querySelector('.cross-sell__add')

    let stack = 4
    let count = 1

    const render = (data) => {
        list.innerHTML = ''
        // console.log(data)
        data.forEach(item =>{
    
            const {id, name, photo, price} = item
                
            list.insertAdjacentHTML('beforeend', `
            <article class="cross-sell__item">
                <img class="cross-sell__image" src="${photo}" alt="${id}">
                <h3 class="cross-sell__title">${name}</h3>
                <p class="cross-sell__price">${price}₽</p>
                <button type="button" class="button button_buy cross-sell__button">Купить</button>
            </article>
            `)


        })
    }

    const sliceArray = (data, index) => {
        return data.slice(0, index)
    }
    const changeData = (data) => {
        const newStack = stack * count
        render(sliceArray(data, newStack))

        if(data.length > newStack) {
            count++
        } else {
            moreBtn.style.display = 'none'
        }
    }

    const getGoods = () => {
        fetch('https://iphone-13-pro-871a4-default-rtdb.firebaseio.com/db.json')
        .then(res => {

            if(res.ok) {
                return res.json()
            } else {
                throw new Error('Данные получены с ошибкой!')
            }
        })
        .then(data => {
            changeData(data)
        })
        .catch(error => {
            console.error(error.message)
        })
    }

    moreBtn.addEventListener('click', getGoods)
     
    getGoods()

}
export default getData