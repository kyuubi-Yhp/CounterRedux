import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_OBNAL
} from './constants'

export const increment = () => ({ type: COUNTER_INCREMENT })
export const decrement = () => ({ type: COUNTER_DECREMENT })
export const obnal = () => ({ type: COUNTER_OBNAL })