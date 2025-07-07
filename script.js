const search_box = document.querySelector(".search-box input")
const add_button = document.querySelector(".btn")
const list = document.querySelector("ul")
const check_box = document.querySelector(".tasks ul li")
const img = document.querySelectorAll(".tasks ul img")

check_box.addEventListener('click', ()=>{
    img.src='/images/checked.png'
})

const create_task = () =>{
    const newDiv = document.createElement('div');
    const listItem = document.createElement('li');
    const newDivImg = document.createElement('img');
    newDivImg.src='/images/unchecked.png';
    const newContent = document.createTextNode('Create a to-do-list application');
    const cross = document.createTextNode('X');
    newDiv.appendChild(newDivImg);
    newDiv.appendChild(newContent);
    newDiv.appendChild(cross);
    listItem.appendChild(newDiv)
    list.appendChild(listItem);
}

add_button.addEventListener('click', create_task)

