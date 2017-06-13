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

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      leftMenuClass: EXPANDED_LEFT_MENU
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();
    let newClass = (this.state.leftMenuClass == EXPANDED_LEFT_MENU) ? COLLAPSED_LEFT_MENU : EXPANDED_LEFT_MENU;
    this.props.actions.toggleMenu(newClass)
  }

  render() {
    // const {fuelSavings} = this.props;
    return (
      <div className={"vertical-layout vertical-menu 2-columns fixed-navbar menu-" + this.props.leftMenuClass + " pace-done"}>
        <Header toggleMenu={this.toggleMenu}/>
        <LeftMenu/>
        <MainContent childProps={this.props.children}/>
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
    leftMenuClass: state.leftMenuClass
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
