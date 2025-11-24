import { getTrendingMovies } from "./script.js";
import { getGenre } from "./script.js";

// const genres = await getGenre();
// for(let obj of genres){
//     for(let val in obj){
//         console.log();
//     }
// }

let count = 0;
const movies = await getTrendingMovies();
const poster_paths = await getTrendingMovies();
const paths = poster_paths.map(path => path.poster_path);
const base_url = "https://image.tmdb.org/t/p/";
const poster_size = "w185";

const img_sources = paths.map(path => `${base_url}${poster_size}${path}`);

const trendingSection = document.getElementById("trending-movies");

// function createTrendingSection(){
//     for(let path of img_sources){
//         const image = document.createElement('img');
//         image.src = path;
//         image.className = "w-[300px] rounded-xl cursor-pointer origin-center hover:scale-110"
//         trendingSection.appendChild(image);
//     }

//     console.log("trending section was created");
// }

async function createTemplate(){

        for(let movie_details of movies){
            count+=1;
            const path = movie_details.poster_path;
            const base_url = "https://image.tmdb.org/t/p/";
            const poster_size = "w342";
            const movie_poster_path = `${base_url}${poster_size}${path}`; // poster path

            const movie_title = movie_details.original_title;
            const movie_vote = movie_details.vote_average;
            const movie_release_date = movie_details.release_date;

            const container = document.createElement('div');
            container.className = `w-[295px] h-[500px] bg-blue-300 rounded-2xl relative opacity-95 font-[Helvetica Neue] cursor-pointer bg-no-repeat bg-cover sm:w-[342px] sm:h-[513px]`;
            container.style.backgroundImage = `url(${movie_poster_path})`;

            const numberContainer = document.createElement('div');
            numberContainer.className= "bg-black border-2 border-red-500 h-[90px] w-[60px] px-4 py-4 relative left-8 top-10 rounded-lg flex justify-center items-center opacity-70"

            const number = document.createElement('h1');
            number.textContent = `${count}`;
            number.className = "text-4xl font-bold text-red-500"

            numberContainer.appendChild(number);

            const description = document.createElement('div');
            description.className = "text-white absolute bottom-8 left-4 w-full gap-4";
            const title = document.createElement('h1');
            title.textContent = `${movie_title}`;
            title.className = "text-[1.9rem] font-bold text-shadow-lg/40"

            const innerContainer = document.createElement('div');
            innerContainer.className="flex relative";

            const year = document.createElement('h1');
            year.textContent = `${movie_release_date}`;
            year.className = "text-lg"

            const genre = document.createElement('h1');
            genre.textContent = "Animation, Family";
            genre.className = "text-lg"

            const ratings = document.createElement('div');
            ratings.textContent = `${movie_vote}`;
            ratings.className = "bg-red-500 box-border px-2 rounded-lg absolute right-8"

            innerContainer.appendChild(year);
            innerContainer.appendChild(ratings);

            description.appendChild(title);
            description.appendChild(innerContainer);
            description.appendChild(genre);

            container.appendChild(numberContainer);
            container.appendChild(description);

            trendingSection.appendChild(container);
        } 
}

// createTrendingSection();
createTemplate()
