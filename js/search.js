let search_value = window.localStorage.getItem("movie_name");

console.log(search_value);

// For search.................................

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNiZTI3MjZjMDE4YjVjZTJmZDgzM2RkNjljNjM3YyIsInN1YiI6IjY0ODJkM2RjZTM3NWMwMDBmZjQ3OWJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4IQ5dTgWAAJF9BuPTqR4TVjIoL6fuQjqqk1NrHvlMY'
    }
  };
  
var url = "https://api.themoviedb.org/3/search/movie?query=" + search_value + "&include_adult=false&language=en-US&page=1";

  fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


let obj;

async function foo() {
        
    const res = await fetch(url, options);
    obj = await res.json();
        
}

const container_div = document.querySelector(".container_grid");

async function search_div(){
    await foo();

    if (obj.results.length == 0){
        const para = document.createElement("p");
        para.classList.add("not_fount");
        const data = document.createTextNode("No match found!");
        para.append(data);
        container_div.append(para);
    }
    else{
    obj.results.forEach(element => {
        const image = document.createElement("img");

        var img =  "http://image.tmdb.org/t/p/w500" + element.poster_path;

        image.src = img;

        image.addEventListener("click",() => {
            console.log(element);
            window.localStorage.setItem("movie_obj", JSON.stringify(element));
            window.location.href = "./details.html";

        });

        container_div.append(image);

    });
    }



}

search_div();