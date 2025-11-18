import './App.css'
import Functions from './topics/01_Functions';
import TemplateLiterals from './topics/02_Template_Literals';
import Short_Conditionals_and_Ternary_Operators from './topics/03_Short_Conditionals_and_Ternary_Operators';
import ThreeArrayMethods from './topics/04_Three_Array_Methods';
import ObjectTricks from './topics/05_Object_Tricks';
import PromisesAndAsyncAwaitSyntax from './topics/06_Promises_and_Async_Await_Syntax';
import ESModulesImportExportSyntax from './topics/07_ES_Modules_Import_Export_Syntax';

function App() {

  return (
    <>
      <Functions />
      <TemplateLiterals />
      <Short_Conditionals_and_Ternary_Operators />
      <ThreeArrayMethods />
      <ObjectTricks />
      <PromisesAndAsyncAwaitSyntax />
      <ESModulesImportExportSyntax />
    </>
  )
}

export default App
