const gifs = [
    {
      url: "https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif",
      hoverText: "Garfield is dancing happily with cool moves.",
      shortText: "Garfield dancing"
    },
    {
      url: "https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif",
      hoverText: "Garfield eating lasagna like a boss.",
      shortText: "Eating lasagna"
    },
    {
      url: "https://media.giphy.com/media/l0Exk8EUzSLsrErEQ/giphy.gif",
      hoverText: "Garfield relaxing and enjoying his lazy day.",
      shortText: "Chilling on bed"
    }
  ];
  
  let current = 0;
  
  const gifEl = document.getElementById("garfieldGif");
  const hoverTextEl = document.getElementById("hoverDescription");
  const shortTextEl = document.getElementById("shortDescription");
  const nextBtn = document.getElementById("nextBtn");
  
  function loadGif(index) {
    const gif = gifs[index];
    gifEl.src = gif.url;
    hoverTextEl.textContent = gif.hoverText;
    shortTextEl.textContent = gif.shortText;
  }
  
  // Initial load
  loadGif(current);
  
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % gifs.length;
    loadGif(current);
  });
  