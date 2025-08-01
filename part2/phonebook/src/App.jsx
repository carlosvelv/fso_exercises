import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

    const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName    }
    // console.log(persons);
    // console.log(personObject)
    const personArray = persons.map(a => a.name)
    if (personArray.includes(personObject.name)) {
      alert(personObject.name + ' is already added to phonebook')
      setNewName('')
    } else {
    setPersons(persons.concat(personObject))
    setNewName('') }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          
          
          <button type="submit">add</button>
          
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person,i) => <li key={i}>{person.name}</li> 
        )}
      </ul>
    </div>
  )
}

export default App