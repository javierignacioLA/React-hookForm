import React from 'react'
import { useForm } from 'react-hook-form'
const EditarUsuarioForm = ({usuarioAEditar, enviarUsuarioEditado}) => {
    
  const {register, formState: {errors}, handleSubmit, setValue} = useForm({defaultValues: usuarioAEditar});

  

  const onSubmit = (data, e) =>{
    console.log (data)
    data.id = usuarioAEditar.id
    enviarUsuarioEditado(data.id, data)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input 
      type="text" 
      name="name" 
      {...register('name', 
            {
             required: {value: true, message: "Campo obligatorio"},
             minLength: {value: 2, message: "titulo demasiado corto"}
            })
      }
      
      />
      <span className="text-danger text-small d-block mb-2">
        {errors?.name?.message}
      </span>
      <label>Apodo</label>
      <input 
      type="text" 
      name="username"
      {...register('username', 
            {
             required: {value: true, message: "Campo obligatorio"},
             minLength: {value: 2, message: "titulo demasiado corto"}
            })
      }
       />
       <span className="text-danger text-small d-block mb-2">
        {errors?.username?.message}
      </span>
      <button>Editar usuario</button>
    </form>
  )
}

export default EditarUsuarioForm