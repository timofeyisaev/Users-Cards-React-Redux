



export const cardsReducer = (state = [], action) => {
    if (action.type === 'CARD_ADD'){
        return [...state, action.payload]
    } else{
        return state
    }
}