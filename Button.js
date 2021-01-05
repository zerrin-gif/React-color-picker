import React from 'react';
class Button extends React.Component {
	render() {
		return (
			<button className={this.props.color?'light-button':'dark-button'}
			onClick={this.props.color}>Refresh
				{this.props.children}
			</button>
		);
	}
}
export { Button };
//export default Button;