import Header from "./UI/Header"
import ExpAndSKills from "./UI/ExpAndSkills";
import Features from "./UI/Features";
import { useState } from "react";
import Bottom from "./UI/Bottom";
function App() {
  const [headerAnimationState, setHeaderAnimationState] = useState({ animationStart: false })
  const [bottomAnimationStart, setbottomAnimationStart] = useState({ animationStart: false })
  const animationCheck = (animationComplete) => {
    setHeaderAnimationState({ animationStart: animationComplete })
  }
  const animationEnd = (animationComplete) => {
    setbottomAnimationStart({ animationStart: animationComplete })
  }
  return (
    <>
      <Header animationCheck={animationCheck}></Header>
      <ExpAndSKills animationStart={headerAnimationState}></ExpAndSKills>
      <Features animationEnd={animationEnd}></Features>
      <Bottom bottomAnimationStart={bottomAnimationStart}></Bottom>
    </>
  );
}

export default App;
