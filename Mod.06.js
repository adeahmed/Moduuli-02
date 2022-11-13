// make class object 

const people = [
    {name: 'Kassu',},
    {age: 44,},
    {position : 'Developer'},


    { name: 'Ade', year: 1988 },
    { age: 16, },
    { position: 'designer'},


    { name: 'Wes', year: 1988 },
    { age: 33,},
    { position: 'boss'},


    { name: 'suzy', year: 1988 },
    { age: 22,},
    { position: 'sales'},

    ];

    const ages = people.map((person) => {
        return person.age;
    });
    console.log(ages);  
