import { useState } from 'react'

function Form() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  function cadastrarUsuario(event) {
    event.preventDefault()
    console.log(`Usuário: ${name}, Senha: ${password}`)
  }

  return (
    <form onSubmit={cadastrarUsuario} className="form">
      <div className="form-group">
        <label>Nome:</label>
        <input 
          type="text" 
          name="name" 
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>
      <div className="form-group">
        <label>Senha:</label>
        <input 
          type="password" 
          name="password" 
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default Form
