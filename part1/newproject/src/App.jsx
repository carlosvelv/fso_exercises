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
      <p>
        <p>{details.part1} {details.exercises1}</p>

        <p>{details.part2} {details.exercises2}</p>

        <p>{details.part3} {details.exercises3}</p>

      </p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header name={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total countPart1={part1.exercises} countPart2={part2.exercises} countPart3={part3.exercises}/>
    </div>
  )
}

export default App