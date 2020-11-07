import * as Action from './actions'
import initialState from '../store/inistialState'

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Action.SIGN_IN:
      return {
        ...state,
        ...action.pyload
      }
  }
}