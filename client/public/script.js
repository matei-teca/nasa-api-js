let today = new Date();
today = today.getFullYear() + "-" + today.getMonth()+1 + "-" + today.getDate();

let currDate = new Date();
currDate = currDate.getFullYear() + "-" + currDate.getMonth()+1 + "-" + currDate.getDate();

let notFirstTime = false;

async function fetchData(){

  let apiNasaKey = "HFxD3gjtR7pyRegNpLer94idRsEqRxtsVtJPYCI1";

  const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${currDate}&api_key=${apiNasaKey}`);
  const data = await response.json();

  console.log(data);

  todayPostElement(data);

}

const todayPostElement = (myData) => { 
  let imgSize = true;

  const rootEl = document.getElementById("root");
  rootEl.innerHTML = "";

  let sectionA = document.createElement('section');
  sectionA.id = "sectionA";
  rootEl.appendChild(sectionA);

  let h1 = document.createElement('h1');
	h1.textContent = "Astronomy Picture of the Day";
  h1.className = "el";
	sectionA.appendChild(h1);

  let p3 = document.createElement('p');
	p3.textContent = "Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.";
  p3.className = "el";
	sectionA.appendChild(p3);

  // let p = document.createElement('p');
	// p.textContent = myData.date;
  // p.className = "el";
	// rootEl.appendChild(p);
  let divWrapInput = document.createElement('div');
  sectionA.appendChild(divWrapInput);

  let input = document.createElement('input');
  input.id = "dateInput";
  input.type = "date";
  input.value = currDate;
  input.max = today;
  divWrapInput.appendChild(input);

  let img = document.createElement('img');
  img.className = "el";
  img.id = "mainImg";
  img.className = "mainImgLarge";
  // img.style.height = "100vh";
  // img.style.maxWidth = "80vw";
	img.src = myData.url;

  let iframe = document.createElement('iframe');
  iframe.className = "el";
  iframe.height = "600vh"
  iframe.width = "1000vw"
	iframe.src = myData.url;

  myData.media_type === "image" ? 
  sectionA.appendChild(img) : 
  sectionA.appendChild(iframe);

  let sectionB = document.createElement('section');
  sectionB.id = "sectionBottom";
  rootEl.appendChild(sectionB);

  let h2 = document.createElement('h2');
	h2.textContent = myData.title;
  h2.className = "el";
	sectionB.appendChild(h2);

  let p2 = document.createElement('p');
	p2.innerHTML = "<b>Explanation: </b>" + myData.explanation;
  p2.className = "el";
	sectionB.appendChild(p2);

  // let divWow = document.createElement('div');
	// divWow.innerHTML = "Wanna see?";
  // divWow.id = "wow";
	// rootEl.appendChild(divWow);

  input.addEventListener("change", function(e){
    currDate = e.target.value;
    console.log(currDate);
    fetchData();

    imgEl.className = "mainImgLarge";

    setTimeout(function(){
      window.scrollTo({
        top: 180,
        left: 0,
        behavior: 'smooth'
      });
    }, notFirstTime ? 600 : 0)

    setTimeout(function(){
      window.scrollTo({
        top: 3000,
        left: 0,
        behavior: 'smooth'
      });

      setTimeout(function(){
        const imgEl = document.getElementById("mainImg");
        imgEl.className = "mainImgSmall";
        notFirstTime = true;
        imgSize = true;
        console.log(notFirstTime);
        
      }, 100)
    }, 3000)
  })

  const imgEl = document.getElementById("mainImg");

  imgEl.addEventListener("click", function(){
    imgSize = !imgSize;

    imgSize ? 
    imgEl.className = "mainImgLarge" :
    imgEl.className = "mainImgSmall"; notFirstTime = true

    console.log(notFirstTime);
  })

}


const loadEvent = function() {

  // Write your JavaScript code after this line

  fetchData()

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
