// import dotenv from "dotenv"

// dotenv.config({
//     path: "./.env"
// })

export async function getTrendingMovies(){
    const time_window = 'week'
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTU5YzJhMmE3ZmY3ZDkyZGI3M2JiNWE2ZWQ1MGNiZiIsIm5iZiI6MTc2MjI3MDQ3OS41MzMsInN1YiI6IjY5MGExZDBmYTZiOWRlYmMyMTExMjlhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rF3-aODhRQihVX-5h2YwZDpQbbyfDFoTUw6PPjJgONg`
        }
    }
    const params = new URLSearchParams({language: "en-US",})

    try {
        const url = `https://api.themoviedb.org/3/trending/movie/${time_window}?${params.toString()}`;

        const response = await fetch(url, options);

        if(!response.ok){
            throw new Error(`Error message: ${response}`)
        };

        const data = await response.json();
        const result = data.results;

        return result;
    } catch (error) {
            console.log("inside catch");
            console.log(error.message);
    }
}

export async function getGenre(){
    const url = "https://api.themoviedb.org/3/genre/movie/list";

    const params = new URLSearchParams({language: "en"});
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTU5YzJhMmE3ZmY3ZDkyZGI3M2JiNWE2ZWQ1MGNiZiIsIm5iZiI6MTc2MjI3MDQ3OS41MzMsInN1YiI6IjY5MGExZDBmYTZiOWRlYmMyMTExMjlhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rF3-aODhRQihVX-5h2YwZDpQbbyfDFoTUw6PPjJgONg"
        }
    }
    try {
        const response = await fetch(`${url}?${params.toString()}`, options);
        if(!response.ok){
            throw new Error(`Error message: ${response.status}`)
        }

        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.log(error.message);
    }
    
}