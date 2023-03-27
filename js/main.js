const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const salario = document.querySelector("#salario");
const gastos = document.querySelector("#gastos");
const total = salario - gastos;

const categorias = ["BASICA", "GOLD", "PLATINUM", "BLACK"]
console.log(categorias)

function resta(){
    total.value = salario.value - gastos.value;
    document.getElementById("total").value = total.value;
}   

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nombre.value);
    console.log(apellido.value);
    localStorage.setItem("nombreyapellido", nombre.value + " " + apellido.value); 
    console.log(salario.value);
    console.log(gastos.value);
    console.log(total.value= salario.value-gastos.value);
    localStorage.setItem("sueldo", salario.value);

    fetch('https://sheet.best/api/sheets/5ba71233-2989-4e72-9ceb-a41ef3c9b627',{
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Apellido": formulario.apellido.value,
            "Salario": formulario.salario.value,
            "Gastos": formulario.gastos.value,
        })
        
    });


const usuario = {
    nombre: nombre.value,
    apellido: apellido.value,
    salario: salario.value  
}
    
const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem("usuario", usuarioJSON);

const usuarioLS = localStorage.getItem("usuario");
const usuarioObjeto = JSON.parse (usuarioLS);


        if (salario.value-gastos.value < 10000) {
            console.log(categorias[0])
            oferta.innerHTML = ("<h1> Felicitaciones " + (nombre.value + " " +apellido.value) + " estas a un paso de tu cuenta <a style=color:Red;>BASICA</a> </h1>");
            Swal.fire({
                html: `<img id="preview" src="./img/BASICA.jpg">`, 
                imageHeight: 800,
                imageWidth: 300,
                imageAlt: 'Cuenta BASICA'
            })
        } else if (salario.value-gastos.value >= 10000 && salario.value-gastos.value <=49999) {
            console.log(categorias[1])
            oferta.innerHTML = ("<h1> Felicitaciones " + (nombre.value + " " +apellido.value) + " estas a un paso de tu cuenta <a style=color:#E6C900;>GOLD</a> </h1>");
            Swal.fire({
                html: `<img id="preview" src="./img/GOLD.jpg">`, 
                imageHeight: 800,
                imageWidth: 300,
                imageAlt: 'Cuenta GOLD'
            })
        } else if (salario.value-gastos.value >= 50000 && salario.value-gastos.value <=99999) {
            console.log(categorias[2])
            oferta.innerHTML = ("<h1> Felicitaciones " + (nombre.value + " " +apellido.value) + " estas a un paso de tu cuenta <a style=color:#0057A0;>PLATINUM</a></h1>");
            Swal.fire({
                html: `<img id="preview" src="./img/PLATINUM.jpg">`, 
                imageHeight: 800,
                imageWidth: 300,
                imageAlt: 'Cuenta PLATINUM'
            })
        } else if (salario.value-gastos.value > 10000) {
            console.log(categorias[3])
            oferta.innerHTML = ("<h1> Felicitaciones " + (nombre.value + " " +apellido.value) + " estas a un paso de tu cuenta <a style=color:#000000;>BLACK</a></h1>");
            Swal.fire({
                html: `<img id="preview" src="./img/BLACK.jpg">`, 
                imageWidth: 450,
                imageAlt: 'Cuenta BLACK'
            })
        }
})

