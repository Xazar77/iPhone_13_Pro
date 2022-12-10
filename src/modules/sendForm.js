const sendForm = () => {

    const modalOpenBtn = document.querySelector('.card-details__button_delivery')
    const cardTitle = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal')
    const modalTitle = modal.querySelector('.modal__title')
    const modalCloseBtn = modal.querySelector('.modal__close')
    const modalForm = modal.querySelector('form')

    let isError;

    modalOpenBtn.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardTitle.textContent
    })

    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none'

    })


    const validInput = () => {
        isError= false;

        const listInput = modalForm.querySelectorAll('.modal__input')

        
        listInput.forEach(input => {
    
                const value = input.value.trim()
                if(value === '') {
                    isError = true;

                }

            // return isError
        })
        console.log(isError)
        return isError
        
       

    }

    modalForm.addEventListener('submit', (e) => {
        e.preventDefault()
       
        const labels = modal.querySelectorAll('.modal__label')
        const sendMessage = {}

        labels.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            sendMessage[span.textContent] = input.value
        })


        if(!validInput()) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(sendMessage),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {

                if (response.status === 200 || response.status === 201) {

                    response.json()
                    modalForm.reset()
                    modal.style.display = 'none'

                }


            })
        }

    })




}
export default sendForm