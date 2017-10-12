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

	var pesoValido = true;
	var alturaValida = true;


	if(peso <= 0 || peso >= 1000) {
		pesoValido = false;
		tdImc.textContent = "Peso inválido!";
		//paciente.style.backgroundColor = "orange";
		paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 4.00) {
		alturaValida = false;
		tdImc.textContent = "Altura inválida!";
		//paciente.style.backgroundColor = "orange";
		paciente.classList.add("paciente-invalido");

	}

	if(pesoValido && alturaValida) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}
}



