
import "./App.css"

export default function AppPayment({makePayments}){
	return(
		<>		
			<h1 className="titulo-pagamento"> Pagamento para <i>Nome do Usuário</i></h1>
				<div className="dados-pagamento">
					<div className="box-pagamentos">
						<input type="text" placeholder="R$ 0,00" className="box-pagamentos-input" />
						<div className="select-box">
							<select className="dados-pagamento-select">
								<option>Cartão com final 0123</option>
								<option>Cartão com final 4567</option>
								<option>Cartão com final 8910</option>
							</select>
						</div>
		                <div className="button-pagamento">
							<button onClick={()=> makePayments(false)}>Pagar</button>
						</div>
					</div>
				</div>	
		</>

	)
}