// const createList = (arr=["Cricket", "Movies", "Badminton", "Travel"]) => {
//     const ul = document.createElement('ul');
//     for(let text of arr) {
//         let li = document.createElement('li');
//         li.innerText = text;
//         ul.append(li);
//     }
//     document.querySelector('.container').append(ul);
// }

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => createCountryFlagsUI(data));

const createCountryFlagsUI = (countriesData) => {
    for(let country of countriesData) {
        const {name: {common: name}, population, region, capital, flags: {png: flag}} = country;
        createCountryItem(name, population, region, capital && capital[0], flag);
    }
}

const createCountryItem = (name, population, region, capital, flag) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.querySelector('.container').append(wrapper);

    const countryHTML = `
        <img src="${flag}"/>
        <div class="info-wrapper">
            <h2>${name}</h2>
            <p><b>Population: </b> ${population}</p>
            <p><b>Region: </b> ${region}</p>
            <p><b>Capital: </b> ${capital}</p>
        </div>
    `
    wrapper.innerHTML = countryHTML;
}
