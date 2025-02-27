const countryName = new URLSearchParams(location.search).get('name')
const flag__image = document.querySelector('.country__details img')
const countryNameH1 = document.querySelector('.country__details h1')
const nativeName = document.querySelector('.native__name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub__region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top__level__domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    console.log(Object.values(country.name.nativeName)[0].common)
    flag__image.src = country.flags.svg
    countryNameH1.innerText = country.name.common
    population.innerText = country.population.toLocaleString('en-IN')
    region.innerText = country.region
    subRegion.innerText = country.subregion
    capital.innerText = country.capital?.[0]
    topLevelDomain.innerText = country.tld.join(', ')
    if(country.currencies) {
      currencies.innerText = Object.values(country.currencies).map((currency) => currency.name).join(', ')
    }
    languages.innerText = Object.values(country.languages).join(", ")

    if(country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common
    } else {
      nativeName.innerText = country.name.common
    }
  })
