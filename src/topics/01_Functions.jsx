function Functions() {
  // I have learnt about three types of functions in JavaScript and React.
  // 1. JavaScript Functions - traditional functions (names are written in camelCase)
  // 2. React Function Components - functions that return JSX (names start with a capital letter)
  // 3. Arrow Functions - a shorter syntax for writing functions,uses => syntax, must declare before use.

  const topic = "Functions";
  function javascriptFunction() {
    return "This is a simple JavaScript function.";
  }
  function ReactComponent() {
    return "<p>This is a simple React function component.</p>";
  }
  const arrowFunction = () => {
    return "This is an arrow function.";
  };


  return (
    <div>
      <h1>{topic}</h1>
      <p>Functions in JavaScript allow you to encapsulate reusable blocks of code.</p>
      <p>I have learnt three types of functions: JavaScript functions, React Components, and Arrow functions.</p>
      <p>{javascriptFunction()}</p>
      <div dangerouslySetInnerHTML={{ __html: ReactComponent() }} />
      <p>{arrowFunction()}</p>
    </div>
  );
}

export default Functions;
