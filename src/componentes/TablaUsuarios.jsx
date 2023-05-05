import React from 'react'

const TablaUsuarios = ({users, eliminarUsuario, setEditar, editarUser}) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apodo</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ?
        users.map(user => (
         <tr key={user.id}>
         <td>{user.name}</td>
         <td>{user.username}</td>
         <td>
           <button className="button muted-button" onClick={() => editarUser(user)}>Editar</button>
           <button className="button muted-button" onClick={() => eliminarUsuario(user.id)}>Eliminar</button>
         </td>
       </tr>
      )) : 
        (<tr>
          <td colSpan={3}>No hay usuarios!</td>
        </tr>
        )
      }
    </tbody>
  </table>
  )
}

export default TablaUsuarios