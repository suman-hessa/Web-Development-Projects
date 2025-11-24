const body = document.querySelector('body');

async function createTemplate(){
    const container = document.createElement('span');
    container.className = "w-[300px] min-h-[450px] bg-[url(https://image.tmdb.org/t/p/w342/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg)] bg-center bg-no-repeat bg-cover rounded-xl text-white relative";

    const number = document.createElement('div');
    number.className= "absolute h-[100px] w-[60px] bg-purple-500 top-4 left-4 rounded-xl text-4xl flex justify-center items-center"
    number.textContent = "1";

    const description = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "Zootopia 2";
    title.className = "text-4xl font-semibold"

    const year = document.createElement('h1');
    year.textContent = "2025";
    year.className = "text-xl"

    const genre = document.createElement('h1');
    genre.textContent = "Animation, Family";
    genre.className = "text-xl"

    description.appendChild(title);
    description.appendChild(year);
    description.appendChild(genre);

    container.appendChild(number);
    container.appendChild(description);

    body.appendChild(container);
}