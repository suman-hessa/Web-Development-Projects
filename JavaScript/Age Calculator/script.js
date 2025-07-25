const input = document.querySelector("input");
const button = document.querySelector(".btn");
const outputText = document.querySelector(".output");

button.addEventListener('click', ()=>{
    getAge();
})

function findLeapYear(year){

    let isLeapYear = false;

    if(year%4 == 0 && year%100 !== 0){
        isLeapYear = true;
    }
    else if(year%100 == 0 && year%400 == 0){
        isLeapYear = true;
    }
    else{
        isLeapYear = false;
    }
    return isLeapYear;
}

const norm_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leap_Months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function getAge(){
    dateOfBirth = input.value;
    yearOfBirth = dateOfBirth.split('-')[0];
    let months = [];

    if(findLeapYear(yearOfBirth)){
        months = leap_Months;
    }
    else {
        months = norm_months;
    }
    your_age = calculateAge(dateOfBirth, months);
    outputText.innerHTML = your_age;
}

function calculateAge(dateOfBirth, month_data){

    result_month = 0;
    result_year = 0;
    result_day = 0;

    year = dateOfBirth.split('-')[0];
    month = dateOfBirth.split('-')[1];
    day = dateOfBirth.split('-')[2];

    const now = new Date();
    current_year = now.getFullYear();
    current_month = now.getMonth() + 1;
    current_day = now.getDate();

    yearDiff = current_year - year;
    monthDiff = current_month - month;
    dayDiff = current_day - day;

    if(monthDiff < 0){
        result_year = yearDiff - 1;
        result_month = 12 + monthDiff; 
    }
    else{
        result_year  = yearDiff;
    }
    if (dayDiff < 0){
        result_year = yearDiff;
        result_month = monthDiff - 1;
        result_day = month_data[result_month-1] + dayDiff;
    }
    else{
        result_day = dayDiff;
    }
    return `You are ${result_year} years, ${result_month} months and ${result_day} days old`;
}
