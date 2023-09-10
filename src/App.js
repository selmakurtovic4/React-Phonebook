import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setNewFilter] =useState('')
  const [filteredPersons, setNewFilteredPersons]=useState(persons)
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const addPerson = (event) => {
    console.log(newName)
    event.preventDefault();
    const foundPerson=persons.find(person=> JSON.stringify(person.name)===JSON.stringify(newName) );
    if(foundPerson)
     window.alert(`${newName} is already added to phonebook`);
    else{
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewFilteredPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange =(event) => {
    const newFilterValue = event.target.value;
    setNewFilter(newFilterValue);
    let newArray=persons.filter(person=> person.name.toUpperCase().startsWith(newFilterValue.toUpperCase()))
    setNewFilteredPersons(newArray);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
      <h2>Add a new</h2>
      <PersonsForm  handleNameChange={handleNameChange} newName={newName} addPerson={addPerson} newNumber={newNumber} handleNumberChange={handleNumberChange} ></PersonsForm>
      <h2>Numbers</h2>
      <ul>
      {filteredPersons.map(person => 
          <Person key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )
}

export default App