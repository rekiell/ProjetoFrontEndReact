function HeaderPv (){

  return (  
  <header>
    <div className="header_previsao">
      <h1>Previsão do tempo</h1>
      <input type="text" id='cidade' name='cidade' placeholder='Insira aqui o nome da cidade'/>
      <i className="material-icons">search</i>
    </div>
  </header>
  )

}

export default HeaderPv;