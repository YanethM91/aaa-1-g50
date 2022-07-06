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

for (let index = 0; index < productsIUDigital.length; index++) {
  const id = productsIUDigital[index].idProd;
  const nombre = productsIUDigital[index].nomProd;
  const imagen = productsIUDigital[index].image;
  const desc = productsIUDigital[index].description;
  console.log(id + " " + nombre + " " + imagen + " " + desc);
}

const recorridoMap = productsIUDigital.map(function (index) {
  console.log(
    `Id: ${index.idProd} Nombre: ${index.nomProd} Imagen: ${index.image} Descrpción: ${index.description}`
  );
});

const recorridoMap2 = productsIUDigital.map(function (index) {
  return `<html lang="en">
    <head>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <div class=" col s12 m4 l4">
            <div class="card">
                <div class="card-image waves-block waves-effect waves-light">
                    <img class="activator" src=" ${index.image}"/>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        ${index.nomProd}
                        <i class="material-icons right"> more_vert</i>
                    </span>
                </div>
                <div class="card-reveal">
                    <span class="card-title activator grey-text text-darken-4">
                        ${index.idProd}
                        <i class="material-icons right">close</i>
                    </span>
                    <p> ${index.description}</p>
                </div>
            </div>
        </div>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </html>`;
});

document.getElementById("Productos").innerHTML=recorridoMap2