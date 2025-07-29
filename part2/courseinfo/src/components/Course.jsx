

const Header = ({ header }) => {
  console.log(props)
  return (
  <h1>  
    {header.name}
  </h1>
  )
}

const Course = ({ course }) => {
  console.log(course)
  return (
  <div>  
    <Header header ={course} />
  </div>
  )
}


export default Course