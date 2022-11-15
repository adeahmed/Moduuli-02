

const people = [
    {
        name: 'ellie',
        votes: 1,
    },
    {
        name: 'frank',
        votes: 1,
    },
    {
        name: 'pamela',
        votes: 3,
    },
];

const votes = prompt('Who do you want to vote for?');
function voteForPerson(votes) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].name === votes) {
            people[i].votes++;
        }
    }
}
function    showResults() {
    for (let i = 0; i < people.length; i++) {
        console.log(`${people[i].name} has ${people[i].votes} votes`);
    }
}
voteForPerson(votes);
showResults();











