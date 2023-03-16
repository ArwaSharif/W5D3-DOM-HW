let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1

  document.querySelector("#main-title").textContent = "Dom Toretto's Blog";

  // Part 2

  document.querySelector("body").style.backgroundColor = "#89648e";

  // Part 3

  // console.log(document.querySelector('#favorite-things').lastElementChild)
  document.querySelector("#favorite-things").lastElementChild.remove();

  // Part 4

  let specialTitle = document.querySelectorAll(".special-title");
  for (let title of specialTitle) {
    // title.style.color = 'red'
    title.style.fontSize = "2rem";
  }

  // Part 5

  let races = document.querySelector("#past-races");
  // console.log(races)
  let raceChildren = races.childNodes;
  // console.log(raceChildren)
  for (let child of raceChildren) {
    if (child.textContent === "Chicago") {
      // console.log(child)
      child.remove();
    }
  }

  // Part 6

  let newRace = document.createElement("li");
  newRace.textContent = "Monaco";
  // console.log(newRace)
  races.appendChild(newRace);

  // Part 7

  // newRace.classList.add('blog-post')
  let newPost = document.createElement("div");
  let mainEl = document.querySelector(".main");
  newPost.setAttribute("class", "blog-post purple");
  let hEl = document.createElement('h1')
  let pEl = document.createElement('p')
  hEl.textContent = `${newRace.textContent}`
  pEl.textContent = "C'EST LA VIE"
  // newPost.innerHTML = `<h1> ${newRace.textContent} </h1> <p> C'EST LA VIE </p>`;
  newPost.appendChild(hEl)
  newPost.appendChild(pEl)
  mainEl.appendChild(newPost);
  // console.log(newPost);

  // Part 8

  let quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener('click', randomQuote)
  

  // Part 9

  let blogPost = document.querySelectorAll('.blog-post')

  console.log(blogPost)
  for (let post of blogPost){
    console.log(post)
    
    post.addEventListener('mouseout', e => {
      post.classList.toggle('red')
    })

    post.addEventListener('mouseenter', e => {
      post.classList.toggle('red')
    })
  }

});
