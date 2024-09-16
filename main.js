const apiUrl = "https://66e803d4b17821a9d9daf73c.mockapi.io/photo/photo";

function postImage() {
  let name = document.getElementById("inpName").value;
  let url = document.getElementById("inpUrl").value;

  if (!name || !url) {
    alert("Please enter both name and URL.");
    return;
}

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: url,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Posted:", data);
      getImages();
    })
    
}

function getImages() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let cont = document.getElementById("contiuner");
      cont.innerHTML = "";

      data.forEach((element) => {
        let itemDiv = document.createElement("div");

        let img = document.createElement("img");
        img.src = element.imageUrl;
        img.alt = element.name;

        let text = document.createElement("h1");
        text.textContent = element.name;

        itemDiv.appendChild(img);
        itemDiv.appendChild(text);
        cont.appendChild(itemDiv);
      });
    })
  
}

document.getElementById("btn").addEventListener("click", () => {
  postImage();
});

getImages();
