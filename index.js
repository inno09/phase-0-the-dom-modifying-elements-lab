const main =document.querySelector('main')
main.remove()
const newHeader =document.createElement('h1')
newHeader .setAttribute('id', 'victory')
document.body.appendChild(newHeader)
newHeader.textContent ='INNO is the champion'