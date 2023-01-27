let today = new Date();
today = today.getFullYear() + "-" + today.getMonth()+1 + "-" + today.getDate();

let currDate = new Date();
currDate = currDate.getFullYear() + "-" + currDate.getMonth()+1 + "-" + currDate.getDate();

async function fetchData(){

  let apiNasaKey = "DEMO_KEY";

  const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${currDate}&api_key=${apiNasaKey}`);
  const data = await response.json();

  console.log(data);

  todayPostElement(data);

}

const todayPostElement = (myData) => { 
  const rootEl = document.getElementById("root");
  rootEl.innerHTML = "";

  let h1 = document.createElement('h1');
	h1.textContent = "Astronomy Picture of the Day";
  h1.className = "el";
	rootEl.appendChild(h1);

  let p3 = document.createElement('p');
	p3.textContent = "Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.";
  p3.className = "el";
	rootEl.appendChild(p3);

  // let p = document.createElement('p');
	// p.textContent = myData.date;
  // p.className = "el";
	// rootEl.appendChild(p);

  let input = document.createElement('input');
  input.id = "dateInput";
  input.type = "date";
  input.value = currDate;
  input.max = today;
  rootEl.appendChild(input);

  let img = document.createElement('img');
  img.className = "el";
	img.src = myData.url;

  let iframe = document.createElement('iframe');
  iframe.className = "el";
	iframe.src = myData.hdurl;

  myData.media_type === "image" ? 
  rootEl.appendChild(img) : 
  rootEl.appendChild(iframe);

  let h2 = document.createElement('h2');
	h2.textContent = myData.title;
  h2.className = "el";
	rootEl.appendChild(h2);

  let p2 = document.createElement('p');
	p2.innerHTML = "<b>Explanation: </b>" + myData.explanation;
  p2.className = "el";
	rootEl.appendChild(p2);

  input.addEventListener("change", function(e){
    currDate = e.target.value;
    console.log(currDate);
    fetchData();
  })
}


const loadEvent = function() {

  // Write your JavaScript code after this line

  fetchData()

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
