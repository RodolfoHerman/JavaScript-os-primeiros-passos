var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var x = 0; x < pacientes.length; x++) {

	var paciente = pacientes[x];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);


	if(!pesoValido) {
		pesoValido = false;
		tdImc.textContent = "Peso inválido!";
		//paciente.style.backgroundColor = "orange";
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaValida) {
		alturaValida = false;
		tdImc.textContent = "Altura inválida!";
		//paciente.style.backgroundColor = "orange";
		paciente.classList.add("paciente-invalido");

	}

	if(pesoValido && alturaValida) {
		tdImc.textContent = calculaImc(peso, altura);
	}
}

function calculaImc(peso, altura) {
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaAltura(altura) {
	if(altura > 0 && altura <= 3.00) {
		return true;
	}
	return false;
}

function validaPeso(peso) {
	if(peso > 0 && peso <= 1000) {
		return true;
	}
	return false;
}


