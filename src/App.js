import React, {Component} from 'react';
import './styles/App.css';
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";
import getMockText from './tests/text.service';

class App extends Component {
  getText() {
    getMockText().then(function (result) {
      console.log(result);
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <span>Best Text Editor</span>
        </header>
        <main>
          <ControlPanel/>
          <FileZone/>
        </main>
      </div>
    );
  }
}
  
export default App;
  