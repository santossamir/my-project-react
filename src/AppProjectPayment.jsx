import React, {useState} from "react";
import "./App.css"


export default function AppPayment(props){
	console.log("NAME", props);

	const [valor, setValor] = useState("");
	console.log(valor);
    
    let cards = [
	  // valid card
	  {
	    card_number: '1111111111111111',
	    cvv: 789,
	    expiry_date: '01/18',
	  },
	  // invalid card
	  {
	    card_number: '4111111111111234',
	    cvv: 123,
	    expiry_date: '01/20',
	  },
	];

	
// Início da escrita padrão do valor moeda. --------------------------------
function currencyFormat(moeda){
	const writingPattern = /[^0-9]/;

	if(writingPattern.test(moeda.key)){
		moeda.preventDefault();
		return;
	}
	
	if(!moeda.target.value) return;

	valor = moeda.target.value.toString();
	valor = valor.replace(/[\D]+/g, '');
	valor = valor.replace(/([0-9]{1})$/g, ",$1");

	if(valor.length >= 6){
		while(/([0-9]{4})[,|\.]/g.test(valor)){
			valor = valor.replace(/([0-9]{1})$/g, ",$1");
			valor = valor.replace(/([0-9]{3})[,|\.]/g, ".$1");
		}
	}

	moeda.target.value = valor;
}
// Final da escrita padrão do valor moeda. --------------------------------------
     
	return(
		<>		
			<h1 className="titulo-pagamento"> Pagamento para <i>{props.nameUser}</i></h1>
				<div className="dados-pagamento">
					<div className="box-pagamentos">
						<input type="text" onKeyPress={(event)=>{this.currencyFormat(event)}} placeholder="R$ 0,00" value={valor} onChange={(e)=> setValor(e.target.value)} className="box-pagamentos-input" />
						<div className="select-box">
							<select className="dados-pagamento-select">
								<option>Nº do Cartão</option>
								<option>Cartão com final 1111</option>
								<option>Cartão com final 1234</option>
							</select>
						</div>
		                <div className="button-pagamento">
							<button onClick={()=> props.makePayments(false)}>Pagar</button>
						</div>
					</div>
				</div>	
		</>
	)
}