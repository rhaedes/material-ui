import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class AddExternalSearchTermComponent extends Component {
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
                    <CardHeader title="Add External Search Term" actAsExpander={false} showExpandableButton={false}/>
                    <div style={{
                        padding:'15px'
                    }} className="row">
                        <div className="col s8">
                            <TextField name="ExternalSearcTerm" fullWidth={true} onChange={this.onInputValueChangeHandler.bind(this)} value={this.state.inputValue}></TextField>
                        </div>
                        <div className="col s4">
                            <RaisedButton style={{marginTop:'15px'}} onClick={this.addHandler.bind(this)} label="Add External Term"></RaisedButton>
                        </div>
                    </div>
                </Card>);
    } 
}

class ExternalSearchTermItemListComponent extends Component {
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
        const {externalSearchTerm} = this.props;
        
        return (<div style={{ lineHeight: '66px', borderBottom: '1px solid #000'}} className="row">
            <div className="col s6">{externalSearchTerm.term}</div>
            <div className="col s4">
                <Slider
                    defaultValue={0.5}
                    style={{
                        marginBottom: '24px'
                    }}
                    value={externalSearchTerm.value} onChange={this.handleSlider.bind(this)}
                    />
            </div>
            <div style={{textAlign: 'right'}} className="col s2">
                <RaisedButton onClick={this.onDeleteHandler.bind(this, externalSearchTerm)} label="Delete"></RaisedButton>
            </div>
        </div>);
    }    
}

class ExternalSearchTermListComponent extends Component {
    render() {
        const { externalSearchTerms, onDelete } = this.props;
        const cardContentStyle = {
          minHeight: '30px',
          padding: '15px'
        };
        
        return (<Card >
                    <CardHeader title="Ref URL" actAsExpander={false} showExpandableButton={false}/>
                    <div style={cardContentStyle}>
                        {externalSearchTerms.map((externalSearchTerm, index)=>{
                            return (<ExternalSearchTermItemListComponent key={index} onDelete={onDelete} externalSearchTerm={externalSearchTerm}></ExternalSearchTermItemListComponent>)
                        })}  
                    </div>          
                </Card>);
    }
}

export default class ExternalSearchTermComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            externalSearchTerms: [] //move this in a redux store
        };
    }
    
    onDeleteHandler(value) {
        
        let filteredExternalSearchTerms = this.state.externalSearchTerms.filter((externalSearchTerm)=>{
            return externalSearchTerm.term !== value.term;
        })
        
        this.setState({
            externalSearchTerms: filteredExternalSearchTerms
        });
    }
    
    onAddHandler(value) {
        this.setState({externalSearchTerms: this.state.externalSearchTerms.concat([{ term: value, value: 0.5 }])}); //concat to re-render the Component.
    }
    
    render() {
         const spacingStyle = { marginTop:'15px' };
         
        return (<div>
            <div style={spacingStyle}>
                <AddExternalSearchTermComponent onAdd={this.onAddHandler.bind(this)}></AddExternalSearchTermComponent>
            </div>
            <div style={spacingStyle}>
                <ExternalSearchTermListComponent onDelete={this.onDeleteHandler.bind(this)} externalSearchTerms={this.state.externalSearchTerms}></ExternalSearchTermListComponent>
            </div>
        </div>)
    }
}