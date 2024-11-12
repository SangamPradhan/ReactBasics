import CounterApp from "./components/CounterApp";
import LearnComponent from "./components/LearnComponent";
import LearnConditionalRendering from "./components/LearnConditionalRendering";
import LearnEvent from "./components/LearnEvent";
import LearnJSX from "./components/LearnJSX";
import LearnLiftingStateUp from "./components/LearnLiftingStateUp";
import LearnMap from "./components/LearnMap";
import LearnProps from "./components/LearnProps";
import LearnState from "./components/LearnState";
import LearnUseEffect from "./components/LearnUseEffect";
import LearnUseMemo from "./components/LearnUseMemo";

const App=()=> {
let age = 22
const getData = (data) =>{
  console.log(data);
};

  return (
    <>
      <h1>Hello React</h1>
      <LearnComponent/>
      <LearnJSX/>
      <LearnProps name="Sangam Pradhan" age={age}/>
      <LearnEvent/>
      <LearnLiftingStateUp myClick={getData}/>
      <LearnState/>
      <CounterApp/>
      <LearnUseEffect/>
      <LearnUseMemo/>
      <LearnConditionalRendering/>
      <LearnMap/>

    </>
  )
}

export default App
