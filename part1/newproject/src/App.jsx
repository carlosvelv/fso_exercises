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
        <p>{details.part1} {details.exercises1}</p>

        <p>{details.part2} {details.exercises2}</p>

        <p>{details.part3} {details.exercises3}</p>

    </div>
  )
}

const Total = (totalexercises) => {
  console.log(totalexercises)
  return (
    <div>
      <p>
        {totalexercises.countPart1 + totalexercises.countPart2  + totalexercises.countPart3}
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
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total countPart1={parts[0].exercises} countPart2={parts[1].exercises} countPart3={parts[2].exercises}/>
    </div>
  )
}

export default App