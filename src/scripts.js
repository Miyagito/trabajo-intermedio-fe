const data = {
  categorias: [
    {
      nombre: "Electrónica",
      productos: [
        {
          imagen: "https://m.media-amazon.com/images/I/71eOlLE22YL.jpg",
          codigo: "ELEC12345",
          descripcion: "Teléfono inteligente de última generación",
          precio: 799.99,
          stock: 25,
        },
        {
          imagen:
            "https://fotosuraj.com/23173-large_default/lenovo-tab-m10-tablet-de-103-fhd-plus-4-gb-de-ram-128-gb.jpg",
          codigo: "ELEC23456",
          descripcion: "Tableta de alta resolución con 128GB de almacenamiento",
          precio: 599.99,
          stock: 30,
        },
        {
          imagen: "https://m.media-amazon.com/images/I/91woduXUkRL.jpg",
          codigo: "ELEC34567",
          descripcion: "Portátil ultraligero y potente para gaming",
          precio: 1200.99,
          stock: 15,
        },
      ],
    },
    {
      nombre: "Moda",
      productos: [
        {
          imagen:
            "https://totomarques.com/cdn/shop/products/unisex-organic-cotton-t-shirt-white-front-6290c78fc5bd2.png?v=1657566014&width=1946",
          codigo: "MOD12345",
          descripcion: "Camiseta de algodón orgánico unisex",
          precio: 29.99,
          stock: 50,
        },
        {
          imagen:
            "https://zapatoferoz.es/cdn/shop/files/zapatillas-minimalistas-forma-pie-puntera-goma-suela-todoterreno-hombre-mujer-color-verde-onil-kaki-02.jpg?v=1704277902&width=1946",
          codigo: "MOD23456",
          descripcion: "Zapatillas deportivas para todo terreno",
          precio: 89.99,
          stock: 35,
        },
        {
          imagen:
            "https://img.ltwebstatic.com/images3_pi/2023/12/27/56/17036833461408271721dc297e18165707bc30284f_thumbnail_720x.jpg",
          codigo: "MOD34567",
          descripcion: "Jeans ajustados de moda",
          precio: 49.99,
          stock: 40,
        },
      ],
    },
    {
      nombre: "Hogar",
      productos: [
        {
          imagen:
            "https://d2b9x57rs4p1zl.cloudfront.net/pub/media/catalog/product/cache/cce1c6b2a14176cd43300fe51ff0106a/a/s/asp-ss-16085-2.jpeg",
          codigo: "HOG12345",
          descripcion: "Robot aspirador inteligente",
          precio: 299.99,
          stock: 20,
        },
        {
          imagen: "https://m.media-amazon.com/images/I/71saFDUtmsL.jpg",
          codigo: "HOG23456",
          descripcion: "Set de utensilios de cocina premium",
          precio: 99.99,
          stock: 40,
        },
        {
          imagen:
            "https://res.cloudinary.com/chal-tec/image/upload/w_450,q_auto,f_auto,dpr_3.0/bbg/10033215/Gallery/10033215_yy_0001_titel___.jpg",
          codigo: "HOG34567",
          descripcion: "Sistema de sonido envolvente 5.1",
          precio: 250.99,
          stock: 18,
        },
      ],
    },
    {
      nombre: "Libros",
      productos: [
        {
          imagen:
            "https://i.blogs.es/5e1e56/portada_nieve-en-marte_pablo-tebar-goyanes_201709121110/450_1000.jpg",
          codigo: "LIB12345",
          descripcion: "Novela de ciencia ficción galardonada",
          precio: 19.99,
          stock: 60,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/81qEEq8YwTL._AC_UF1000,1000_QL80_.jpg",
          codigo: "LIB23456",
          descripcion: "Libro de cocina: recetas del mundo",
          precio: 24.99,
          stock: 40,
        },
        {
          imagen:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680553518i/112582549.jpg",
          codigo: "LIB34567",
          descripcion: "Manual de desarrollo personal y éxito",
          precio: 15.99,
          stock: 55,
        },
      ],
    },
  ],
};

const cesta = [];

