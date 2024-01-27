import { renderCard } from './render/viewCards.js';
import { getStore } from './services/serviceCards.js';
import { emailValidator } from './validations/validateEmail.js';


let store = []

const form = document.getElementById("form");
form.addEventListener("submit", sendEmail);

window.onload = () => { }

const data = async () => {
  try {
    store = await getStore();
    renderStore(store.products.nodes)
  } catch (error) {
    console.error(error);
  } finally {
    document.getElementById("loading").style.display = "none";
  }
}

data()

function renderStore(nodes) {
  const dynamic = document.querySelector('.image-list');

  while (nodes.length > 0) {
    const node = nodes.shift();

    const fetch = document.querySelector('.image-list').innerHTML;

    dynamic.innerHTML = renderCard(node) + fetch
  }
}

function sendEmail() {
  event.preventDefault();
  const data = Object.fromEntries(new window.FormData(event.target));

  if (emailValidator(data.email)) {
    alert("Valid email address!");
  } else {
    alert("Invalid email address!");
    document.form1.email.focus();
  }
}