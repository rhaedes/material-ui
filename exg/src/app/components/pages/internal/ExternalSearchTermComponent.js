import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { addExternalSearchTerm, delExternalSearchTerm, updateExternalSearchTerm } from '../../../../actions/Search_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash.debounce';

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
    }
    onDeleteHandler(value) {
        this.props.onDelete(this.props.externalSearchTerm.term);
    }
    
    handleSlider(e, value) {
                this.props.onUpdateExternalSearchTerm(this.props.externalSearchTerm.term, value);
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
        const { externalSearchTerms, onDelete, onUpdateExternalSearchTerm } = this.props;
        const cardContentStyle = {
          minHeight: '30px',
          padding: '15px'
        };
        
        return (<Card >
                    <CardHeader title="Ref URL" actAsExpander={false} showExpandableButton={false}/>
                    <div style={cardContentStyle}>
                        {externalSearchTerms.map((externalSearchTerm, index)=>{
                            return (<ExternalSearchTermItemListComponent 
                            key={index} 
                            onDelete={onDelete} 
                            externalSearchTerm={externalSearchTerm}
                            onUpdateExternalSearchTerm= {onUpdateExternalSearchTerm}
                            ></ExternalSearchTermItemListComponent>)
                        })}  
                    </div>          
                </Card>);
    }
}

class ExternalSearchTermComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            externalSearchTerms: [] 
        };
    }
    
    onDeleteHandler(value) {
        
        let filteredExternalSearchTerms = this.state.externalSearchTerms.filter((externalSearchTerm)=>{
            return externalSearchTerm.term !== value.term;
        })
        
        this.setState({
            externalSearchTerms: filteredExternalSearchTerms
        });
        this.props.delExternalSearchTerm(value);
    }
    
    onAddHandler(value) {
        this.setState({externalSearchTerms: this.state.externalSearchTerms.concat([{ term: value, value: 0.5 }])}); //concat to re-render the Component.
        this.props.addExternalSearchTerm(value);
    }
    
    render() {
         const spacingStyle = { marginTop:'15px' };
         
        return (<div>
            <div style={spacingStyle}>
                <AddExternalSearchTermComponent onAdd={this.onAddHandler.bind(this)}></AddExternalSearchTermComponent>
            </div>
            <div style={spacingStyle}>
                 <ExternalSearchTermListComponent onUpdateExternalSearchTerm={debounce(this.props.updateExternalSearchTerm, 200) } onDelete={this.onDeleteHandler.bind(this) } externalSearchTerms={this.props.search.externalSearchTerms}></ExternalSearchTermListComponent>
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addExternalSearchTerm, delExternalSearchTerm, updateExternalSearchTerm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExternalSearchTermComponent); 

