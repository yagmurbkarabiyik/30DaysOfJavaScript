//Level 1 Exercises
//1
const countryApi = 'https://restcountries.com/v2/all'

// console.log(
//     fetch(countryApi)
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(country => {
//             console.log('Country', country.name)
//             console.log('Capital', country.capital)
//             console.log('Language', country.languages.map(lang => lang.name))
//             console.log('Population', country.population)
//             console.log('Area', country.area)
//         })
//     })
//     .catch(err => console.log(err))
// )

//Level 2 Exercises
//1
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
let catNames = []

// fetch(catsAPI)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(cat => {
//             catNames.push(cat.name)})
//             console.log(catNames);
//     })

//Level 3 Exercises
//1
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    let totalWeight = 0;
    let catCount = 0;

    data.forEach(cat => {
      if (cat.weight.metric) {
        const weightInMetric = cat.weight.metric.split(' - ');
        const minWeight = parseFloat(weightInMetric[0]);
        const maxWeight = parseFloat(weightInMetric[1] || weightInMetric[0]); // If only one weight is provided, consider it as the maximum weight

        const averageWeight = (minWeight + maxWeight) / 2;

        totalWeight += averageWeight;
        catCount++;
      }
    });

    const averageWeight = totalWeight / catCount;
    
    console.log('Average:', averageWeight.toFixed(2), 'grams');
  })
  .catch(error => {
    console.log('Error:', error);
  });

  //2
  fetch(countryApi)
    .then(res => res.json())
    .then(data => {
        data.sort((a, b) => b.population - a.population);
        const top10Countries = data.slice(0, 10);

        console.log('Top 10:');
        top10Countries.forEach((country, index) => {
          console.log(`${index + 1}. ${country.name} - Population: ${country.population}`);
        });
    })
      .catch(error => {
        console.log('Error fetching data:', error);
    });