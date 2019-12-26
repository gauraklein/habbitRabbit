import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'


//Components
import { HabbitComponent } from './views/HabbitView/HabbitComponent'
import {AddHabbitComponent} from "./views/AddHabbitView/AddHabbitComponent";

// Functions
// import { testFunction} from "./redux/actions/testAction";
import { handleHabbitCheckin } from "./views/HabbitView/HabbitViewActions";
import {handleAddHabbit} from "./views/AddHabbitView/AddHabbitActions";



const AppContainer = (props) => {
    // console.log(this.state);
    return (
            < AddHabbitComponent {...props}/>
            // < HabbitComponent {...props}/>

    )
};

const mapStateToProps = (state) => {
    console.log(state, 'this is the state from appContainer')
   return {
       habbit: state.habbit,
       habbitDailyCount: state.habbitDailyCount,
       habbitInput: state.habbitInput
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleHabbitCheckin: () => dispatch(handleHabbitCheckin()),
        handleAddHabbit: () => dispatch(handleAddHabbit(habbitValue))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);




