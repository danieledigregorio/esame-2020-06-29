export const ADD_CATEGORY = "addCategory"
export const ADD_PURCHASE = "addPurchase"
export const REMOVE_PURCHASE = "removePurchase"


export function addCategory(name) {
    return {type: ADD_CATEGORY, name}
}
export function addPurchase(cat, name, cost, date) {
    return {type: ADD_PURCHASE, cat, name, cost, date}
}
export function removePurchase(key) {
    return {type: REMOVE_PURCHASE, key}
}