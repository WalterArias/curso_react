import "./App.css";
import { RenderCondicional3 } from "./components/08-RenderCondicional3";
import { HookEffect } from "./components/10-hookEffect";
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">x
            <RenderCondicional3 />
          </div>
          <div className="col-6">
            <HookEffect />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
