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

    const img = document.createElement('img');
    wrapper.append(img);
    img.setAttribute("src", flag);

    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("info-wrapper");
    wrapper.append(infoWrapper);

    const nameHeading = document.createElement('h2');
    infoWrapper.append(nameHeading);
    nameHeading.innerText = name;
    
    let item = document.createElement('p');
    infoWrapper.append(item);
    item.innerHTML = `<b>Population: </b> ${population}`;

    item = document.createElement('p');
    infoWrapper.append(item);
    item.innerHTML = `<b>Region: </b> ${region}`;

    item = document.createElement('p');
    infoWrapper.append(item);
    item.innerHTML = `<b>Capital: </b> ${capital}`; 
    
}