import React, { Component } from 'react';
import InputGroup from'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class UnitCon extends Component {
	 
	 stab = () => {
	 	console.log("tab")
	 };

    render() {

        return (
            <div className="container">
				<div className="card">

					<div className="card text-center">

						<div className="card-header">
							<h2>Units Converter</h2>
								<dt> Select Units Type: </dt>
							<ul className="nav nav-pills" id="unitsTab">
								
								<li className="nav-item" id="massNav" >
									<button className="nav-link" id="mass" onClick={this.tab}>Mass</button>
								</li>
								<li className="nav-item">
									<button className="nav-link" id="length" data-toggle="tab" onClick={this.tab}>Length</button>
								</li>
								<li className="nav-item">
									<button className="nav-link" href="#" id="density" data-toggle="tab"onClick={this.tab}>Density</button>
								</li>
								<li className="nav-item">
									<button className="nav-link" href="#" id="flow" data-toggle="tab" onClick={this.tab}>Flow</button>
								</li>
								<li className="nav-item">
									<button className="nav-link" href="#" id="pressure" data-toggle="tab" onClick={this.tab}>Pressure</button>
								</li>

								<li className="nav-item">
									<button className="nav-link" href="#" id="torque" data-toggle="tab" onClick={this.tab}>Torque</button>
								</li>

								<li className="nav-item">
									<button className="nav-link" href="#" id="area" data-toggle="tab" onClick={this.tab}>Area</button>
								</li>

							</ul>
						</div>
					</div>

					<div className="card-body">
						<dt> Select Units To Convert: </dt>
						<InputGroup className="mb-3">
							<DropdownButton
          						variant="outline-secondary"
          						title="Units From"
        						id="unitsTo"
    						>
    						</DropdownButton>						
    							<Form.Control
      								aria-label="Example text with button addon"
      								aria-describedby="basic-addon1"
      								placeholder="Result"
      								id="userOutput" 
      								disabled 
    							/>

    					</InputGroup>
    					<InputGroup className="mb-3">		
    						<DropdownButton
          						variant="outline-secondary"
          						title="Units To"
          						id="input-group-dropdown-1"
          						
        						// id="units"
    						>
    						</DropdownButton>		
								<Form.Control
      								aria-label="Example text with button addon"
      								aria-describedby="basic-addon1"
      								placeholder="Result"
      								
      								id="userOutput" 
      								disabled 
    							/>
							
						</InputGroup>


							<div className="input-group mb-3">
								
									<button className="btn btn-outline-success" type="button" id="button-addon2" onClick={this.formSubmit}>Convert</button>
									
							</div>
				</div>
			</div>
		</div>




        )


    }
}
export default UnitCon

