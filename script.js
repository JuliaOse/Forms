inputs = document.querySelectorAll('input')
finput = document.querySelector('#first-input')
sinput = document.querySelector('#second-input')
textarea = document.querySelector('textarea')
button = document.querySelector('button')
h1 = document.querySelector('h1')

finput.addEventListener('click', () =>{
    if (finput.value === "Full name") {
        finput.value = null
    }
})


sinput.addEventListener('click', () =>{
    if (sinput.value === "email address") {
        sinput.value = null
    }
})

textarea.addEventListener('click', () =>{
    if (textarea.value === "your message here") {
        textarea.value = null
    }
})

button.addEventListener('click',() =>{
    if(inputs.value !=  null && textarea.value !== null){
        document.querySelector('form').reset()
        
    }

    h1.innerHTML = "okay" 
}) 

