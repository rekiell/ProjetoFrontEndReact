    async function temperaturaDasCapitais(cidade){
        const requisicao = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=&units=metric')
        
        const cidadeEncontrada = await requisicao.json();
        
        return cidadeEncontrada;
        
    }

    function pesquisaCidade(){
        
        const elementoCidade = document.getElementById('inputcidade');
        const cidade = elementoCidade.value;
        
        temperaturaDasCapitais(cidade)
            .then( capital => {
    
                const cabecalho = document.getElementById('root');
                
                const temperaturaMin = Math.round(capital.main.temp_min)
                const temperaturaMax = Math.round(capital.main.temp_max)

                cabecalho.innerHTML += `
                    <p>
                         Cidade: ${capital.name} 
                    </p>
                    <p>
                        Temperatura min: ${temperaturaMin + "°"}
                    </p>
                    <p>
                        Temperatura max: ${temperaturaMax + "°"}
                    </p>    
                `
    
            });
    
    }


