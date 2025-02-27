const countriesContainer = document.querySelector(".countries__container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
        console.log(country)
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
  });

