import "./App.css";

export default function AppPaidError(){
	return(
      <div className="modal-container">
    		<div className="modal-sucesso">  
		      	<div className="modal-sucesso-titulo">
		      		<h2>Recibo de pagamento</h2>
		      	</div>
		      	<div className="modal-sucesso-body">
		      		<p>O pagamento <strong>não</strong> foi concluído com sucesso.</p>
		      	</div>
	      	</div>
      </div>

	)
}