import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '788-23123-213'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
    const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber  }
    // console.log(persons);
    // console.log(personObject)
    const personArray = persons.map(a => a.name)
    if (personArray.includes(personObject.name)) {
      alert(personObject.name + ' is already added to phonebook')
      setNewName('')
      setNewNumber('')
    } else {
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('') }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
          
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person,i) => <li key={i}>{person.name} {person.number}</li> 
        )}
      </ul>
    </div>
  )
}

export default App