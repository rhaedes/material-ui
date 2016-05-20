import React, {Component, PropTypes} from 'react';
import Title from 'react-title-component';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui';
import { ScGlobalHeader, ScMainContainer, ScGlobalLogo, ScAccountInformation, ScApplicationHeader } from '../sitecore/layouts';


class Master extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  state = {};

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(),
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  }
  
  onActive(tab) {
    const value = tab.props.value;

    this.context.router.push(value);
  }
  
  render() {
    let {
      children,
      location: {
        pathname
      },
      ...other
    } = this.props;
    
    const tabArray = [
      'Overview',
      'Channels',
      'Landing pages',
      'Ref Urls',
      'Search',
      'Outcomes',
      'Campaigns'
    ]
    
    const tabs = tabArray.map((name, index) => {
      const value = '/' + name.toLowerCase().replace(/ /g,'');
      
      return (
        <Tab label={name} key={index} value={value} onActive={this.onActive.bind(this)} />
      );
    });
        
    return (
      <div>
        <Title render="Sitecore-UI" />
         <ScGlobalHeader>
                <ScGlobalLogo></ScGlobalLogo>
                <ScAccountInformation username="Administrator"></ScAccountInformation>
            </ScGlobalHeader>
        <ScMainContainer noMenu={true}>
          <ScApplicationHeader title="Experience Generator"></ScApplicationHeader>
          <div style={{padding:'30px 15px'}}>
            <Tabs value={pathname}>
              {tabs}
            </Tabs>
            <div>
              {children}
            </div>
          </div>
        </ScMainContainer>
      </div>
    );
  }
}

export default Master;
