import "./App.css";
import AppProjectPayment from "./AppProjectPayment";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function AppPaidError(){

	const closeModal = ()=> {
		window.location.reload();
	}

	const redirecionar = () =>{
			<Router>
				<Route exact path="/AppProjectPayment">
					<AppProjectPayment/>
				</Route>
			</Router>
	}

	
	return(
		<div className="modal-container">
				<div className="modal-sucesso">  
					<div className="modal-sucesso-titulo">
						<h2>Recibo de pagamento</h2>
					</div>
					<div className="modal-sucesso-body">
						<p>O pagamento <strong>não</strong> foi concluído com sucesso.</p>
					</div>
					<div className="div-button-paid-sucess">
						<button className="button-paid-error" onClick={closeModal}>Fechar</button>
						<button className="button-paid-error" onClick= {redirecionar}>Retornar</button>
					</div>
				</div>
		</div>
	)
}