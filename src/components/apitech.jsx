    async function temperaturaDasCapitais(cidade){
        const requisicao = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=6877d487eca5720c1a3d29b372414de7')
        
        const cidadeEncontrada = await requisicao.json();
        
        return cidadeEncontrada;
        
    }

    function pesquisaCidade(){
        
        const elementoCidade = document.getElementById('inputcidade');
        const cidade = elementoCidade.value;
        
        temperaturaDasCapitais(cidade)
            .then( capital => {
    
                const cabecalho = document.getElementById('root');
    
                cabecalho.innerHTML += `
                    <p>
                         Cidade: ${capital.name} 
                    </p>
                    <p>
                        Temperatura min: ${capital.main.temp_min}
                    </p>
                    <p>
                        Temperatura max: ${capital.main.temp_max}
                    </p>    
                `
    
            });
    
    }


