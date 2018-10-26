
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
var cont =1;
var bitacoras=[];
var formulario= document.getElementById("bitacora");
/*almacena el elemento que tiene el id especificado con el valor especifico*/

formulario.addEventListener("submit", (evt) => {

});

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
 }); 
 /* preventDefault cancela el evento de ser posible, esto  quiere decir que la action por defecto que pertenece al evento no se ejecutara*/

 
 /* contiene los input segun el indice indicado dentro del formulario */
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 });
 
 const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => { 
     let td = document.createElement("td"); 
     let content = document.createTextNode(item); 
     td.appendChild(content); 
     tr.appendChild(td);
     tr.setAttribute('class','click');
    }); 
   tbody.appendChild(tr); 
  }
/* contienen la colection de las etiquetas creadas, una tabla*/
/*contiene un nodo de texto */
/*contiene una tabla con todos los elementos ya agregados */
/*esta funcion primero crea la fila y luego va creando cada celda, a lo cual tambien va creando un nodo de texto al cual se lo agrega a la celda y la celda se agrega a la fila todo esto dentro de un for each, al terminar la iteracion,se agrega la fila como hija a tbody*/

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }

/*devuelve el primer hijo de un nodo especificado como un objeto node*/
/*quedara vacio */

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[0].textContent; 
      document.querySelector("#descp").value = item.childNodes[1].textContent; 
      document.querySelector("#cant").value = item.childNodes[2].textContent; 
     }); 
    }) 
   }
   /*obtenemos una colection de todos los nodos hijos y tambien obtenemos el texto sin formato*/

   const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
   }

   /*obtenemos el primer elemento que matchea el selector especificado*/
   /* nos devuelve la cantidad de hijos que tiene el elemento seleccionado*/

   /*al darle click a un elemento de la tabla, copia todo al otro lado en otras pálabras al los campos del fomrulario*/

   /*se mostrara la tabla con la fila una vez dado summit*/