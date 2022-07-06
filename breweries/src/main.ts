import './index.css'
import './reset.css'

let state = {
  UsaState: '',
  breweries: []
}

// <h1>List of Breweries</h1>
// <header class="search-bar">
//   <form id="search-breweries-form" autocomplete="off">
//     <label for="search-breweries"><h2>Search breweries:</h2></label>
//     <input id="search-breweries" name="search-breweries" type="text" />
//   </form>
// </header>
function renderHeaderPart() {
  let HeadSection = document.createElement('section')

  let H1El = document.createElement('h1')
  H1El.textContent = 'List of Breweries'

  let Header = document.createElement('header')
  Header.className = 'search-bar'

  let FormEl = document.createElement('form')
  FormEl.className = 'search-breweries-form'

  let LabelEl = document.createElement('label')
  LabelEl.className = 'search-breweries'

  let H2El = document.createElement('H2')
  H2El.textContent = 'Search breweries:'

  let InputEl = document.createElement('input')
  InputEl.className = 'search-breweries'
  InputEl.type = 'text'

  LabelEl.append(H2El)
  FormEl.append(LabelEl, InputEl)

  HeadSection.append(H1El, Header, FormEl)
}



// <article>
//   <ul class="breweries-list">
//     <li>
//       <h2>Snow Belt Brew</h2>
//       <div class="type">micro</div>
//       <section class="address">
//         <h3>Address:</h3>
//         <p>9511 Kile Rd</p>
//         <p><strong>Chardon, 44024</strong></p>
//       </section>
//       <section class="phone">
//         <h3>Phone:</h3>
//         <p>N/A</p>
//       </section>
//       <section class="link">
//         <a href="null" target="_blank">Visit Website</a>
//       </section>
//     </li>
//     // More list elements
//   </ul>
// </article>

function render() {
  let MainEl = document.querySelector('main')
  if (MainEl === null) return
  MainEl.textContent = ''

  renderHeaderPart()
}

render()