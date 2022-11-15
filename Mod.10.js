// Write a voting program as described below for small-scale meeting use


const people = [
    {
        name: 'ellie',
        votes: 0,
    },
    {
        name: 'frank',
        votes: 0,
    },
    {
        name: 'pamela',
        votes: 0,
    },
];

function vote(people, name) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].name === name) {
            people[i].votes++;
        }
    }
}

function getWinner(people) {
    let winner = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].votes > winner.votes) {
            winner = people[i];
        }
    }
    return winner.name;
}

getWinner(people);
vote(people, 'ellie');
getWinner(people);
vote(people, 'frank');











