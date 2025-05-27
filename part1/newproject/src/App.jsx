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
        {details.part} {details.exercises}
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
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total countPart1={exercises1} countPart2={exercises2} countPart3={exercises3}/>
    </div>
  )
}

export default App