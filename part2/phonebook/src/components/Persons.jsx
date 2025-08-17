
const Persons = ({personsToShow, handleRemove}) => {
  
  
  return (

      <ul>
        {personsToShow.map((person,i) => <li key={i}>{person.name} {person.number} <button onClick={() => handleRemove(person)}>Delete</button></li> 
        )}
      </ul>
  )

}

export default Persons