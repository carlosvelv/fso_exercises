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


export default Course