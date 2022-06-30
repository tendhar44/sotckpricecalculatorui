import React from 'react';
import FormTest from './formtest';
import './styles/footnote.css';

// let currPersonId;
//let nameText = "";

class FootNote extends React.Component {

    constructor() {
        super();
        this.state = {
            person: [
                {
                    name: "tenzin",
                    id: 1
                },
                {
                    name: "sam",
                    id: 2
                },
                {
                    name: "mary",
                    id: 3
                }
            ],
            nameText: ''
        }

        console.log("inside cons: " + this.state.person.length)

        this.handleAddName = this.handleAddName.bind(this);
        this.loopPersonArr = this.loopPersonArr.bind(this);
        this.displayState = this.displayState.bind(this);
    }
      
    handleAddName(name){
        let currPersonId = this.state.person.length;
        this.setState( prevState => {
            return {
                person: [
                    ...prevState.person,
                    {
                        name: name,
                        id: currPersonId += 1
                    }
                ],
                nameText: ''
            }
        })
        //person.push = {name: name, id:currPersonId += 1};
    }

    displayState() {
        return(
            <div>
                <b className='foot-names'>{this.nameText}</b>
            </div>
        )
    }
      
    loopPersonArr(item, element) {
        this.state.nameText += element + ":" + item.name + " ";
    }
      
      //edit person information
      // handleEditName = (index, name) => {
      //   person[index].name = name;
      // }

    getAllStateData() {
        this.state.person.forEach(this.loopPersonArr);
        return(
            <div>
                <b className='foot-names'>{this.state.nameText}</b>
            </div>
        )
    }

    render() {
        return (
            <div className='spc-footnote-body'>
                <FormTest addName={this.handleAddName} />
                {this.getAllStateData()}
            </div>
        );
    }
}

export default FootNote;
