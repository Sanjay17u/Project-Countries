const countriesContainer = document.querySelector(".countries__container");
const filterByRegion = document.querySelector('.filter__by__region')
const searchInput = document.querySelector('.search__container input')
const themeChanger = document.querySelector('.theme__changer')

let allCountriesData

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
    allCountriesData = data
  });

filterByRegion.addEventListener('change',(e) => {
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
  });
})

function renderCountries(data) {
  countriesContainer.innerHTML = ''
    data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country__card");
      countryCard.href = `/country.html?name=${country.name.common}`

      const cardHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common} flag__image">
                <div class="card__text">
                    <h3 class="card__title">${country.name.common}</h3>
                    <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital}</p>
                </div>
`;
      countryCard.innerHTML = cardHTML;

      countriesContainer.append(countryCard);
    });
}

searchInput.addEventListener('input', (e) => {
  // console.log(e.target.value)
  const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))

  renderCountries(filteredCountries)
})

themeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})