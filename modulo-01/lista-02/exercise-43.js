const obj1 = {
    name: 'Zagreus',
    affiliation: 'House of Hades'
}

const obj2 = {
    name: 'Milinoë',
    title: 'Princess of underworld'
}

function main(){
    const mergeObjects = {...obj1, ...obj2};
    console.log(mergeObjects);
}


main();