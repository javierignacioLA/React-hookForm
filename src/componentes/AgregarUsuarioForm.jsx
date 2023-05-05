import React from 'react'
import { useForm } from 'react-hook-form'
const AgregarUsuarioForm = ({agregarUsuario}) => {

  const {register, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = (data, e) =>{
    console.log (data)
    agregarUsuario(data)
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
      <button>Agregar Nuevo usuario</button>
    </form>
  )
}

export default AgregarUsuarioForm