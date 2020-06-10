//add

export const ADD = 'ADD'

export const add = item => {

    return {type: ADD, payload: item}

}

//remove

export const REMOVE = 'REMOVE'

export const remove = item => {

    return {type: REMOVE, payload: item}

}