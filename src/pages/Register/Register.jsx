import React  from 'react'
import './Register.css'

export const Register = () => {

  return (
    <>
    <div className='ContainerRegis'>

    <form class="form1">
    <p class="title1">Registrate </p>
    <p class="message1">Inicia sesión para tener acceso completo a la aplicación. </p>
        <div class="flex">
        <label className='LabelInput'>
            <input required="" placeholder="" type="text" class="input1"/>
            <span className='SpanRegis'>Firstname</span>
        </label>

        <label className='LabelInput'> 
            <input required="" placeholder="" type="text" class="input"/>
            <span className='SpanRegis' >Lastname</span>
        </label>
    </div>  
            
    <label className='LabelInput'>
        <input required="" placeholder="" type="email" class="input"/>
        <span className='SpanRegis'>Email</span>
    </label> 
        
    <label className='LabelInput'>
        <input required="" placeholder="" type="password" class="input"/>
        <span className='SpanRegis'>Password</span>
    </label>
    <label className='LabelInput'>
        <input required="" placeholder="" type="password" class="input"/>
        <span className='SpanRegis'>Confirm password</span>
    </label>
    <button class="submit">Submit</button>

</form>
</div>
</>
  )
}
