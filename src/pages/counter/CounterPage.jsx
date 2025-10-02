import { CounterWidget } from "../../components/CounterWidget/CounterWidget"
import { useDispatch, useSelector } from "react-redux"
import {increment, decrement, obnal  } from './actions'
import { getCounter } from "./selectors"

function CounterPage() {
const counter = useSelector(getCounter)
const dispatch = useDispatch()

  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())
  const handleObnal = () => dispatch(obnal())

  return (
    <>
      <CounterWidget 
      counter={counter}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onObnal={handleObnal}
      /> 
    </>
  )
}

export default CounterPage
