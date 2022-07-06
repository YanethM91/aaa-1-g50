let txt_idProd = document.getElementById("idProd");
let txt_nomProd = document.getElementById("nameProd");
let txt_image = document.getElementById("productImage");
let txt_description = document.getElementById("description");

let btnAddProduct = document.getElementById("btnAddProduct");

const productsIUDigital = [
  {
    idProd: 1,
    nomProd: "Producto 1",
    image: "./img/img1.jpg",
    description: "Descripcion del producto 1",
  },
  {
    idProd: 2,
    nomProd: "Producto 2",
    image: "./img/img2.jpg",
    description: "Descripcion del producto 2",
  },
  {
    idProd: 3,
    nomProd: "Producto 3",
    image: "./img/img3.jpg",
    description: "Descripcion del producto 3",
  },
  {
    idProd: 4,
    nomProd: "Producto 4",
    image: "./img/img4.jpg",
    description: "Descripcion del producto 4",
  },
  {
    idProd: 5,
    nomProd: "Producto 5",
    image: "./img/img5.jpg",
    description: "Descripcion del producto 5",
  },
  {
    idProd: 6,
    nomProd: "Producto 6",
    image: "./img/img6.jpg",
    description: "Descripcion del producto 6",
  },
];

/* Función anónima */
/* const AddProducto = function () {}; */
/* Función flecha */
const AddProducto = () => {
  /* La función push() permite añadir elementos al final del array */
  productsIUDigital.push({
    idProd: txt_idProd.value,
    nomProd: txt_nomProd.value,
    image: txt_image.value,
    description: txt_description.value,
  });

  const contenido = document.querySelector(".listaProductos");
  for (let index = 0; index < productsIUDigital.length; index++) {
    const fetch = document.querySelector(".listaProductos").innerHTML;
    contenido.innerHTML =
      `
    <div id= "card${index}" class="boxes">
    <div class="box-content">
        <h4>${productsIUDigital[index].idProd}</h4>
        <h5>${productsIUDigital[index].nomProd}</h5>
        <p>${productsIUDigital[index].description}</p>
        <p>${productsIUDigital[index].image}</p>
    </div>
  </div>
  ` + fetch;
    const imagenProducto = document.getElementById(`card${index}`);
    imagenProducto.style.backgroundImage = `url(${productsIUDigital[index].image})`;
  }
  console.log(productsIUDigital);
};

btnAddProduct.addEventListener("click", AddProducto);
