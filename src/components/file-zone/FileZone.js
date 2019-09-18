import React, { Component } from 'react';
import '../../styles/FileZone.css';

class FileZone extends Component {
  render() {
    const { text } = this.props;
    return (
      <div id="file-zone" className="file-zone">
        <div id="file" className="file">
          <p className="predefined-text">
            { text }
          </p>
        </div>
      </div>
    );
  }
}

export default FileZone;
  