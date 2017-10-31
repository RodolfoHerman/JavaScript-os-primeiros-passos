var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener('click', function() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener('load', function() {

		var erroAjax = document.querySelector("#erro-ajax");

		if(xhr.status == 200) {

			var pacientes = JSON.parse(xhr.responseText);
			
			erroAjax.classList.add("invisivel");

			pacientes.forEach(function(paciente) {
				adicionaPacienteNaTabela(paciente);
			});

		} else {

			erroAjax.classList.remove("invisivel");
			console.log(xhr.status);

		}

	});

	xhr.send();

	
});