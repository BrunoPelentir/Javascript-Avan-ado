function mais() {
    let ideUm = document.getElementById('ideUm').value;
    let ideDois = document.getElementById('ideDois').value;
    let resultado = parseInt(ideUm) + parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    console.log(ideUm+"+"+ideDois+"="+resultado);
    if (ideUm && ideDois) {
        let resultado = parseInt(ideUm) + parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    
    } else {
        alert("Coloque mais um número")
    }     
}
function menos() {
    let ideUm = document.getElementById('ideUm').value;
    let ideDois = document.getElementById('ideDois').value;
    let resultado = parseInt(ideUm) - parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    console.log(ideUm+"+"+ideDois+"="+resultado);
    if (ideUm && ideDois) {
        let resultado = parseInt(ideUm) - parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    
    } else {
        alert("Coloque mais um número")
    }
    
    
    
}
function multiplicacao() {
    let ideUm = document.getElementById('ideUm').value;
    let ideDois = document.getElementById('ideDois').value;
    let resultado = parseInt(ideUm) * parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    console.log(ideUm+"+"+ideDois+"="+resultado);
    if (ideUm && ideDois) {
        let resultado = parseInt(ideUm) * parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    
    } else {
        alert("Coloque mais um número")
    }
}
function divisao() {
    let ideUm = document.getElementById('ideUm').value;
    let ideDois = document.getElementById('ideDois').value;
    let resultado = parseInt(ideUm) / parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    console.log(ideUm+"+"+ideDois+"="+resultado);
    if (ideUm && ideDois) {
        let resultado = parseInt(ideUm) / parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    
    } else {
        alert("Coloque mais um número")
    }
}
function soma() {
    let ideUm = document.getElementById('ideUm').value;
    let ideDois = document.getElementById('ideDois').value;
    let resultado = parseInt(ideUm) = parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    console.log(ideUm+"+"+ideDois+"="+resultado);
    if (ideUm && ideDois) {
        let resultado = parseInt(ideUm) - parseInt(ideDois);
    document.getElementById("ideResultado").value=resultado
    
    } else {
        alert("Coloque mais um número")
    }
}

