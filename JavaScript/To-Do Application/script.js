const search_box = document.querySelector(".search-box input")
const add_button = document.querySelector(".btn")
const list = document.querySelector("ul")
const list_items = document.querySelectorAll('ul li')

function saveData(){
    localStorage.setItem('toDoData', list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem('toDoData');
}

const addTask = async () =>{
    if (search_box.value == ''){
        alert("The input cannot be blank!");
    }
    else{
            const listItem = document.createElement('li');
            listItem.innerHTML = search_box.value;
            const span = document.createElement('span');
            span.innerHTML = '\u00d7';
            listItem.appendChild(span);
            list.append(listItem);
            search_box.value = ''
            saveData();
    }
}

list.addEventListener('click', (event)=>{

    if (event.target.tagName === "LI"){
        element = event.target;
        element.classList.toggle('checked');
        saveData();  
    }    
    else if (event.target.tagName === "SPAN"){
        element = event.target;
        parent_element = element.parentElement
        parent_element.remove()
        saveData();
    }  
})

add_button.addEventListener('click', addTask);

search_box.addEventListener('keypress', (event)=>{
    if (event.key === 'Enter'){
        addTask();
    }
})

showData();
