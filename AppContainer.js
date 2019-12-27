import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'


//Components
import { HabbitComponent } from './views/HabbitView/HabbitComponent'
import {AddHabbitComponent} from "./views/AddHabbitView/AddHabbitComponent";
import {NavBar} from "./components/NavBar/NavBar";

// Functions
// import { testFunction} from "./redux/actions/testAction";
import { handleHabbitCheckin, handleAddHabbitView } from "./views/HabbitView/HabbitViewActions";
import {handleTypeHabbit, handleAddHabbit, handleHabbitView } from "./views/AddHabbitView/AddHabbitActions";




const AppContainer = (props) => {
    // console.log(this.state);
    if (props.appView === 'AddHabbitView') {

        return (

                < AddHabbitComponent {...props} />

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
       appView: state.appView,
       habbitArray: state.habbitArray
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleHabbitCheckin: (habbitId) => dispatch(handleHabbitCheckin(habbitId)),
        handleTypeHabbit: (habbitValue) => dispatch(handleTypeHabbit(habbitValue)),
        handleAddHabbit: (habbitToAdd, habbitArrayLength) => dispatch(handleAddHabbit(habbitToAdd, habbitArrayLength)),
        handleAddHabbitView: () => dispatch(handleAddHabbitView()),
        handleHabbitView: () => dispatch(handleHabbitView())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);




