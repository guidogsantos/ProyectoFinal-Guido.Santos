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

var form = document.getElementById("formulario")
form.addEventListener("submit", function(evt){
    evt.preventDefault();
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(salario.value);
    console.log(gastos.value);
    console.log(total.value= salario.value-gastos.value);

        if (salario.value-gastos.value < 10000) {
            console.log(categorias[0])
            oferta.innerHTML = ("<h1> Felicitaciones " + (nombre.value + " " +apellido.value) + " estas a un paso de tu cuenta <a style=color:Red;>BASICA</a> </h1>");
        } else if (salario.value-gastos.value >= 10000 && salario.value-gastos.value <=49999) {
            console.log(categorias[1])
            oferta.innerHTML = ("<h1> Felicitaciones " + (nombre.value + " " +apellido.value) + " estas a un paso de tu cuenta <a style=color:#E6C900;>GOLD</a> </h1>");
        } else if (salario.value-gastos.value >= 50000 && salario.value-gastos.value <=99999) {
            console.log(categorias[2])
            oferta.innerHTML = ("<h1> Felicitaciones " + (nombre.value + " " +apellido.value) + " estas a un paso de tu cuenta <a style=color:#0057A0;>PLATINUM</a></h1>");
        } else if (salario.value-gastos.value > 10000) {
            console.log(categorias[3])
            oferta.innerHTML = ("<h1> Felicitaciones " + (nombre.value + " " +apellido.value) + " estas a un paso de tu cuenta <a style=color:#000000;>BLACK</a></h1>");
        }
})
