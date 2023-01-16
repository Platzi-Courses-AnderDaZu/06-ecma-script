// entries, values,keys

const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Perú'
  };
  
  let countries2 = Object.entries(countries);
  let countries3 = Object.values(countries);
  let countries4 = Object.keys(countries);
  
  console.log( countries2 );
  console.log( countries3 );
  console.log( countries4 );