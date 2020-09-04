const modalOverlay = document.querySelector('.modalOverlay')
const closeButton = document.querySelector('.closeButton')
const cards = document.querySelectorAll('.card')




for(let card of cards){
   
    card.addEventListener("click" , () => {

        let cardID = card.getAttribute('id')
        let cardAlt = card.getAttribute('alt')
       
   
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src=`${cardID}`
        modalOverlay.querySelector('img').alt=`${cardAlt}`
       
    
    } )
    
}


closeButton.addEventListener('click' , () => {

    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src=''
    modalOverlay.querySelector('img').alt=''
    
} )