function crearElementosCategoria(data) {
  const categoriasContainer = document.getElementById("categorias");
  categoriasContainer.innerHTML = "";

  data.categorias.forEach((categoria, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.id = `heading${index}`;

    const h2 = document.createElement("h2");
    h2.className = "mb-0";

    const button = document.createElement("button");
    button.className = "btn btn-link btn-block text-left";
    button.type = "button";
    button.dataset.toggle = "collapse";
    button.dataset.target = `#collapse${index}`;
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", `collapse${index}`);
    button.textContent = categoria.nombre;

    h2.appendChild(button);
    cardHeader.appendChild(h2);
    card.appendChild(cardHeader);

    const collapseDiv = document.createElement("div");
    collapseDiv.id = `collapse${index}`;
    collapseDiv.className = "collapse";
    collapseDiv.setAttribute("aria-labelledby", `heading${index}`);
    collapseDiv.dataset.parent = "#categorias";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const productList = document.createElement("div");
    productList.className = "list-group";

    categoria.productos.forEach((producto, indexProducto) => {
      const productItem = document.createElement("div");
      productItem.className =
        "list-group-item d-flex flex-row align-items-center";

      const productImgDiv = document.createElement("div");
      productImgDiv.className = "product-image-container mr-3";

      const productImg = document.createElement("img");
      productImg.src = producto.imagen;
      productImg.alt = producto.descripcion;
      productImg.className = "img-fluid";

      const agregarBtn = document.createElement("button");
      agregarBtn.className = "btn btn-primary";
      agregarBtn.textContent = "Agregar a la cesta";
      agregarBtn.onclick = () => agregarACesta(index, indexProducto);
      productImgDiv.appendChild(productImg);

      const productDetailsDiv = document.createElement("div");
      productDetailsDiv.className = "product-details";

      const productName = document.createElement("h5");
      productName.className = "mb-1";
      productName.textContent = producto.descripcion;

      const productInfoDiv = document.createElement("div");

      const productStock = document.createElement("div");
      productStock.textContent = `En stock: ${producto.stock}`;

      const productPrice = document.createElement("div");
      productPrice.textContent = `Precio: $${producto.precio}`;

      const productCode = document.createElement("div");
      productCode.textContent = `Código: ${producto.codigo}`;

      productInfoDiv.appendChild(productStock);
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productCode);
      productDetailsDiv.appendChild(productName);
      productDetailsDiv.appendChild(productInfoDiv);

      productItem.appendChild(productDetailsDiv);
      productItem.appendChild(productImgDiv);

      productList.appendChild(productItem);
      productItem.appendChild(agregarBtn);
      productList.appendChild(productItem);
    });

    cardBody.appendChild(productList);
    collapseDiv.appendChild(cardBody);
    card.appendChild(collapseDiv);
    categoriasContainer.appendChild(card);
  });
}

function agregarACesta(indexCategoria, indexProducto) {
  const producto = data.categorias[indexCategoria].productos[indexProducto];
  const claveProducto = producto.codigo;

  // Verificar si el producto ya está en la cesta
  const itemEnCesta = cesta.find((item) => item.codigo === claveProducto);

  if (itemEnCesta) {
    // Incrementar la cantidad si hay stock disponible
    if (itemEnCesta.cantidad < producto.stock) {
      itemEnCesta.cantidad++;
    } else {
      alert("No hay más stock disponible para este producto.");
    }
  } else {
    // Agregar el producto a la cesta con cantidad 1
    cesta.push({ ...producto, cantidad: 1 });
  }

  actualizarCesta();
}

function eliminarProducto(codigoProducto) {
  // Encuentra el índice del producto en la cesta
  const indiceProducto = cesta.findIndex(
    (item) => item.codigo === codigoProducto
  );

  // Si se encuentra el producto, elimínalo del array
  if (indiceProducto !== -1) {
    cesta.splice(indiceProducto, 1);
  }

  // Actualiza la cesta para reflejar la eliminación del producto
  actualizarCesta();
}

function actualizarCesta() {
  const cestaElemento = document.getElementById("cesta");
  cestaElemento.innerHTML = "";

  cesta.forEach((item, index) => {
    const itemElemento = document.createElement("div");
    itemElemento.className =
      "cesta-item d-flex flex-row justify-content-between";

    const productDetailsDiv = document.createElement("div");
    productDetailsDiv.className = "product-details";

    const descripcion = document.createElement("p");
    descripcion.textContent = item.descripcion;

    const codigo = document.createElement("p");
    codigo.textContent = `Código: ${item.codigo}`;

    const cantidad = document.createElement("p");
    cantidad.textContent = `Cantidad: ${item.cantidad}`;

    const precio = document.createElement("p");
    precio.textContent = `Precio: ${item.precio}`;

    const subtotal = document.createElement("p");
    subtotal.textContent = `Subtotal: ${item.precio * item.cantidad}`;

    const eliminarBtn = document.createElement("button");
    eliminarBtn.className = "btn btn-warning";
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.onclick = function () {
      eliminarProducto(item.codigo);
    };

    productDetailsDiv.append(
      descripcion,
      codigo,
      cantidad,
      precio,
      subtotal,
      eliminarBtn
    );

    const productImgDiv = document.createElement("div");
    productImgDiv.className = "product-image-container";

    const productImg = document.createElement("img");
    productImg.src = item.imagen;
    productImg.alt = item.descripcion;
    productImg.className = "img-fluid img-cesta";

    productImgDiv.appendChild(productImg);

    itemElemento.appendChild(productDetailsDiv);
    itemElemento.appendChild(productImgDiv);

    cestaElemento.appendChild(itemElemento);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  crearElementosCategoria(data);
  const images = document.querySelectorAll(".product-image-container img");
  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.classList.add("enlarge");
    });

    img.addEventListener("mouseleave", () => {
      img.classList.remove("enlarge");
    });
  });
});
