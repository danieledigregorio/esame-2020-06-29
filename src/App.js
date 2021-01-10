import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {createContext, useReducer} from 'react';
import {reducer, initialState} from "./Reducer";
import Router from "./Router";

export const StateContext = createContext()

function App() {



  return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        <Router />
      </StateContext.Provider>
  );
}

export default App;
