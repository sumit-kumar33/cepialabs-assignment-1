import logo from '../assets/github-profile-picture.png';
function ESModulesImportExportSyntax() {
  // ES6 gave us the ability to easily share code between our own JavaScript files as well as third-party libraries using ES modules.
  // Also, when we leverage tools like Webpack, we can import assets like images and svgs, as well as CSS files and use them as dynamic values in our code.
  // The idea behind ES modules is to be able to split up our JavaScript code into different files, to make it modular or reusable across our app.
  // This also helps us keep our code organized and easier to maintain.

  const topic = "ES Modules + Import / Export syntax";

  return (
    <div>
      <h1>{topic}</h1>
      <p>ES6 gave us the ability to easily share code between our own JavaScript files as well as third-party libraries using ES modules.</p>
      <p>Also, when we leverage tools like Webpack, we can import assets like images and svgs, as well as CSS files and use them as dynamic values in our code.</p>
      <p>This image is imported using ES Modules import syntax.</p>
      <img src={logo} alt="Sumit Kumar's GitHub Profile" height={200} width={200} />
    </div>
  );
}

export default ESModulesImportExportSyntax;
