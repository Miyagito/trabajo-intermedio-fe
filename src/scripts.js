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
          stock: 3,
        },
        {
          imagen:
            "https://fotosuraj.com/23173-large_default/lenovo-tab-m10-tablet-de-103-fhd-plus-4-gb-de-ram-128-gb.jpg",
          codigo: "ELEC23456",
          descripcion: "Tableta de alta resolución con 128GB de almacenamiento",
          precio: 599.99,
          stock: 4,
        },
        {
          imagen: "https://m.media-amazon.com/images/I/91woduXUkRL.jpg",
          codigo: "ELEC34567",
          descripcion: "Portátil ultraligero y potente para gaming",
          precio: 1200.99,
          stock: 2,
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

function restaurarEstadoAcordeon() {
  // Selecciona el elemento con el id "collapse0"
  const acordeon = document.querySelector("#collapse0");

  // Verifica si el elemento está presente
  if (acordeon) {
    // Obtiene el id del acordeón
    const id = acordeon.id;
    // Verifica si el acordeón estaba abierto previamente
    const wasOpen = $(`#${id}`).hasClass("show");

    // Si el acordeón estaba abierto, lo muestra
    if (wasOpen) {
      new bootstrap.Collapse(acordeon, {
        toggle: false,
      }).show();
    }
  }
}

function crearElementosCategoria(data) {
  const stockGuardado = JSON.parse(localStorage.getItem("stock"));
  if (stockGuardado) {
    data.categorias = stockGuardado;
  }
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
  restaurarEstadoAcordeon();
  localStorage.setItem("stock", JSON.stringify(data.categorias));
}

// USANDO jQuery para cumplir con los requerimientos de la asignatura
function verificarEstadoBotonPedido() {
  const $botonPedido = $("#realizarPedido");
  if (cesta.length === 0) {
    $botonPedido.prop("disabled", true); // Deshabilita el botón si la cesta está vacía
  } else {
    $botonPedido.prop("disabled", false); // Habilita el botón si la cesta tiene al menos un producto
  }
}

function calcularTotalCesta() {
  let total = 0;
  cesta.forEach((item) => {
    total += item.precio * item.cantidad;
  });
  return total;
}

function actualizarTotalCompra() {
  const totalCompra = calcularTotalCesta();
  document.getElementById("totalCompra").textContent = `$${totalCompra.toFixed(
    2
  )}`;
}

function agregarACesta(indexCategoria, indexProducto) {
  const producto = data.categorias[indexCategoria].productos[indexProducto];

  // Solo proceder si hay stock disponible
  if (producto.stock > 0) {
    producto.stock--; // Disminuir el stock en la base de datos

    const claveProducto = producto.codigo;
    const itemEnCesta = cesta.find((item) => item.codigo === claveProducto);

    if (itemEnCesta) {
      itemEnCesta.cantidad++;
    } else {
      cesta.push({ ...producto, cantidad: 1 });
    }

    actualizarCesta();
    actualizarTotalCompra();
    crearElementosCategoria(data);
    restaurarEstadoAcordeon();
    permitirCierreAcordeon = true;
  } else {
    alert("No hay más stock disponible para este producto.");
  }
}

function eliminarProducto(codigoProducto) {
  const indiceCesta = cesta.findIndex((item) => item.codigo === codigoProducto);
  if (indiceCesta !== -1) {
    const productoEliminado = cesta[indiceCesta];
    // Encuentra el producto en la base de datos y aumenta su stock
    data.categorias.forEach((categoria) => {
      categoria.productos.forEach((producto) => {
        if (producto.codigo === productoEliminado.codigo) {
          producto.stock += productoEliminado.cantidad;
        }
      });
    });

    cesta.splice(indiceCesta, 1);
    actualizarCesta();
    actualizarTotalCompra();
    crearElementosCategoria(data);
    restaurarEstadoAcordeon();
    permitirCierreAcordeon = false;
  }
}

function disminuirProducto(codigoProducto) {
  const productoEnCesta = cesta.find((item) => item.codigo === codigoProducto);
  if (productoEnCesta && productoEnCesta.cantidad > 1) {
    productoEnCesta.cantidad--;

    // Encuentra el producto en la base de datos y aumenta su stock
    data.categorias.forEach((categoria) => {
      categoria.productos.forEach((producto) => {
        if (producto.codigo === codigoProducto) {
          producto.stock++;
        }
      });
    });

    actualizarCesta();
    crearElementosCategoria(data);
  } else {
    eliminarProducto(codigoProducto);
  }
}

// USANDO jQuery para cumplir con los requerimientos de la asignatura
function actualizarCesta() {
  const $cestaElemento = $("#cesta");
  $cestaElemento.empty(); // Vacía el contenido actual de la cesta

  cesta.forEach((item) => {
    const itemElemento = `
        <div class="cesta-item d-flex flex-row justify-content-between">
          <div class="product-details">
            <p>${item.descripcion}</p>
            <p>Código: ${item.codigo}</p>
            <p>Cantidad: ${item.cantidad}</p>
            <p>Precio: ${item.precio}</p>
            <p>Subtotal: ${item.precio * item.cantidad}</p>
            <button class="btn btn-danger disminuirProductoBtn" data-codigo="${
              item.codigo
            }">Eliminar de la cesta</button>
          </div>
          <div class="product-image-container">
            <img src="${item.imagen}" alt="${
      item.descripcion
    }" class="img-fluid img-cesta">
          </div>
        </div>
      `;
    $cestaElemento.append(itemElemento);
  });

  $(".disminuirProductoBtn").click(function () {
    const codigoProducto = $(this).data("codigo");
    disminuirProducto(codigoProducto);
  });

  verificarEstadoBotonPedido();
  actualizarTotalCompra();
}

document.addEventListener("DOMContentLoaded", () => {
  crearElementosCategoria(data);
  restaurarEstadoAcordeon(); // Llamada añadida aquí
  const images = document.querySelectorAll(".product-image-container img");
  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.classList.add("enlarge");
    });

    img.addEventListener("mouseleave", () => {
      img.classList.remove("enlarge");
    });
  });
  verificarEstadoBotonPedido();
});
