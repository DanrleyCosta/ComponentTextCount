import React, {Component} from 'react';

////////////////////////////////////////////////////
// TEXT COMPONENT WITH LIMITER 
// Autor: Danrley Costa // Data: 17/01/2020
////////////////////////////////////////////////////

class textCout extends Component {
// if the limiter is not passed as a parameter it will be delimited fifteen
static defaultProps = {
    limit: 15
}

    constructor(props){
        super(props);
        // initial state 
        this.state = {
            totalChars: 0,
            text: ''
        }        
        this.handlerChange = this.handlerChange.bind(this); //Scope Definition
    }

    handlerChange(event){
        const element = event.target;
        const text = element.value;

        if(text.length<=this.props.limit)
        this.setState({
            totalChars: text.length,
            text: element.value
        });  
    }

    render() {
        const { state, props } = this;
        return (
            <div>
                 <h1>My Count</h1>
                 <textarea onChange={this.handlerChange} value={this.state.text} /> 
                 <div>
                     <strong>Total:</strong> {state.totalChars} / {props.limit}
                 </div>
            </div>
        );
    }
}

export default textCout;
