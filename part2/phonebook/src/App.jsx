import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([]) 

    useEffect(() => {
    console.log('effect')
    personService
      .getAll()
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
      alert(personObject.name + ' is already added to phonebook, replace the old number with a new one?')
      const existingPerson = persons.find(p => p.name === personObject.name)
      console.log(existingPerson)
      console.log(personObject)
      personService
      .update(existingPerson.id,personObject)
      .then(response => {const updatedPersons = persons.map(person => 
          person.id === existingPerson.id ? response.data : person
        );
      setPersons(updatedPersons)
      setNewName('')
      setNewNumber('') 
      })
      setNewName('')
      setNewNumber('')
    } else {
    personService
    .create(personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
    setNewName('')
    setNewNumber('') })}
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = (subString === "")    ? persons    : persons.filter(person => person.name.toLowerCase().includes(subString.toLocaleLowerCase()))

  const handleRemove = personToDelete => {
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .remove(personToDelete.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== personToDelete.id));
        })
        .catch(error => {
          console.error('Error deleting person:', error);
        });
    }
  };

  console.log(persons);
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter subString={subString} handleFilterChange={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleRemove={handleRemove}/>
    </div>
  )
}

export default App