import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToGood = (goodValue) => {
  console.log('Good Value ', goodValue)
  setGood(goodValue + 1)
  }

  const setToNeutral = (neutralValue) => {
  console.log('Neutral Value ', neutralValue)
  setNeutral(neutralValue + 1)
  }

  const setToBad = (badValue) => {
  console.log('Bad Value ', badValue)
  setBad(badValue + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={ () => setToGood(good)} text='Good' ></Button>  <Button onClick={ () => setToNeutral(neutral)} text='Neutral' ></Button><Button onClick={ () => setToBad(bad)} text='Bad' ></Button>
      <h1>Statistics</h1>
      <Display value={`Good: ${good}`}></Display>
      <Display value={`Neutral: ${neutral}`}></Display>
      <Display value={`Bad: ${bad}`}></Display>

    </div>
  )
}

export default App

