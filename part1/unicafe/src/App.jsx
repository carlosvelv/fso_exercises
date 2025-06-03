import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  console.log(props)
    if (props.text === "Positive"){
      return(

    <div>{props.text} : {props.value} % </div>
      )

    };
    return (
    <div>{props.text} : {props.value}</div>)
}

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
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="Total" value={totalValue} />
      <StatisticLine text="Average" value={averageValue} />
      <StatisticLine text="Positive" value={positivePerc} />
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

