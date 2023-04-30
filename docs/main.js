const buttonToggle = document.getElementById("menuToggle")
const buttonClose = document.getElementById("menuClose")
const menuNav = document.getElementById("menuNav")
const cardContainer = document.getElementById("cards-container")

buttonToggle.addEventListener('click',()=>
{menuNav.classList.add('visible')})
buttonClose.addEventListener('click',()=>
{menuNav.classList.remove('visible')})

async function renderCards(){
  let cards = await getCardData();
  
  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card__header");
        const layer = document.createElement("img");
        layer.classList.add("layer");
        layer.setAttribute("src", card.image);
        cardHeader.append(layer);
      cardDiv.append(cardHeader);

      const cardContent = document.createElement("div");
      cardContent.classList.add("card__text");
        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("card__title");
        cardTitle.textContent = card.title;
        cardContent.append(cardTitle);
      cardDiv.append(cardContent);

        const cardLinks = document.createElement("div");
        cardLinks.classList.add("card__links");
          const liveDemo =document.createElement("div");
          liveDemo.classList.add("button", "button--link");
            const demoLink = document.createElement("a");
            demoLink.classList.add("fa-solid", "fa-arrow-up-right-from-square");
            demoLink.setAttribute("target", "_blank");
            demoLink.setAttribute("href", `${card.liveDemo}`);
            liveDemo.appendChild(demoLink);
            
          cardLinks.append(liveDemo);
          const github = document.createElement("div"); 
          github.classList.add("button", "button--link");
          const githubLink = document.createElement("a");
            githubLink.classList.add("fa-brands", "fa-github");
            githubLink.setAttribute("target", "_blank");
            githubLink.setAttribute("href", `${card.repository}`);
            github.appendChild(githubLink);
          cardLinks.append(github);
        cardContent.append(cardLinks);        

    cardContainer.append(cardDiv);
  });

}

async function getCardData(){
  const cardResponse = await fetch("/docs/json/projects.json");
  const cardJson = await cardResponse.json();
  const cardData = cardJson; 
  return cardData;
}

addEventListener("load", () => {
  renderCards();
})