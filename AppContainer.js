import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'


//Components
import { HabbitComponent } from './views/HabbitView/HabbitComponent'
import {AddHabbitComponent} from "./views/AddHabbitView/AddHabbitComponent";

// Functions
// import { testFunction} from "./redux/actions/testAction";
import { handleHabbitCheckin, handleAddHabbitView } from "./views/HabbitView/HabbitViewActions";
import {handleTypeHabbit, handleAddHabbit} from "./views/AddHabbitView/AddHabbitActions";




const AppContainer = (props) => {
    // console.log(this.state);
    if (props.appView === 'AddHabbitView') {

        return (
            < AddHabbitComponent {...props}/>
        )
    } else if (props.appView === 'HabbitView') {

        return (
            < HabbitComponent {...props}/>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state, 'this is the state from appContainer');
   return {
       habbit: state.habbit,
       habbitDailyCount: state.habbitDailyCount,
       habbitInput: state.habbitInput,
       habbitToAdd: state.habbitToAdd,
       appView: state.appView
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleHabbitCheckin: () => dispatch(handleHabbitCheckin()),
        handleTypeHabbit: (habbitValue) => dispatch(handleTypeHabbit(habbitValue)),
        handleAddHabbit: () => dispatch(handleAddHabbit()),
        handleAddHabbitView: () => dispatch(handleAddHabbitView())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);




