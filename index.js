var list = document.getElementById("List");

async function getData() {
  var apiUrl = "https://potterapi-fedeperin.vercel.app/en/books";
  var response = await fetch(apiUrl);
  var result = await response.json();

  for (let i = 0; i < result.length; i++) {
    var title = result[i].title;
    var desc = result[i].description;
    var releaseDate = result[i].releaseDate;
    var imageURL = result[i].cover;

    console.log(title, desc, releaseDate, imageURL);

    // Create the HTML structure
    var mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";

    var leftDiv = document.createElement("div");
    leftDiv.id = "left";

    var image = document.createElement("img");
    image.src = imageURL;
    image.height = "200";

    leftDiv.appendChild(image);

    var rightDiv = document.createElement("div");
    rightDiv.id = "right";

    var h2 = document.createElement("h2");
    h2.textContent = title;

    var pDesc = document.createElement("p");
    pDesc.textContent = desc;

    var pDate = document.createElement("p");
    pDate.textContent = "Release Date: " + releaseDate;

    rightDiv.appendChild(h2);
    rightDiv.appendChild(pDesc);
    rightDiv.appendChild(pDate);

    mainDiv.appendChild(leftDiv);
    mainDiv.appendChild(rightDiv);

    list.appendChild(mainDiv);
  }
}

getData();
