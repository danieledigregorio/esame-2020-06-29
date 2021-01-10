import {ADD_CATEGORY, ADD_PURCHASE, REMOVE_PURCHASE} from "./Actions";
import moment from 'moment'

const shortid = require('shortid')

export const initialState = {
    categories: [
        {name: "Viaggi", key:shortid.generate()},
        {name: "Servizi", key:shortid.generate()},
        {name: "Divertimento", key:shortid.generate()},
    ],
    purchases: [
        {key:shortid.generate(), cat: "Viaggi", date: moment("20-01-2021", "DD-MM-YYYY"), desc: "Hotel", cost: 40.0},
        {key:shortid.generate(), cat: "Viaggi", date: moment("21-01-2021", "DD-MM-YYYY"), desc: "Biglietto museo", cost: 8.5},
        {key:shortid.generate(), cat: "Servizi", date: moment("22-01-2021", "DD-MM-YYYY"), desc: "Pulizie", cost: 18.0},
    ],
}

export function reducer(state, action){
    switch(action.type) {
        case ADD_CATEGORY:
            return{
                ...state,
                categories: [...state.categories, {name:action.name, key:shortid.generate()}]
            }
        case ADD_PURCHASE:

            let arr = [...state.purchases,
                {key:shortid.generate(), cat:action.cat, date:action.date, desc:action.name, cost:action.cost}]
            arr.sort(function(a,b) {
                return a.date.format("x") - b.date.format("x")
            })

            return{
                ...state,
                purchases: arr,
            }
        case REMOVE_PURCHASE:
            return {
                ...state,
                purchases: state.purchases.filter(f => f.key!==action.key),
            }
        default:
            return state;
    }

}