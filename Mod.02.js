
let numberOfParticipants = prompt("Enter number of participants: ");

for (let i = 0; i < numberOfParticipants; i++) {
    participants = prompt("Enter name of participant: ");
    let ele = document.createElement("ul")
        ele.textContent = participants;
        document.querySelector("#velo").append(ele)

}




