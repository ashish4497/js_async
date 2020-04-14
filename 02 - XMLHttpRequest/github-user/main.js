// Your code goes here

let input = document.querySelector(".userName");
let form = document.querySelector("form");
let profile = document.querySelector(".user_profile");
let image = document.querySelector(".image_section");
let info = document.querySelector(".info_section");
//function to get the data through API
function searchUser(event) {
  event.preventDefault();
  console.log(event);
  let userName = input.value;
  // console.log(userName, "show lies");
  var nReq = new XMLHttpRequest();
  nReq.open("GET", `https://api.github.com/users/${userName}`);
  nReq.onload = function () {
    if (this.status == 404) {
      console.log("user not found");
      //call the function to show error user not found
      notFound();
    } else {
      var data = JSON.parse(nReq.response);
      // console.log(data, "data");
      createUi(data);
    }
  };
  nReq.send();
}
//Function to create the ui
function createUi(data) {
  input.value = "";
  let img = document.createElement("img");
  img.setAttribute("src", data.avatar_url);
  image.append(img);
  let ul = document.createElement("ul");
  info.append(ul);
  let name = document.createElement("li");
  name.textContent = `Name : ${data.name}`;
  let id = document.createElement("li");
  id.textContent = `id:${data.id}`;
  let user = document.createElement("li");
  user.textContent = `userName : ${data.login}`;
  let bio = document.createElement("li");
  bio.textContent = `Bio:${data.bio}`;
  let location = document.createElement("li");
  location.textContent = `Location:${data.location}`;
  ul.append(name, id, user, bio, location);
}

//function to show the user not found
function notFound() {
  input.value = "";
  let msg = document.createElement("p");
  msg.innerText = "User was not found! Please try again !!!!";
  profile.append(msg);
}

form.addEventListener("submit", searchUser);
