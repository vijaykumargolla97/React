import React, {Fragment} from "react";
import Provider from "./Provider";
import Context from "./Context";


const Agents = () => {
  return(
    <AgentOne/>
  )
}
const AgentOne = () => {
  return(
    <AgentTwo/>
  )
}
const AgentTwo = () => {
  return(
    <AgentThree/>
  )
}
const AgentThree = () => {
  return(
    <AgentBond/>
  )
}
const AgentBond = () => {
  return(
    <Context.Consumer>
      {
        (Context) => (
          <Fragment>
            <h3> Agent Information</h3>
            <p>Mission Name:{Context.data.mname} </p>
            <h2>Mission Status:{Context.data.accept} </h2>
            <button onClick={Context.isMissionAccepted}> Change Status</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}


const App =()=> (
  <div>
    <h1>Context API</h1>
    <Provider>
      <Agents/>
    </Provider>
  </div>
)


export default App;