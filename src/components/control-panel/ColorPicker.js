import React, { Component } from 'react';
import CircularColor from 'react-circular-color';

class ColorPicker extends Component {
  handleColorChange = (color) => {
    this.props.changeColor(color, this.props.activeWord);
  }

  reset = () => {
    this.props.changeColor('#333', this.props.activeWord);
  }

  render() {
    return (
      <div className="color-picker">
        <CircularColor size={200} onChange={this.handleColorChange} />
        <button className="reset" onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default ColorPicker;