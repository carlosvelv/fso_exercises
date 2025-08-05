const Filter = ({ subString, handleFilterChange }) => {
  return (

      <form>
        <div>
          Filter: <input value={subString} onChange={handleFilterChange} />
        </div>
      </form>
  )

}

export default Filter