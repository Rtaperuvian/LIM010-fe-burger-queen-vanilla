import { arrProducto } from "../controlador-rutas/funciones.js";
let sumaTotal = 0
export const btnDatos = (doc) => {
  const btnPintardato = document.createElement('tr');
  btnPintardato.innerHTML +=
    `<td id="productos">${doc.producto}</td>
          <td id="precios">s/.${doc.precio}</td>
          <td><p class="colour">${doc.cantidad}</p></td> 
          <td><button class="btnEliminar" id="${doc.id}">X</button></td>`;
  const box1 = document.querySelector('#containerTabla');
  box1.appendChild(btnPintardato);
  
  const subtotal = doc.precio * doc.cantidad
  
  sumaTotal += subtotal

  const btnEliminar = btnPintardato.querySelector('.btnEliminar');
  btnEliminar.addEventListener('click', (event) => {
    const even = event.target.id;
    box1.removeChild(btnPintardato);
    removeLocalStorage(arrProducto, even);
    btnTotal(sumaTotal -= subtotal);
  });
};



export const btnTotal = () => {

  const btnPintartotal = document.createElement('tr');
  btnPintartotal.innerHTML =
    ` <td>TOTAL:</td>
       <td>s/${sumaTotal}.00</td>
       <td></td>
       <td><button class = "btnEnviar">Enviar</button></td>`;
  const box2 = document.querySelector('#total');
  box2.innerHTML = '';
  box2.appendChild(btnPintartotal);
}
const removeLocalStorage = (arrP, index) => {
   
  arrP = JSON.parse(localStorage.getItem('ordenes'));
  arrP.splice(index, 1);
  localStorage.setItem('ordenes', JSON.stringify(arrP));
}