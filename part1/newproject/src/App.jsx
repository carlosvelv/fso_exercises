const Header = (courseName) => {
  console.log(courseName)
  return (
    <div>
      <h1>{courseName.name}</h1>
    </div>
  )
}

const Content = (details) => {
  console.log(details)
  return (
    <div>
        <p>{details.parts[0].name} {details.parts[0].exercises}</p>

        <p>{details.parts[1].name} {details.parts[1].exercises}</p>

        <p>{details.parts[2].name} {details.parts[2].exercises}</p>

    </div>
  )
}

const Total = (totalexercises) => {
  console.log(totalexercises)
  return (
    <div>
      <p>
        {totalexercises.parts[0].exercises + totalexercises.parts[1].exercises  + totalexercises.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App