async function temperaturaDasCapitais(cidade) {
  const requisicao = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=&units=metric"
  );

  const cidadeEncontrada = await requisicao.json();

  return cidadeEncontrada;
}

function pesquisaCidade() {
  const elementoCidade = document.getElementById("inputcidade");
  const cidade = elementoCidade.value;
  temperaturaDasCapitais(cidade).then((capital) => {
    const cabecalho = document.getElementById("pequisa_completa");
    const temperaturaMin = Math.round(capital.main.temp_min);
    const temperaturaMax = Math.round(capital.main.temp_max);

    cabecalho.innerHTML += `
                    <h2>
                         Cidade: ${capital.name} 
        
                    </h2>
                        Min: ${temperaturaMin + "°"}
                    </p>
                    <p>
                        Max: ${temperaturaMax + "°"}
                    </p>    
                `;
  });
}
