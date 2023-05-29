import React  from 'react'
import './Register.css'
import { LogoCont } from '../../components/LogoCont/LogoCont'

export const Register = () => {

  return (
    <>
    <LogoCont/>
    <div className='ContainerRegis'>

    <form class="form1">
    <p class="title1">Registrate </p>
    <p class="message1">Signup now and get full access to our app. </p>
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
