import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css"

export default function App(){

	const [itens, setItens] = useState([]);

	useEffect(()=>{
		axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce',{method:'GET',})
			.then((resposta)=>{
				setItens(resposta.data)
		    })
	}, [])

		return (
			<>			
				<h1 className="titulo">Lista de usuários</h1>

				    {itens.map(item =>(
						<div className="usuarios">
							<div className="usuarios-box">
								<div className="usuarios-box-img">
									<img src={item.img}/>
								</div>
								<div className="usuarios-box-name-id">
									<h3>Nome do usuário: <i>{item.name}</i></h3>
									<h3>ID: <i>{item.id}</i></h3>
									<h3>Username: <i>{item.username}</i></h3>
								</div>
								<div className="usuarios-box-button">
									<button>Pagar</button>
								</div>
							</div>
						</div>
					))}
			</>
		);
}