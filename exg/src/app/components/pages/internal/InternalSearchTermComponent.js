import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class AddInternalSearchTermComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputValue: ''
        };
    }
    addHandler() {
        const { onAdd } = this.props;
        
        if(this.state.inputValue) {
            onAdd(this.state.inputValue);
        }
        
        this.setState({
            inputValue: ''
        });
    }
    onInputValueChangeHandler(e, value) {
        this.setState({
            inputValue: value
        });
    }
    render () {
        return  (<Card>
                    <CardHeader title="Add Internal Search Term" actAsExpander={false} showExpandableButton={false}/>
                    <div style={{
                        padding:'15px'
                    }} className="row">
                        <div className="col s8">
                            <TextField name="InternalSearchTerm" fullWidth={true} onChange={this.onInputValueChangeHandler.bind(this)} value={this.state.inputValue}></TextField>
                        </div>
                        <div className="col s4">
                            <RaisedButton style={{marginTop:'15px'}} onClick={this.addHandler.bind(this)} label="Add Search Term"></RaisedButton>
                        </div>
                    </div>
                </Card>);
    } 
}

class InternalSearchTermItemListComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            sliderValue: 0.5
        }
    }
    onDeleteHandler(value) {
        const {onDelete} = this.props;
        
        onDelete(value);
    }
    
    handleSlider(e, value) {
        this.setState({sliderValue: value});
    }
    render() {
        const {internalSearchTerm} = this.props;
        
        return (<div style={{ lineHeight: '66px', borderBottom: '1px solid #000'}} className="row">
            <div className="col s6">{internalSearchTerm.term}</div>
            <div className="col s4">
                <Slider
                    defaultValue={0.5}
                    style={{
                        marginBottom: '24px'
                    }}
                    value={internalSearchTerm.value} onChange={this.handleSlider.bind(this)}
                    />
            </div>
            <div style={{textAlign: 'right'}} className="col s2">
                <RaisedButton onClick={this.onDeleteHandler.bind(this, internalSearchTerm)} label="Delete"></RaisedButton>
            </div>
        </div>);
    }    
}

class InternalSearchTermListComponent extends Component {
    render() {
        const { internalSearchTerms, onDelete } = this.props;
        const cardContentStyle = {
          minHeight: '30px',
          padding: '15px'
        };
        
        return (<Card >
                    <CardHeader title="Ref URL" actAsExpander={false} showExpandableButton={false}/>
                    <div style={cardContentStyle}>
                        {internalSearchTerms.map((internalSearchTerm, index)=>{
                            return (<InternalSearchTermItemListComponent key={index} onDelete={onDelete} internalSearchTerm={internalSearchTerm}></InternalSearchTermItemListComponent>)
                        })}  
                    </div>          
                </Card>);
    }
}

export default class InternalSearchTermComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            internalSearchTerms: [] //move this in a redux store
        };
    }
    
    onDeleteHandler(value) {
        
        let filteredInternalSearchTerms = this.state.internalSearchTerms.filter((internalSearchTerm)=>{
            return internalSearchTerm.term !== value.term;
        })
        
        this.setState({
            internalSearchTerms: filteredInternalSearchTerms
        });
    }
    
    onAddHandler(value) {
        this.setState({internalSearchTerms: this.state.internalSearchTerms.concat([{ term: value, value: 0.5 }])}); //concat to re-render the Component.
    }
    
    render() {
         const spacingStyle = { marginTop:'15px' };
         
        return (<div>
            <div style={spacingStyle}>
                <AddInternalSearchTermComponent onAdd={this.onAddHandler.bind(this)}></AddInternalSearchTermComponent>
            </div>
            <div style={spacingStyle}>
                <InternalSearchTermListComponent onDelete={this.onDeleteHandler.bind(this)} internalSearchTerms={this.state.internalSearchTerms}></InternalSearchTermListComponent>
            </div>
        </div>)
    }
}