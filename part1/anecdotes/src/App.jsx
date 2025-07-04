import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const AnecdoteDisplay = (props) => {
  return (
    <div>
  {props.anecdotes[props.selected]}
</div>)}


const VoteDisplay = (props) => {
  return (
    <div>
  {props.votes[props.anecNumber]}
</div>)}




const App = () => {   
  const [selected, setSelected] = useState(0)
  const setNewSelected = (selectedValue) => {
  console.log('Previous Value ', selectedValue)
  setSelected(getRandomIntInclusive(0,anecdotes.length - 1))
  
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  }
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(() => new Uint8Array(anecdotes.length))

  const handleVote = (votes) => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteDisplay selected={selected} anecdotes={anecdotes}/>
      <VoteDisplay votes={votes} anecNumber={selected}/>
      <Button onClick={ () => handleVote(votes)} text='vote' /><Button onClick={ () => setNewSelected(selected)} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <AnecdoteDisplay selected={votes.indexOf(Math.max(...votes))} anecdotes={anecdotes}/>
      <VoteDisplay votes={votes} anecNumber={votes.indexOf(Math.max(...votes))}/>
    </div>
  )
}

export default App