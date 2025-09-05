function Evento() {
  function meuEvento() {
    console.log("O botão foi clicado!")
    alert("Você clicou no botão do evento!")
  }

  return (
    <div className="evento">
      <h2>Página de Eventos</h2>
      <p>Clique no botão abaixo para disparar um evento:</p>
      <button onClick={meuEvento}>Clique Aqui</button>
    </div>
  )
}

export default Evento
