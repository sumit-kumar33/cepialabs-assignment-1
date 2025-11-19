import React from "react";

function PromisesAndAsyncAwaitSyntax() {
  // Promises are used to resolve asynchronous code to make it resolve like normal, synchronous code, which we can read from top to bottom.
  // It traditionally use callbacks to resolve our asynchronous code.
  // We use the .then() callback to resolve successfully resolved promises,
  // while we use the .catch() callback to resolve promises that respond with an error.
  // But that can make our code harder to read and maintain. And lead to "callback hell".
  // Async/Await syntax provides a cleaner and more readable way to work with promises.
  // With Async/Await, we can write asynchronous code that looks and behaves like synchronous code.
  // This makes it easier to understand and maintain our code.

  const topic = "Promises + Async/Await Syntax";
  const [avatar, setAvatar] = React.useState("");
  React.useEffect(() => {
    async function fetchAvatar() {
      const response = await fetch("https://api.github.com/users/octocat");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAvatar(data.avatar_url);
    }
    fetchAvatar();
  }, []);

  return (
    <div>
      <h1>{topic}</h1>
      <p>Promises traditionally use callbacks to resolve our asynchronous code.</p>
      <p>We use the .then() callback to resolve successfully resolved promises,</p>
      <p>while we use the .catch() callback to resolve promises that respond with an error.</p>
      <p>But that can make our code harder to read and maintain.</p>
      <p>Async/Await syntax provides a cleaner and more readable way to work with promises.</p>
      <p>With Async/Await, we can write asynchronous code that looks and behaves like synchronous code.</p>
      <p>This makes it easier to understand and maintain our code.</p>
      <h2>GitHub Avatar of Octocat:</h2>
      <img src={avatar} alt="Octocat"/>
      <p>This avatar is fetched using Async/Await syntax.</p>
      <p>I fetched this avatar from the GitHub API using the fetch function with Async/Await syntax.</p>
    </div>
  );
}

export default PromisesAndAsyncAwaitSyntax;
