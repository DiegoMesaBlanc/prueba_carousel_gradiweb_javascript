import { euro } from '../validations/currency.js'
import { averageRate } from '../validations/rateAverage.js'

export const renderCard = (node) => {
  const average = rateStarts(node.tags)

  return `
    <div class="slick">
      <div>
        <a>
          <button>ADD TO CART</button>
          <picture>
            <img src="${node.featuredImage.url}"
                  alt="Image">
          </picture>
        </a>
      </div>

      <div class="footer-card">
        <h4>${node.title}</h4>

        <div class="separate">
          <div class="point">
            <div class="rate">
              <input type="radio" id="star5${node.id}" name="${node.id}" value="5"  ${average > 400 && average <= 500 ? "checked" : ""}/>
              <label for="star5${node.id}" title="text">1 stars</label>
              <input type="radio" id="star4${node.id}" name="${node.id}" value="4" ${average > 300 && average <= 400 ? "checked" : ""}/>
              <label for="star4${node.id}" title="text">2 stars</label>
              <input type="radio" id="star3${node.id}" name="${node.id}" value="3" ${average > 200 && average <= 300 ? "checked" : ""}/>
              <label for="star3${node.id}" title="text">3 stars</label>
              <input type="radio" id="star2${node.id}" name="${node.id}" value="2" ${average > 100 && average <= 200 ? "checked" : ""}/>
              <label for="star2${node.id}" title="text">4 stars</label>
              <input type="radio" id="star1${node.id}" name="${node.id}" value="1" ${average > 0 && average <= 100 ? "checked" : ""}/>
              <label for="star1${node.id}" title="text">5 stars</label>
            </div>

            <small>(${average})</small>
          </div>

          <div>
            <span class="previous-price">${currency(node.prices.max.amount)}</span> <strong>${currency(node.prices.min.amount)}</strong>
          </div>
        </div>
      </div>
    </div>
  `
}

function currency(money) {
  return euro.format(money)
}

function rateStarts(tags) {
  const avereage = averageRate(tags)

  return avereage
}