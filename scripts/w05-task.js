/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((item) => {
    let article = document.createElement("article");

    let temName = document.createElement("h3");
    temName.textContent = item.templeName;

    let temImage = document.createElement("img");
    temImage.setAttribute("src", item.imageUrl);
    temImage.setAttribute("alt", item.location);
    temImage.setAttribute("style", "max-width:400px");

    article.appendChild(temName);
    article.appendChild(temImage);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  if (response.ok) {
    let data = await response.json();
    templeList.push(data);
    displayTemples(data);
  }
}

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};
/* sortBy Function */
const sortBy = (temples) => {
  reset();
  let filtered = document.querySelector("#sortBy");
  switch (filtered.value) {
    case "utah":
        const fetch1 = async () => {
            const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
            if (response.ok) {
                let data = await response.json();
                data.forEach(e => {
                    if (e.location.includes('Utah')) {
                        let article = document.createElement("article");

                        let temName = document.createElement("h3");
                        temName.textContent = e.templeName;

                        let temImage = document.createElement("img");
                        temImage.setAttribute("src", e.imageUrl);
                        temImage.setAttribute("alt", e.location);
                        temImage.setAttribute("style", "max-width:400px");

                        article.appendChild(temName);
                        article.appendChild(temImage);
                        templesElement.appendChild(article);
                    }
                });
            }
        }
        fetch1();
      break;
    case "notutah":
        const fetch2 = async () => {
            const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
            if (response.ok) {
                let data = await response.json();
                data.forEach(e => {
                    if (!e.location.includes('Utah')) {
                        let article = document.createElement("article");

                        let temName = document.createElement("h3");
                        temName.textContent = e.templeName;

                        let temImage = document.createElement("img");
                        temImage.setAttribute("src", e.imageUrl);
                        temImage.setAttribute("alt", e.location);
                        temImage.setAttribute("style", "max-width:400px");

                        article.appendChild(temName);
                        article.appendChild(temImage);
                        templesElement.appendChild(article);
                    }
                });
            }
        }
        fetch2();
      break;
    case "older":
        const fetch3 = async () => {
            const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
            if (response.ok) {
                let data = await response.json();
                data.forEach(e => {
                    if ("1950, 0, 1" > e.dedicated) {
                        let article = document.createElement("article");

                        let temName = document.createElement("h3");
                        temName.textContent = e.templeName;

                        let temImage = document.createElement("img");
                        temImage.setAttribute("src", e.imageUrl);
                        temImage.setAttribute("alt", e.location);
                        temImage.setAttribute("style", "max-width:400px");

                        article.appendChild(temName);
                        article.appendChild(temImage);
                        templesElement.appendChild(article);
                    }
                });
            }
        }
        fetch3();
      break;
    case "all":
      temples.filter((e) => {
        displayTemples(e);
      });
      break;
  }
};
// /* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});
getTemples();
