import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HabbitComponent } from './views/HabbitView/HabbitComponent'
import {connect} from 'react-redux'

import {Provider} from "react-redux";


const AppContainer = (props) => {
    console.log(this.state);
    return (

            < HabbitComponent />

    )
};

const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);




