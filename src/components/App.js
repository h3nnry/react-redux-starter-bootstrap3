import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './PageLayout/Header';
import LeftMenu from './PageLayout/LeftMenu';
import MainContent from './PageLayout/MainContent';
import Footer from './PageLayout/Footer';
import * as headerActions from '../actions/headerActions';
import {EXPANDED_LEFT_MENU, COLLAPSED_LEFT_MENU} from '../constants/actionTypes';
import { fullscreen, fullscreenChangeAddListener, fullscreenChangeRemoveListener } from '../utils/fullscreen';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      expanded: true,
      fullscreen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleFullScreen =this.handleFullScreen.bind(this);
    this.expandeHandler = this.expandeHandler.bind(this);
  }

  componentDidMount() {
    fullscreenChangeAddListener(this.expandeHandler);
  }

  componentWillUnmount() {
    fullscreenChangeRemoveListener(this.expandeHandler);
  }

  toggleMenu(event) {
    event.preventDefault();
    // this.props.actions.toggleMenu(newClass);
    this.setState({
        expanded: !this.state.expanded
    });
  }

  handleFullScreen() {

    fullscreen(this.refs.mainContent);

  }

  expandeHandler() {
    this.setState({
      fullscreen: !this.state.fullscreen
    });
  }

  render() {
    const { expanded, fullscreen } = this.props;
    let search = !this.state.expanded ? '': <div className="main-menu-header">
        <input type="text" placeholder="Search" className="menu-search form-control round"/>
      </div>;
    return (
      <div className={"vertical-layout vertical-menu 2-columns fixed-navbar menu-" +
      (this.state.expanded ? EXPANDED_LEFT_MENU : COLLAPSED_LEFT_MENU) + " pace-done"} ref="mainContent">
        <Header toggleMenu={ this.toggleMenu } expanded={ expanded }
                handleFullScreen = { this.handleFullScreen } fullscreen={ fullscreen }/>
        <LeftMenu search={ search }/>
        <MainContent childProps={ this.props.children }/>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    header: state.header
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
