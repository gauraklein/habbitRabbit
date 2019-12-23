import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HabbitComponent } from './views/HabbitView/HabbitComponent'
import {connect} from 'react-redux'

import { testFunction} from "./redux/actions/testAction";




const AppContainer = (props) => {
    // console.log(this.state);
    return (

            < HabbitComponent {...props}/>

    )
};

const mapStateToProps = (state) => {
    console.log(state, 'this is the state from appContainer')
   return {
       test: state.test,
       habbit: state.habbit,
       habbitDailyCount: state.habbitDailyCount
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        testFunction: () => dispatch(testFunction()),
        handleHabbitCheckin: () => dispatch(handleHabbitCheckin())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);




