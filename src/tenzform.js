import React, {Component} from 'react';
import './styles/tenzform.css';

class TenzForm extends Component {
    constructor() {
        super();
        this.state = {
            legalCorpName: '',
            dba: '',
            physicalAdress: '',
            city: '',
            state: '',
            zipCode: ''
        }
    }

    handleInputStateChange(e){
        console.log('input typed: ' + e.target.value);
    }

    render() {
        return(
            <div className='tenz-form-body'>
                <div className='tenz-form-container-1'>
                    <div className='tenz-form-rectangle-1'>
                        <div className='tenz-form-rec-1-box-1'>email and fax</div>
                        <div className='tenz-form-rec-1-box-1'>logo</div>
                    </div>
                </div>
                <div className='tenz-form-container-2'>
                    <form>
                        <div className='tenz-form-rectangle-2'>
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
                        <div className='tenz-form-rectangle-3'>      
                        </div>
                        <div className='tenz-form-rectangle-4'> 
                        </div>
                        <div className='tenz-form-rectangle-5'>
                        </div>
                        <div className='tenz-form-rectangle-6'>
                            signature
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TenzForm;
