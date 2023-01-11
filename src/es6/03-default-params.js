function newUser(nameU, ageU, countryU) { // forma anterior a ES6
    let name = nameU || 'Ander';
    let age = ageU || 18;
    let country = countryU || 'Colombia'; 
    console.log({
        name,
        age,
        country
    });
}

newUser();
newUser('Ander9', 25, 'CO');

function newAdmin(nameA = 'AnderD', ageA = 19, countryA = 'CL') { // forma nueva, a partir de ES6
    console.log({
        nameA,
        ageA,
        countryA
    });
}

newAdmin();
newAdmin('Ander96', 26, 'GE');