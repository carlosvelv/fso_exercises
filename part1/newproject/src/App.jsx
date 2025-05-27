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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total countPart1={exercises1} countPart2={exercises2} countPart3={exercises3}/>
    </div>
  )
}

export default App