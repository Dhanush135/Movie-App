// For Now Playing...................................

const options_NP = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNiZTI3MjZjMDE4YjVjZTJmZDgzM2RkNjljNjM3YyIsInN1YiI6IjY0ODJkM2RjZTM3NWMwMDBmZjQ3OWJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4IQ5dTgWAAJF9BuPTqR4TVjIoL6fuQjqqk1NrHvlMY'
    }
  };
  
//   fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options_NP)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

let obj_NP;

async function foo_np() {
    
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options_NP);
    obj_NP = await res.json();

}

const now_playing = document.querySelector(".carousel-inner");


async function nowplaying_div(){
    await foo_np();

    let flag = true;
    obj_NP.results.forEach(element => {
        // console.log(element);
        const np = document.createElement("div");
        np.classList.add("carousel-item");
        if (flag){
            np.classList.add("active");
            flag = false;
        }
        const image = document.createElement("img");
        image.classList.add("d-block");
        image.classList.add("w-100");
        var img =  "http://image.tmdb.org/t/p/w500" + element.poster_path;
        image.src = img;
        np.append(image);

        now_playing.append(np);

    });


}

nowplaying_div();





// For Now Playing...................................

// const options_NP = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNiZTI3MjZjMDE4YjVjZTJmZDgzM2RkNjljNjM3YyIsInN1YiI6IjY0ODJkM2RjZTM3NWMwMDBmZjQ3OWJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4IQ5dTgWAAJF9BuPTqR4TVjIoL6fuQjqqk1NrHvlMY'
//     }
//   };
  
// //   fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options_NP)
// //     .then(response => response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));

// let obj_NP;

// async function foo_np() {
    
//     const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options_NP);
//     obj_NP = await res.json();

// }

// const now_playing = document.querySelector(".carousel-inner");


// async function nowplaying_div(){
//     await foo_np();

//     let flag = true;
//     obj_NP.results.forEach(element => {
//         // console.log(element);
//         const np = document.createElement("div");
//         np.classList.add("carousel-item");
//         if (flag){
//             np.classList.add("active");
//             flag = false;
//         }
//         const div = document.createElement("div");
//         div.classList.add("d-block");
//         div.classList.add("w-100");
//         div.classList.add("center_image");
//         const image = document.createElement("img");
//         var img =  "http://image.tmdb.org/t/p/w500" + element.poster_path;
//         image.src = img;
//         div.style.backgroundImage = img;
//         div.append(image);
//         np.append(div);

//         now_playing.append(np);

//     });


// }

// nowplaying_div();






// For Popular Movies.................................

const options_P = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNiZTI3MjZjMDE4YjVjZTJmZDgzM2RkNjljNjM3YyIsInN1YiI6IjY0ODJkM2RjZTM3NWMwMDBmZjQ3OWJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4IQ5dTgWAAJF9BuPTqR4TVjIoL6fuQjqqk1NrHvlMY'
    }
  };
  
//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
  
let obj_P;
  
async function foo() {
    
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options_P);
    
    obj_P = await res.json();
    
  
}
  

const p_posters = document.querySelector(".p_posters");

async function popular_div(){
    await foo();

    obj_P.results.forEach(element => {
        // console.log(element);
        const popular = document.createElement("div");
        popular.classList.add("element");
        popular.addEventListener("click",() => {
            console.log(element);
            window.localStorage.setItem("movie_obj", JSON.stringify(element));
            window.location.href = "./details.html";
            
        });
        var img =  "http://image.tmdb.org/t/p/w500" + element.poster_path;
        popular.style.backgroundImage = "url(" + img + ")";

        p_posters.append(popular);        
    });

}

popular_div();


const body = document.querySelector(".body");






// For Trending Movies.............................

const options_TD = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNiZTI3MjZjMDE4YjVjZTJmZDgzM2RkNjljNjM3YyIsInN1YiI6IjY0ODJkM2RjZTM3NWMwMDBmZjQ3OWJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4IQ5dTgWAAJF9BuPTqR4TVjIoL6fuQjqqk1NrHvlMY'
    }
  };
  
