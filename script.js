const USD = 5.68;
const EUR = 6.10;
const GBP = 7.10;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById('currency');
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = evt => {
  evt.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
}

function convertCurrency(amount, price, symbol) {
  try {
    description.innerText = `${symbol} ${amount} = ${formatCurrencyBRL(price)}`;

    footer.classList.add("show-result");
  } catch (err) {
    footer.classList.remove("show-result");
    console.error(err);
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
