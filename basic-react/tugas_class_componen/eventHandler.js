// CLass component
class Button extends React.Component {
    handleButtonCLick = () => {
        alert(this.props.message);
    }

    render() {
        return (
            <button onClick={this.handleButtonClick} style={{ margin: "10px" }}>
                {this.props.children}
            </button>
        )
    }
}

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Learn React</h1>
                <Button message="Learn React">React</Button>
                <Button message="Learn Javascript">Javascript</Button>
            </div>
        )
    }
}
const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);