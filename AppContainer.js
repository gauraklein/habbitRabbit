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
   return {
       test: state.test
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        testFunction: () => dispatch(testFunction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);




