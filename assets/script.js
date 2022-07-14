// CRIANDO CATEGORIAS SEPARADA PARA RECEBER OS CONTEÚDOS //
let listaFrutas = document.querySelector('.fruits')
let criarListaFrutas = document.createElement('ul')
listaFrutas.appendChild(criarListaFrutas)

let listaBebida = document.querySelector('.drinks')
let criarListaBebida = document.createElement('ul')
listaBebida.appendChild(criarListaBebida)

let listaHigiene = document.querySelector('.hygiene')
let criarListaHigiene = document.createElement('ul')
listaHigiene.appendChild(criarListaHigiene)

// FUNÇÃO QUE LISTA OS PRODUTOS DE ACORDO COM A CATEGORIA //
function listarProdutos(products) {
  for (let i = 0; i < products.length; i++) {
    let categoria = products[i].category
    if (categoria == 'Frutas') {
      let title = products[i].title
      let price = products[i].price
      let image = products[i].image
      let category = products[i].category
      criarCardFruta(title, price, image, category)
    } else if (categoria == 'Bebidas') {
      let title = products[i].title
      let price = products[i].price
      let image = products[i].image
      let category = products[i].category
      criarCardBebidas(title, price, image, category)
    } else if (categoria == 'Higiene') {
      let title = products[i].title
      let price = products[i].price
      let image = products[i].image
      let category = products[i].category
      criarCardHigiene(title, price, image, category)
    }
  }
}

// FUNÇÃO QUE INICIA O CÓDIGO //
listarProdutos(products)

// FUNÇÕES PARA CRIAR O CARD COM AS DEVIDAS INFORMAÇÕES //
function criarCardFruta(title, price, image, category) {
  let li = document.createElement('li')
  criarListaFrutas.appendChild(li)

  let img = document.createElement('img')
  let main = document.createElement('main')
  let h1 = document.createElement('h1')
  let h5 = document.createElement('h5')
  let strong = document.createElement('strong')

  li.append(img, main)
  main.append(h1, h5, strong)

  li.classList.add('product')
  main.classList.add('product-main')
  h1.classList.add('product-title')
  h5.classList.add('product-category')
  strong.classList.add('product-price')
  img.classList.add('product-img')

  img.src = `${image}`
  if (image == undefined) {
    img.src = `./img/products/no-img.svg`
  }
  h1.innerHTML = `${title}`
  strong.innerHTML = `${price}`
  h5.innerHTML = `${category}`
}

function criarCardBebidas(title, price, image, category) {
  let li = document.createElement('li')
  criarListaBebida.appendChild(li)

  let img = document.createElement('img')
  let main = document.createElement('main')
  let h1 = document.createElement('h1')
  let h5 = document.createElement('h5')
  let strong = document.createElement('strong')

  li.append(img, main)
  main.append(h1, h5, strong)

  li.classList.add('product')
  main.classList.add('product-main')
  h1.classList.add('product-title')
  h5.classList.add('product-category')
  strong.classList.add('product-price')
  img.classList.add('product-img')

  img.src = `${image}`
  if (image == undefined) {
    img.src = `./img/products/no-img.svg`
  }
  h1.innerHTML = `${title}`
  strong.innerHTML = `${price}`
  h5.innerHTML = `${category}`
}

function criarCardHigiene(title, price, image, category) {
  li = document.createElement('li')
  criarListaHigiene.appendChild(li)

  let img = document.createElement('img')
  let main = document.createElement('main')
  let h1 = document.createElement('h1')
  let h5 = document.createElement('h5')
  let strong = document.createElement('strong')

  li.append(img, main)
  main.append(h1, h5, strong)

  li.classList.add('product')
  main.classList.add('product-main')
  h1.classList.add('product-title')
  h5.classList.add('product-category')
  strong.classList.add('product-price')
  img.classList.add('product-img')

  img.src = `${image}`
  if (image == undefined) {
    img.src = `./img/products/no-img.svg`
  }
  h1.innerHTML = `${title}`
  strong.innerHTML = `${price}`
  h5.innerHTML = `${category}`
}
