import "./App.css";

import { EfectoCarga } from "./components/13-EfectoCarga";
import { Formularios } from "./components/14-Formularios";

function App() {
  const fecha = new Date();
  const year = fecha.getFullYear();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Formularios />
          </div>
          <div className="col-6">
            <EfectoCarga />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
