function calcularHoras () {
    const horasDoContrato = 9.30;
    let entrada = parseFloat(document.getElementById('entrada').value) || 0;  
    let calculoDeHoras = (entrada + horasDoContrato);
    
    alert('Trabalhar até: ' + calculoDeHoras.toFixed(2).replace('.', ':')); 
}


