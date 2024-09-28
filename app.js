let submit = document.querySelector('button')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

submit.addEventListener('click',function(){
    let item = document.createElement('li')
    item.innerText= input.value
    
    let button = document.createElement('button')
    button.innerText= "Delete"
    button.classList.add('delete')
    
    item.appendChild(button)
    ul.appendChild(item)
    input.value = null
    
})

let dltbtns = document.querySelectorAll('.delete')

for (dltbtn of dltbtns){
    dltbtn.addEventListener('click', function(){
       par = this.parentElement
       par.remove()
    })
}