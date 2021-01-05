import React from 'react';
import { Button } from './Button';
class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state={
      color:[238,130,238]
    }
this.chooseColor=this.chooseColor.bind(this)
}
 applyColor(e){
   return document.body.style.backgroundColor='rgb('+e+')'
 }
chooseColor=()=>{
  var ColorCode = [(Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))];
  this.setState({
  color : ColorCode
  });
}
    componentDidMount() {
    console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
  //  this.chooseColor
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('i invoked immediately after updating occurs, upon every change.')
  this.applyColor()
  }
  isLight(colorArr) {
    return colorArr.reduce((a,b) => a+b) < 127 * 3;  // it returns true or false;
  }
  formatColor(colorArr) {
    return 'rgb(' + colorArr.join(', ') + ')';   // it returns rgb format of color;
  }
  render() {
    console.log(this.applyColor(this.state.color))
    return (
      <div>
        <h1 className={this.isLight(this.state.color)?'black':'white'}>
        Your color is {this.formatColor(this.state.color)}
        </h1>
        <Button color={this.chooseColor}>
          <p>Hi, im color picker</p>
        </Button>
      </div> 
    );
  }
}
export default ColorPicker;
