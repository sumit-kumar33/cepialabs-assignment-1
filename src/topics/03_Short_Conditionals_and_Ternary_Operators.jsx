function Short_Conditionals_and_Ternary_Operators() {
  // Short Conditionals and Ternary Operators are useful for rendering content conditionally in React.
  // The ternary operator has the syntax: condition ? expressionIfTrue : expressionIfFalse
  // Short conditionals use the logical AND (&&) operator to render content if a condition is true.

  const topic = "Short Conditionals and Ternary Operators";
  const isLoggedIn = true;
  return (
    <div>
      <h1>{topic}</h1>
      <p>The ternary operator functions exactly the same as an if-statement, but it is shorter, it is an expression (not a statement), and can be inserted within JSX</p>
      {isLoggedIn ? <p>This is a ternary operator example.</p> : <p>The condition is not met.</p>}
      <p>Short conditionals allow you to render content based on a condition without using the full ternary syntax.</p>
      <p>{isLoggedIn && "This is a short conditional example."}</p>
      <p></p>
    </div>
  );
}

export default Short_Conditionals_and_Ternary_Operators;
