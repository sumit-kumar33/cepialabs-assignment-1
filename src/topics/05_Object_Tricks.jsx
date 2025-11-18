function ObjectTricks() {
  // Demonstrating property shorthand, destructuring, and spread operator
  // Property Shorthand - When the property name and variable name are the same, you can use shorthand syntax.
  // Destructuring - A convenient way to extract multiple properties from an object and assign them to variables.
  // Spread Operator - Allows an iterable such as an array or object to be expanded in places where zero or more arguments or elements are expected.

  const topic = "Object Tricks: Property Shorthand, Destructuring, Spread Operator";
  const userName = "Casie";
  const user={
    userName,
  };
  const userDetails = {
    firstName: "Casie",
    lastName: "Stevens",
  };
  const {firstName, ...restDetails} = userDetails;
  const isEnglishSpeaker = {
    firstName,
    ...restDetails,
  };
  return (
    <div>
      <h1>{topic}</h1>
      <p>This demonstrates property shorthand in objects.</p>
      <p>{user.userName}</p>
      <p>This demonstrates destructuring and the spread operator.</p>
      <p>{isEnglishSpeaker.firstName} {isEnglishSpeaker.lastName}</p>
    </div>
  );
}

export default ObjectTricks;
