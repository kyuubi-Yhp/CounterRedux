// шаг 1 пишем логику 
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_OBNAL
} from './constants'
// иницилизация переменной 
const initialCounter = {
  value: 0
}
// пишем правила по которым будет изменятся стейт 
export function counterReducer(state = initialCounter, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state, value: state.value + 1
      }
    case COUNTER_DECREMENT:
      return {
        ...state, value: state.value - 1
      }
      case COUNTER_OBNAL:
        return {
          ...state, value: 0
        }
    default:
      return state
  }
}