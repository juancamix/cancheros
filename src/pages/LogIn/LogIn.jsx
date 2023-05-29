

import { Link } from "react-router-dom"
import "./LogIn.css"


export const MainLogin = () => {

return (
	<>
<div class="form-container">
	<p class="title">Inicio sesión</p>
	<form class="form">
		<div class="input-group">
			<label for="username">Nombre</label>
			<input type="text" name="username" id="username" placeholder="Ingresa tu nombre"/>
		</div>
		<div class="input-group">
			<label for="password">Contraseña</label>
			<input type="password" name="password" id="password" placeholder="Ingresa tu contraseña"/>
			<div class="forgot">
				<a rel="noopener noreferrer" href="##">Olvidaste tu contraseña ?</a>
			</div>
		</div>
		<button class="sign">Iniciar sesión</button>
	</form>
	<div class="social-message">
		<div class="line"></div>
		<p class="message">Inicia sesión con estas cuentas sociales</p>
		<div class="line"></div>
	</div>
	<div class="social-icons">
		<button aria-label="Log in with Google" class="icon">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>

	</div>
	<p class="signup">¿No tienes una cuenta?
		<Link to='/Register'> Registrate</Link>
	</p>
</div>
	
	</>
    )
}
    