function getMood() {
    const moods = ['Brabo', 'Faminto', 'Feliz', 'Quieto', 'Paranoico'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>Atual humor: {getMood()}</h1>
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));