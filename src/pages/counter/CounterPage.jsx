// шаг 3 прокидываем мосты и подключаем UI
// UI
import { CounterWidget } from "../../components/CounterWidget/CounterWidget"
// хуки
import { useDispatch, useSelector } from "react-redux"
// события вынесены в отдельный файл action
import {increment, decrement, obnal  } from './actions'

function CounterPage() {
// кидаем мост в store что бы подцепить наше состояние счетчика 
const counter = useSelector(state => state.value)
// хукаем dispatch
const dispatch = useDispatch()
// прокидываем мост в файл action подключаем к логике reducre
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
