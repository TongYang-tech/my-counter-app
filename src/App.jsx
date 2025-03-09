import { useReducer } from 'react'
import counterReducer from './Hooks/reducer'
import './App.css'

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0, step: 1 })

  const increment = () => dispatch({ type: 'INCREMENT' })
  const decrement = () => dispatch({ type: 'DECREMENT' })

  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_STEP',
      payload: parseInt(event.target.value)
    })
  }

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <section className="counter">
          <p className="leading">{state.count}</p>
          <div className="actions">
            <button
              type="button"
              className="btn btn-circle"
              onClick={decrement}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-circle"
              onClick={increment}
            >
              +
            </button>
          </div>
        </section>

        <section className="counter-step">
          <label htmlFor="step">Step</label>
          <input
            id="step"
            type="range"
            min="1"
            max="10"
            value={state.step}
            onChange={handleChange}
          />
          <label>{state.step}</label>
        </section>
      </main>
    </>
  )
}

export default App
