const button = document.querySelector(".btn");
const list = document.querySelector('ul');

button.addEventListener('click', ()=>{
    console.log("Button was clicked");
    const listItem = document.createElement('li');
    const input = document.createElement("p");
    input.setAttribute("contenteditable", "true");
    input.classList.add("note");
    const img = document.createElement('img');
    img.src = "images/delete.png";
    input.appendChild(img);
    listItem.appendChild(input);
    list.appendChild(listItem);
    saveData();
})

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        element = e.target.parentElement;
        element.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === 'P'){
        let notes = document.querySelectorAll('.note');
        notes.forEach((element)=>{
            element.onkeyup = function(){
                saveData();
            }
            })
        }
    })

const saveData = ()=>{
    localStorage.setItem('data', list.innerHTML);
}

const getData = ()=>{
    list.innerHTML = localStorage.getItem('data');
}

getData();