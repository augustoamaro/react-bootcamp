function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        const name = 'Koksal Baba';
        return (
            <div>
                <h1>Seu número é: {num} </h1>
                <p>{num === 7 ? `Congrats you unlocked ${name} Gif!` : 'Try again!'}</p>
                {
                    num === 7 
                    && <img witdh="300" height="300" src="https://c.tenor.com/1gEBsyl5EeIAAAAd/koksal-baba.gif" />
                     
                }
            </div>
            
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));