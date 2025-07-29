const Header = (props) => <h1>{props.course}</h1>



const Content = ({ props }) => {
  console.log(props);
  const values = props.map(part => part.exercises)
  console.log(values);
  
  const total = values.reduce((s, p) => s + p, 0)
  console.log(total);
  
   // Destructuring props directly here for cleaner access
  return (
    <div>
      {props.map((part, i)=> ( // Use props.parts and wrap JSX in parentheses for implicit return
        <p key={i}> {part.name} {part.exercises} </p> // Add a unique key when mapping over elements
      ))}
      <b>total of {total} exercises</b>
    </div>
  );
};



const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = ({course}) => {
console.log(course);

 return (
  <div>
      <Header course={course.name} />
      <Content props={course.parts} />
   </div> )
  }

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  console.log('this', courses);
  return (
    <div>
      {courses.map((part, i)=> ( // Use props.parts and wrap JSX in parentheses for implicit return
         <Course key={i} course={part}/> // Add a unique key when mapping over elements
      ))}

    </div>
  )
}

export default App