import React, { Component } from 'react';
import '../../styles/ControlPanel.css';

import ColorPicker from './ColorPicker';

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      replacement: [],
      word: '',
      synonyms: [],
      colorPickerVisisble: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeWordText !== this.props.activeWordText) {
      this.findSynonyms();
    }
  }

  findSynonyms = () => {
    fetch('https://api.datamuse.com/words?rel_syn=' + this.props.activeWordText + '')
      .then(res => res.clone().json())
      .then((res) => {
        const listOfSynonyms = [];
        res.map((value) => {
          listOfSynonyms.push(value.word);
        });

        this.setState({ synonyms: listOfSynonyms });
      })
      .catch(function (error) {
        console.log(error);
        this.setState({ synonyms: [] });
      });
  }

  handleSelect = e => {
    this.setState({ select: e.target.value })
  }

  render() {
    const activeWordInfo = this.props.word;
    const synonyms = this.state.synonyms.map((syn, index) => (<div key={index} className="syn" onClick={this.props.replace.bind(this,syn, this.props.activeWord)}>{syn}</div>));
    return (
      <div id="control-panel" className="control-panel">
        <div id="format-actions">
          <button className={`format-action ${activeWordInfo && activeWordInfo.bold ? 'active' : ''}`} type="button" onClick={e => this.props.makeBold(this.props.activeWord)}>
            <b>B</b>
          </button>
          <button className={`format-action ${activeWordInfo && activeWordInfo.itallic ? 'active' : ''}`} type="button" onClick={e => this.props.makeItalic(this.props.activeWord)}>
            <i>I</i>
          </button>
          <button className={`format-action ${activeWordInfo && activeWordInfo.underlined ? 'active' : ''}`} type="button" onClick={e => this.props.makeUnderlined(this.props.activeWord)}>
            <u>U</u>
          </button>
          <button className={`format-action color ${activeWordInfo && activeWordInfo.underlined ? 'active' : ''}`} type="button" onClick={() => this.setState({colorPickerVisisble: !this.state.colorPickerVisisble})}>
            <u>Color</u>
          </button>

          {this.state.colorPickerVisisble && <ColorPicker activeWord={this.props.activeWord} changeColor={this.props.changeColor}/>}
        </div>
        {this.state.synonyms.length > 0 && <div className="synonyms">
          <div className="label">Synonyms. Select to replace:</div>
          <div className="box">
            {synonyms}
          </div>
        </div>}
      </div>
    );
  }
}

export default ControlPanel;
  