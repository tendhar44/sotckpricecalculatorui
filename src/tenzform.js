import React, {Component} from 'react';
import './styles/tenzform.css';

class TenzForm extends Component {
    constructor() {
        super();
        this.state = {
            legalCorpName: null,
            dba: null,
            physicalAdress: null,
            city: null,
            state: null,
            zipCode: null,
            landLordLeasingAgent: null,
            landLordPhone: null,

            ownerName: null,
            homePhone: null,
            cellPhone: null
        }
    }

    handleInputStateChange(e){
        console.log('input typed for ' + e.target.placeholder + ': ' + e.target.value);
    }

    render() {
        return(
            <div className='tenz-form-body'>
                <div className='tenz-form-container-1'>
                    <div className='tenz-form-rectangle-1'>
                        <div className='tenz-form-rec-1-box-1'>
                            <div className='tenz-form-rec-1-box-1-email'>Email: <span className='tenz-from-text-1'>ex@gmail.com</span></div>
                            <div className='tenz-form-rec-1-box-1-fax'>Fax To: <span className='tenz-from-text-1'>1-877-208-5785</span></div>
                        </div>
                        <div className='tenz-form-rec-1-box-2'>logo</div>
                    </div>
                </div>
                <div className='tenz-form-container-2'>
                    <form>
                        <div className='tenz-form-rectangle-2'>
                            <div className='tenz-form-rec-label'>
                                A. MERCHANT INFORMATION
                            </div>
                            <div className='tenz-form-rec-2-line-1'>
                                <input 
                                    value={this.state.legalCorpName} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-legal-corp-name-input-id'
                                    type='text' placeholder='Legal/Corporate Name'
                                    onChange={this.handleInputStateChange}
                                />    
                                <input 
                                    value={this.state.dba} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-dba-input-id'
                                    type='text' placeholder='DBA'
                                    onChange={this.handleInputStateChange}
                                />
                            </div>
                            <div className='tenz-form-rec-2-line-2'>
                                <input 
                                    value={this.state.physicalAdress} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-physical-address-input-id'
                                    type='text' placeholder='Physical Address'
                                    onChange={this.handleInputStateChange}
                                />
                                <input 
                                    value={this.state.city} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-city-input-id'
                                    type='text' placeholder='City'
                                    onChange={this.handleInputStateChange}
                                />
                                <input 
                                    value={this.state.state} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-state-input-id'
                                    type='text' placeholder='State'
                                    onChange={this.handleInputStateChange}
                                />
                                <input 
                                    value={this.state.zipCode} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-zip-code-input-id'
                                    type='text' placeholder='Zip Code'
                                    onChange={this.handleInputStateChange}
                                />
                            </div>
                            <div className='tenz-form-rec-2-line-3'>
                                <input 
                                    value={this.state.landLordLeasingAgent} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-lord-leasing-agent-input-id'
                                    type='text' placeholder='Landlord/Leasing Agent'
                                    onChange={this.handleInputStateChange}
                                />
                                <input 
                                    value={this.state.landLordPhone} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-landlord-phone-input-id'
                                    type='text' placeholder='Landlord Phone'
                                    onChange={this.handleInputStateChange}
                                />
                            </div>
                        </div>
                        <div className='tenz-form-rectangle-3'>
                            <div className='tenz-form-rec-label'>
                                B. OWNERSHIP
                            </div>
                            <div className='tenz-form-rec-3-line-1'>
                                <input 
                                    value={this.state.ownerName} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-owner-name-input-id'
                                    type='text' placeholder='Name'
                                    onChange={this.handleInputStateChange}
                                />
                                <input 
                                    value={this.state.homePhone} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-home-phone-input-id'
                                    type='text' placeholder='Home Phone'
                                    onChange={this.handleInputStateChange}
                                />
                                <input 
                                    value={this.state.cellPhone} 
                                    className='tenz-form-all-inputs'
                                    id='tenz-form-cell-phone-input-id'
                                    type='text' placeholder='Cell Phone'
                                    onChange={this.handleInputStateChange}
                                />
                            </div>   
                        </div>
                        <div className='tenz-form-rectangle-4'> 
                        </div>
                        <div className='tenz-form-rectangle-5'>
                        </div>
                        <div className='tenz-form-rectangle-6'>
                            signature
                        </div>
                        <div className='tenz-form-submit-button-div'>
                            <input className='tenz-form-submit-button' type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TenzForm;
