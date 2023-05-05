import React, { useState } from "react";
import TablaUsuarios from "./componentes/TablaUsuarios";
import {v4 as uuid} from 'uuid'
import AgregarUsuarioForm from "./componentes/AgregarUsuarioForm";
import EditarUsuarioForm from "./componentes/EditarUsuarioForm";
function App() {
  const usersData = [
    { id: uuid(), name: 'Tania', username: 'floppydiskette' },
    { id: uuid(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuid(), name: 'Ben', username: 'benisphere' },
    
  ]
  //state
  const [users, setUsers] = useState (usersData)
  //eliminar usuario
  const eliminarUsuario = (id) =>{
    const usuarioNoEliminado = users.filter(usuario => usuario.id !== id)
    setUsers (usuarioNoEliminado)
  }
  //agregar usuario
  const agregarUsuario = (user) =>{
    user.id = uuid()
    setUsers([user, ...users])
  }
  //editar usuario
  //para mostrar un componente u otro
  const [editar, setEditar] = useState(false);
  const [usuarioAEditar, setUsuarioAEditar] = useState({id: null, name:'', username:''});

  const editarUser = (user) =>{
    setEditar(true)
    setUsuarioAEditar ({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }
  const enviarUsuarioEditado = (id, usuarioEditado) => {
    setEditar(false)
    const actualizarUsers = users.map (user => user.id ===id ? usuarioEditado: user)
    setUsers(actualizarUsers)
  }

  return (
    <div className="container">
      <h1>CRUD App </h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editar === true?
            (<div>
              <h2>Editar Usuario</h2>
                <EditarUsuarioForm 
                usuarioAEditar={usuarioAEditar}
                enviarUsuarioEditado={enviarUsuarioEditado}
                />
            </div>):(
              <div>
                <h2>Agregar usuario</h2>
              <AgregarUsuarioForm agregarUsuario={agregarUsuario}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Ver usuarios</h2>
          <TablaUsuarios 
          users={users} 
          eliminarUsuario={eliminarUsuario} 
          editarUser={editarUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