//   fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

let obj_TD;

async function foo_td() {
    
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options_TD);
    obj_TD = await res.json();

}

const td_posters = document.querySelector(".td_posters");

async function trending_div(){
    await foo_td();

    obj_TD.results.forEach(element => {
        // console.log(element);
        const trending = document.createElement("div");
        trending.classList.add("element");
        trending.addEventListener("click",() => {
            console.log(element);
            window.localStorage.setItem("movie_obj", JSON.stringify(element));
            window.location.href = "./details.html";
            
        });
        var img =  "http://image.tmdb.org/t/p/w500" + element.poster_path;
        trending.style.backgroundImage = "url(" + img + ")";

        td_posters.append(trending);        
    });

}

trending_div();





// For Top Rated Movies.............................

const options_TR = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNiZTI3MjZjMDE4YjVjZTJmZDgzM2RkNjljNjM3YyIsInN1YiI6IjY0ODJkM2RjZTM3NWMwMDBmZjQ3OWJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4IQ5dTgWAAJF9BuPTqR4TVjIoL6fuQjqqk1NrHvlMY'
    }
  };
  
//   fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options_TR)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


let obj_TR;
  
async function foo_tr() {
    
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options_TR);
    obj_TR = await res.json();
    
}

const tr_posters = document.querySelector(".tr_posters");

async function toprated_div(){
    await foo_tr();

    obj_TR.results.forEach(element => {
        // console.log(element);
        const toprated = document.createElement("div");
        toprated.classList.add("element");
        toprated.addEventListener("click",() => {
            console.log(element);
            window.localStorage.setItem("movie_obj", JSON.stringify(element));
            window.location.href = "./details.html";
            
        });
        var img =  "http://image.tmdb.org/t/p/w500" + element.poster_path;
        toprated.style.backgroundImage = "url(" + img + ")";

        tr_posters.append(toprated);        
    });

}

toprated_div();



// For Upcoming Movies.................................

const options_UP = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNiZTI3MjZjMDE4YjVjZTJmZDgzM2RkNjljNjM3YyIsInN1YiI6IjY0ODJkM2RjZTM3NWMwMDBmZjQ3OWJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4IQ5dTgWAAJF9BuPTqR4TVjIoL6fuQjqqk1NrHvlMY'
    }
  };
  
//   fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


let obj_UP;

async function foo_up() {
    
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options_UP);
    obj_UP = await res.json();
    
}

const up_posters = document.querySelector(".up_posters");

async function upcoming_div(){
    await foo_up();

    obj_UP.results.forEach(element => {
        // console.log(element);
        const upcoming = document.createElement("div");
        upcoming.classList.add("element");
        upcoming.addEventListener("click",() => {
            console.log(element);
            window.localStorage.setItem("movie_obj", JSON.stringify(element));
            window.location.href = "./details.html";

        });
        var img =  "http://image.tmdb.org/t/p/w500" + element.poster_path;
        upcoming.style.backgroundImage = "url(" + img + ")";

        up_posters.append(upcoming);        
    });



}

upcoming_div();


// function up_click(el){
//     console.log(el);
// }

// async function on_Click(){

//     await upcoming_div();
//     await toprated_div();
//     await trending_div();
//     await popular_div();

//     const eles = document.querySelectorAll(".element");

//     console.log(eles);

//     console.log(typeof eles);

//     eles.forEach(element => {
//         console.log(element);
//         element.addEventListener("click", ()=> {
//             console.log(this);
//         })
//     });
// } 

// on_Click();



// Search icon..................................

const search_icon = document.getElementById("s_icon");
const search_value = document.getElementById("s_value");

// console.log(search_icon);





search_icon.addEventListener("click", () => {
    var val = search_value.value;
    window.localStorage.setItem("movie_name", val);
    window.location.href = "./search.html";
});



// Clicking on enter.................................

var input = document.getElementById("s_value");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("s_icon").click();
  }
});













