import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'




const App = () => {
  const [persons, setPersons] = useState([]) 

    useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [subString, setSubstring] = useState('')

  const handleFilter = (event) => {
    setSubstring(event.target.value)
  }
  
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
      setNewNumber('')[
    { name: 'Arto Hellas' , number: '788-23123-213'}
  ]
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

  const personsToShow = (subString === "")    ? persons    : persons.filter(person => person.name.toLowerCase().includes(subString.toLocaleLowerCase()))



  console.log(persons);
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter subString={subString} handleFilterChange={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App