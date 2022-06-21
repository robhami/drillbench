import React from 'react';


const Uconv= ({ name, id, image } ) => {
	
	return (
		
	
		
				<div className="card">

					<div className="card text-center">

						<div className="card-header">
							<h2>Units Converter</h2>
								<dt> Select Units Type: </dt>
							<ul className="nav nav-pills" id="unitsTab">
								
								<li className="nav-item" id="massNav" >
									<a className="nav-link" href="#"  id="mass" data-toggle="tab" onclick="tab(this.id)">Mass</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" id="length" data-toggle="tab" onclick="tab(this.id)">Length</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" id="density" data-toggle="tab"onclick="tab(this.id)">Density</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" id="flow" data-toggle="tab" onclick="tab(this.id)">Flow</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" id="pressure" data-toggle="tab" onclick="tab(this.id)">Pressure</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" href="#" id="torque" data-toggle="tab" onclick="tab(this.id)">Torque</a>
								</li>

								<li className="nav-item">
									<a className="nav-link" href="#" id="area" data-toggle="tab" onclick="tab(this.id)">Area</a>
								</li>

							</ul>
						</div>
					</div>

					<div className="card-body">
						<dt> Select Units To Convert: </dt>

						<div className="input-group mb-3">

							<div className="dropdown" >
								<button className="btn btn-secondary dropdown-toggle" type="button" id="unitsFrom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Units From</button>

								<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="unitsFromDD">
									<option className="dropdown-item" href="#">Select Units Type</option>	
								</div>
							</div>


							<div className="input-group-append">
								<input type="text" className="form-control" placeholder="Value from" aria-label="Recipient's username" aria-describedby="button-addon2" id="userInput" maxlength="12"></input>

							</div>


						</div>

						<div className="input-group mb-3">

							<div className="dropdown">
								<button className="btn btn-secondary dropdown-toggle" type="button" id="unitsTo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Units To</button>

								<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="unitsToDD">
									<option className="dropdown-item" href="#">Select Units Type</option>		
								</div>
							</div>

							<div className="input-group-append">

								<input type="text" className="form-control" placeholder="Result" aria-label="Recipient's username" aria-describedby="button-addon2" maxlength="11" id="userOutput" disabled ></input>	

							</div>	


						</div>

						<div className="input-group mb-3">
							
								<button className="btn btn-outline-success" type="button" id="button-addon2" onclick="formSubmit()">Convert</button>
								
							</div>
						</div>

					</div>

				



		);
}

export default Uconv;