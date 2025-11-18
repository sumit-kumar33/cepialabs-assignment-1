function TemplateLiterals() {
  // Template literals allow for easier string interpolation and multi-line strings.
  // They use backticks (`) instead of single and double quotes and support embedding expressions with ${}.
  // This makes it easier to create complex strings without cumbersome concatenation.
  // For example, you can embed variables and even expressions directly within the string.

  const topic = "Template Literals";
  const x = "Template literals allow embedding expressions inside string literals using backticks (`) and ${}."
  let num = 5;

  function checkEvenOdd(num) {
    return num % 2 === 0;
  }

  return (
    <div>
      <h1>{topic}</h1>
      <p>Before template literals, string concatenation was done using the + operator.</p>
      <p>{x}</p>
      <p>{`This also allows us use ternary operators and multi-line strings easily.`}</p>
      <p>{`For example, ${num} is ${checkEvenOdd(num) ? 'even' : 'odd'}.`}</p>
      <p>{`Multi-line strings are as simple as:
Line 1
Line 2
Line 3`
        }
      </p>
    </div>
  );
}

export default TemplateLiterals;
