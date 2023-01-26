


// const divElement = function (content){
//   return `<div>${content}</div>`;
// }

// const imgElement = function (link){
//   return `<img src="${link}" alt="Girl in a jacket" width="500" height="600">`;
// }

// const iframeElement = function (link){
//   return `<iframe src="${link}" title="W3Schools Free Online Web Tutorials"></iframe>`;
// }



async function fetchData(){

  let apiNasaKey = "DEMO_KEY";

  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiNasaKey}`);
  const data = await response.json();

  console.log(data);

  todayPostElement(data);

}

const todayPostElement = (myData) => { 
  const rootEl = document.getElementById("root");

  let h1 = document.createElement('h1');
	h1.textContent = "Astronomy Picture of the Day";
	rootEl.appendChild(h1);

}


const loadEvent = function() {

  // Write your JavaScript code after this line

  fetchData()

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
