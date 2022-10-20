    async function temperaturaDasCapitais(cidade){
        const requisicao = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=6877d487eca5720c1a3d29b372414de7')
        
        const cidadeEncontrada = await requisicao.json();
        
        return cidadeEncontrada;
        
    }

    function pesquisaCidade(){
        
        const elementoCidade = document.getElementById('inputcidade');
        const cidade = elementoCidade.value;
        
        temperaturaDasCapitais(cidade)
            .then( main => {
    
                const cabecalho = document.getElementById('root');
    
                cabecalho.innerHTML += `
                    <p>
                         Cidade: ${cidade} 
                    </p>
                    <p>
                        Temperatura min: ${main.temp_min}
                    </p>
                    <p>
                        Temperatura max: ${main.temp_max}
                    </p>    
                `
    
            });
    
    }


