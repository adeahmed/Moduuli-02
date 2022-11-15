const numberOfNames = +prompt("How many participants do you want?");

for(let i = 0; i < numberOfNames; i++) {
  const participantsName = prompt("Give a name");
  const li = document.createElement("li")
  li.textContent = participantsName;
  document.querySelector("ol").append(li);
}



