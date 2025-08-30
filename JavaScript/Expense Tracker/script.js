const addBtn = document.querySelector('.add-btn');
const expense = document.querySelector('.expense-name');
const amount = document.querySelector('.expense-amount');
const list = document.querySelector('.list');
const deleteBtn = document.querySelector('.expenses ul');
const TotalAmount = document.querySelector('.total-amount');
let totalAmount = 0;

addBtn.addEventListener('click', createExpense);

deleteBtn.addEventListener('click', (e)=>{
    if (e.target.tagName === 'BUTTON'){
        parentElement = e.target.parentElement;
        removeAmount(parentElement);
        parentElement.remove();
        saveData();
    }
})

function createExpense(){
    if(expense.value == '' || amount.value == ''){
        alert('The input box cannot be left empty');
    }else{
        const item = document.createElement('li');
        const text = document.createElement('p');
        text.textContent = `${expense.value} - ${amount.value}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "delete";
        item.appendChild(text);
        item.appendChild(deleteBtn);
        list.appendChild(item);
        addAmount();
        expense.value = '';
        amount.value = '';
        saveData();
    }                                                                                                        
}

function addAmount(){
    totalAmount = Number(amount.value) + Number(totalAmount);
    TotalAmount.textContent = `Total: ₹${totalAmount}`;
}

function removeAmount(parentElement){
        let item = parentElement.children[0].textContent;
        let cost = item.split('-')[1].trim();
        let actualAmount = TotalAmount.textContent
        let amountVal = actualAmount.split('₹')[1];   
        let calc = Number(amountVal) - Number(cost)
        TotalAmount.textContent = `Total: ₹${calc}`  
        totalAmount = calc;                        
}

function saveData(){
    const data = list.innerHTML;
    localStorage.setItem('expenseData', data);
    localStorage.setItem('expenseAmount', TotalAmount.textContent);
}

function reloadData(){
    const listData = localStorage.getItem('expenseData');
    list.innerHTML = listData;
    TotalAmount.textContent = localStorage.getItem('expenseAmount');
}

function reset(){
    localStorage.removeItem('expenseData')
    localStorage.removeItem('expenseAmount')
}

reloadData()