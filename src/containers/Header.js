// import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// // import * as actions from '../actions/fuelSavingsActions';
// import Header from '../components/PageLayout/Header';
//
// export const Header = (props) => {
//   return (
//     <FuelSavingsForm
//       saveFuelSavings={props.actions.saveFuelSavings}
//       calculateFuelSavings={props.actions.calculateFuelSavings}
//       fuelSavings={props.fuelSavings}
//     />
//   );
// };
//
// Header.propTypes = {
//   actions: PropTypes.object.isRequired,
//   toggleMenu: PropTypes.object.isRequired
// };
//
// function mapStateToProps(state) {
//   return {
//     fuelSavings: state.fuelSavings
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FuelSavingsPage);
