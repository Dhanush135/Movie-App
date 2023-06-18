let str_obj = window.localStorage.getItem("movie_obj");

const obj = JSON.parse(str_obj)

const pictur = document.querySelector(".pic");

const image = document.createElement("img");
var img =  "http://image.tmdb.org/t/p/w500" + obj.poster_path;
image.src = img;

pictur.append(image);


// For detail..............................

var m_name = obj.title;
var m_date = "Release date: " + obj.release_date;
// console.log(m_date);
var m_overview = obj.overview;

const p_name = document.querySelector(".title");
const p_date = document.querySelector(".release");
const p_overview = document.querySelector(".overview");

const movie_name = document.createTextNode(m_name);
const movie_date = document.createTextNode(m_date);
const movie_oververview = document.createTextNode(m_overview);

p_name.append(movie_name);
p_date.append(movie_date);
p_overview.append(movie_oververview);




// For similar Movies...................

const options_S = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNiZTI3MjZjMDE4YjVjZTJmZDgzM2RkNjljNjM3YyIsInN1YiI6IjY0ODJkM2RjZTM3NWMwMDBmZjQ3OWJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4IQ5dTgWAAJF9BuPTqR4TVjIoL6fuQjqqk1NrHvlMY'
    }
  };


var url = "https://api.themoviedb.org/3/movie/" + obj.id + "/similar?language=en-US&page=1";
  
//   fetch(url, options_S)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



let obj_S;

async function foo_s() {
    
    const res = await fetch(url, options_S);
    obj_S = await res.json();
    
}

const s_posters = document.querySelector(".s_posters");

console.log(s_posters);

async function similar_div(){
    await foo_s();

    if (obj_S.results.length == 0){
        const para = document.createElement("p");
        para.classList.add("not_found");
        const data = document.createTextNode("No similar movies found!");
        para.append(data);
        s_posters.append(para);
    }

    else{
        obj_S.results.forEach(element => {
            // console.log(element);
            const similar = document.createElement("div");
            similar.classList.add("element");
            similar.addEventListener("click",() => {
                console.log(element);
                window.localStorage.setItem("movie_obj", JSON.stringify(element));
                window.location.href = "./details.html";

            });
            var img =  "http://image.tmdb.org/t/p/w500" + element.poster_path;
            similar.style.backgroundImage = "url(" + img + ")";

            s_posters.append(similar);        
    });

    }


}

similar_div();