class App extends React.Component {
    render(){
        return (
            <div>
                <Hello to="Lucas" from="Guto"/>
                <Hello to="Hawk" from="Thor" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));