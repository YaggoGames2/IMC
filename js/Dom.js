function calcular() {
    const valorAltura = document.querySelector("#alturaUsuario");
    const valorPeso = document.querySelector("#pesoUsuario");
    const Pesoresultado = document.querySelector(".form__resultado");
    const base = "valorAltura";
    const expoente = 2;
    const resultado = base ** expoente;
 
    let simbolo;
 
    if ("") {
        alert("coloque um número válido!");
    } else {
        if (valorAltura.value == "") {
            simbolo = "m";
        } else {
            simbolo = "kg"
        }
       Pesoresultado.innerHTML = (valorPeso.value / valorAltura)
    }
}