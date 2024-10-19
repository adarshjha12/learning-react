let heading = document.querySelector('h1')
let button = document.querySelector('button')

let counter = 15


button.addEventListener('click', (e) =>{
    e.preventDefault()
    counter = counter + 1
    console.log(counter);
    heading.innerHTML = " " + '-' + "  " + counter

})

