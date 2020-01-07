import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'


//Components
import { HabbitComponent } from './views/HabbitView/HabbitComponent'
import {AddHabbitComponent} from "./views/AddHabbitView/AddHabbitComponent";
import {NavBar} from "./components/NavBar/NavBar";
import { LoginComponent } from './views/login/LoginComponent'
import { AllHabbitComponent } from './views/AllHabbitView/AllHabbitComponent'
import { AllHabbitAsyncComponent } from './views/AllHabbitView/AllHabbitAsyncComponent'

// Functions
// import { testFunction} from "./redux/actions/testAction";
import { handleHabbitCheckin, handleAddHabbitView, makeRabbitUnhappy } from "./views/HabbitView/HabbitViewActions";
import {handleTypeHabbit, handleAddHabbit, handleHabbitView } from "./views/AddHabbitView/AddHabbitActions";
import { handleAllHabbitView, getHabbitsFromApi } from './views/AllHabbitView/AllHabbitActions'




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
    } else if (props.appView === 'LoginView') {
        return (

            < LoginComponent {...props} />

        )
    } else if (props.appView === 'AllHabbitView') {
        return (

            < AllHabbitComponent {...props} />

        )
    } else if (props.appView === 'AllHabbitsAsync') {
        return (
            <AllHabbitAsyncComponent {...props} />
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
       habbitArray: state.habbitArray,
       habbitToDisplayIndex: state.habbitToDisplayIndex,
       
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleHabbitCheckin: (habbitId) => dispatch(handleHabbitCheckin(habbitId)),
        handleTypeHabbit: (habbitValue) => dispatch(handleTypeHabbit(habbitValue)),
        handleAddHabbit: (habbitToAdd, habbitArrayLength) => dispatch(handleAddHabbit(habbitToAdd, habbitArrayLength)),
        handleAddHabbitView: () => dispatch(handleAddHabbitView()),
        handleHabbitView: (habbitId) => dispatch(handleHabbitView(habbitId)),
        handleAllHabbitView: () => dispatch(handleAllHabbitView()),
        makeRabbitUnhappy: (habbitId) => dispatch(makeRabbitUnhappy(habbitId)),
        getHabbitsFromApi: () => dispatch(getHabbitsFromApi())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);




