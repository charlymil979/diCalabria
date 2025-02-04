let datos = {};
const url = "https://charlymil979.github.io/diCalabria/db.json";
// const url = "http://localhost:5550/MENU";



const $container = document.querySelector(".container");

let $seccion = "",
  $info = "",
  $precio,
  $uno,
  clase = "A",
  picture= document.createElement("div"),
  art;
  picture.classList.add("pictures")

function llamarDb(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((dato) => {
      const data = dato;
      for (const key in data) {
     //   console.log(key)
        const mainSeccion = document.createElement("MainSection");
        mainSeccion.classList.add("mainSeccion");
        const seccion = document.createElement("section");
        seccion.classList.add("seccion1");
        const titulo = document.createElement("h3");
        titulo.classList.add("seccion");
        titulo.innerHTML = `${key}`;

          seccion.innerHTML = `
          <div class= 'pictures' style="background-image: url('./imagenes/${key}.jpg');"></div>`;


          for (const articulo in data[key]) {
            let $tipos = document.createElement("article");
            $tipos.innerHTML=""
            datos = data[key][articulo];
            //console.log(datos);

            $precio = "";

            //Armando el arreglo
            datos[2].forEach((element, i) => {
              //console.log(element)
                $tipos.innerHTML+= `${element} `;
              // console.log(element);
            });
            //console.log($tipos)
            let $precios=""

              $precios +=`<span class="precio">
              <span class="mini">Mediana</span>$ ${datos[3][0]}</span>`
              $precios +=`<span class="precio">
              <span class="mini">Grande</span>$ ${datos[3][1]}</span>`


            art = `
            <h4 class="articulo">${datos[0]}</h4><div class="articulo1">
            <div class="descripcion">${datos[1]}</div>
            <div class="ingred">${$tipos.innerHTML}</div>
            <div class="precios">${$precios}</div>
            </div>
            `;

            seccion.innerHTML += art;
            //console.log(titulo)
            
            mainSeccion.appendChild(titulo);
           mainSeccion.appendChild(seccion);
            document.querySelector(".menu").appendChild(mainSeccion);
          }
        
      }
    });
}

llamarDb(url);
