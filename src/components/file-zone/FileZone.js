import React, { Component } from 'react';
import '../../styles/FileZone.css';

class FileZone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = e => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault()
      if (this.state.text.length) {
        this.props.addWord(this.state.text);
      }
      this.setState({ text: '' });
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.props;
    return (
      <div id="file-zone" className="file-zone">
        <div id="file" className="file">
          <p className="predefined-text">
            { text }
          </p>
          <textarea class="input" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default FileZone;
  