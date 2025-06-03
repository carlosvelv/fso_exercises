import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {

  let totalValue = props.good+props.neutral+props.bad
  let averageValue = ((props.good*1) + (props.neutral*0) + (props.bad*-1)) / totalValue
  let positivePerc = (props.good * 100) / totalValue
  if (totalValue === 0){
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
  <h1>Statistics</h1>
      <Display value={`Good: ${props.good}`}></Display>
      <Display value={`Neutral: ${props.neutral}`}></Display>
      <Display value={`Bad: ${props.bad}`}></Display>
      <Display value={`Total: ${totalValue}`}></Display>
      <Display value={`Average: ${averageValue = averageValue || 0}`}></Display>
      <Display value={`Positive: ${positivePerc = positivePerc || 0} %`}></Display>
</div>)}

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
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App

