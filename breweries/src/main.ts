import './index.css'
import './reset.css'

type Brewery = {
  id: string;
  name: string;
  brewery_type: string;
  street: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state: string;
  county_province: string | null;
  postal_code: string;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  created_at: string;
  updated_at: string;
}

type state = {
  UsaState: string
  breweries: Brewery[]
}

let state = {
  UsaState: '',
  breweries: []
}

function GetBreweries() {
  fetch(`https://api.openbrewerydb.org/breweries?by_state=${state.UsaState}$per_page=10`)
    .then(resp => resp.json())
    .then(breweries => {
      state.breweries = breweries
      render()
    })
}

function renderHeaderPart() {
  let MainEl = document.querySelector('main')
  if (MainEl === null) return

  let H1El = document.createElement('h1')
  H1El.textContent = 'List of Breweries'

  let Header = document.createElement('header')
  Header.className = 'search-bar'

  let FormEl = document.createElement('form')
  FormEl.id = 'search-breweries-form'
  FormEl.autocomplete = 'off'

  let LabelEl = document.createElement('label')
  LabelEl.className = 'search-breweries'

  let H2El = document.createElement('H2')
  H2El.textContent = 'Search breweries:'

  let InputEl = document.createElement('input')
  InputEl.className = 'search-breweries'
  InputEl.id = 'search-breweries'
  InputEl.type = 'text'

  LabelEl.append(H2El)
  FormEl.append(LabelEl, InputEl)
  Header.append(FormEl)
  MainEl.append(H1El, Header)
}

function renderBreweriesList() {
  let MainEl = document.querySelector('main')
  if (MainEl === null) return

  let article = document.createElement('article')

  let UlEl = document.createElement('ul')
  UlEl.className = 'breweries-list'

  for (let brewery of state.breweries) {
    renderaSingleBrewery(brewery, UlEl)
  }
  article.append(UlEl)
  MainEl.append(article)
}

function renderaSingleBrewery(brewery: Brewery, UlEl: HTMLUListElement) {

  let LiEl = document.createElement('li')

  let H2El = document.createElement('h2')
  H2El.textContent = brewery.name

  let DivEl = document.createElement('div')
  DivEl.className = 'type'
  DivEl.textContent = brewery.brewery_type

  let SectionEl1 = document.createElement('div')
  SectionEl1.className = 'address'

  let H3El = document.createElement('h3')
  H3El.textContent = 'Address:'

  let PEl1 = document.createElement('p')
  PEl1.textContent = brewery.street

  let PEl2 = document.createElement('p')

  let Strongl1 = document.createElement('s')
  Strongl1.textContent = `${brewery.city},${brewery.postal_code}`

  let SectionEl2 = document.createElement('div')
  SectionEl2.className = 'phone'

  let H3El2 = document.createElement('h3')
  H3El2.textContent = 'Phone:'

  let PEl3 = document.createElement('p')
  PEl3.textContent = brewery.phone

  let SectionEl3 = document.createElement('div')
  SectionEl3.className = 'link'

  let LinkEl = document.createElement('a')
  if (brewery.website_url) {
    LinkEl.href = brewery.website_url ? brewery.website_url : '#'
    LinkEl.target = '_blank'
    LinkEl.textContent = 'Visit Website'
  }
  else {
    LinkEl.textContent = 'No Website'
  }

  PEl2.append(Strongl1)
  SectionEl1.append(H3El, PEl1, PEl2)
  SectionEl2.append(H3El2, PEl3)
  SectionEl3.append(LinkEl)
  LiEl.append(SectionEl1, SectionEl2, SectionEl3, DivEl, H2El)
  UlEl.append(LiEl)
}


function render() {
  let MainEl = document.querySelector('main')
  if (MainEl === null) return
  MainEl.textContent = ''

  renderHeaderPart()
  renderBreweriesList()
}

function FormofSelectedState() {
  let FormEl = document.querySelector<HTMLFormElement>('#select-state-form')
  FormEl?.addEventListener('submit', function (event) {
    event.preventDefault()
    let UsaState = FormEl['select-state'].value
    state.UsaState = UsaState
    GetBreweries()
  })
}

window.state = state

FormofSelectedState()
render()

