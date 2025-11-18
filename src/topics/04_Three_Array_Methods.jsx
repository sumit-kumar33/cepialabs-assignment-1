function ThreeArrayMethods() {
  // Three Array Methods: map, filter, and reduce are commonly used in React for rendering lists and transforming data.
  //  Map is used to create a new array by applying a function to each element of an existing array.
  // Filter is used to create a new array containing only the elements that meet a certain condition.
  // Reduce is used to accumulate values from an array into a single value based on a provided function.

  const topic = "Three Array Methods";
  const student = {
    name: "Alice",
    age: 20,
    isEnrolled: true
  };
  const students = ["Alice", "Bob", "Charlie"];

  return (
    <div>
      <h1>{topic}</h1>
      <h2>Map Method</h2>
      <p>{`We can insert any valid expressions, including variables that contain primitive values (strings, numbers, booleans, and so on) as well as object properties that contain primitive values.`}</p>
      <p>this an example student</p>
      <p>{`Name: ${student.name}, Age: ${student.age}, Enrolled: ${student.isEnrolled}`}</p>
      <p>What if we have an array and we want to iterate over that array to show each array element within an individual JSX element?</p>
      <p>For this, we can use the **.map()** method. It allows us to transform each element in our array as displayed below.</p>
      <ul>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ul>
      <h2>Filter Method</h2>
      <p>Filter, as its name indicates, allows us to filter certain elements out of our array.</p>
      <ul>
        {students.filter((student) => student !== "Bob").map((student) => (
          <li>{student}</li>
        ))}
      </ul>
      <h2>Reduce Method</h2>
      <p>Reduce  is capable of transforming array values into virtually any data type, even non-array values.
      </p>
      <ul>
        {students.reduce((accumulator, student) =>{
          if (!student.startsWith("C")) {
            return accumulator.concat(student);
          } else 
          return accumulator;
        }, []).map((student) => (
          <li>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default ThreeArrayMethods;
