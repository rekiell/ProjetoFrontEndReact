
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
     <button onClick={pesquisaCidade}><i className="material-icons">search</i></button> 
    </div>
  </header>
  )

}

export default HeaderPv;