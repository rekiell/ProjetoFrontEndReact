
function HeaderPv (){  
 
  return (  
  <header>
    <div className="header_previsao">
      <h1>Previsão do tempo</h1>
      <input 
      type='text' 
      id='inputcidade'
      name='cidade'  
      placeholder='Insira aqui o nome da cidade'   
      />
     <button className="header_previsao-btn" onClick={pesquisaCidade}><i className="material-icons">search</i></button> 
    </div>
    <div id="pequisa_completa">

    </div>
  </header>
  )

}

export default HeaderPv;