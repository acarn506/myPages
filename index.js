import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home'
import About from './components/About'
import Members from './components/Members'
import Activities from './components/Activities'
import events from './eventsData.json'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show:"Home"};
    }

    showHandler (choice) {
        console.log('choice', choice)
        this.setState({
            show: choice
        })
    }

    render() {
        let content = null;
        switch (this.state.show) {
            case "Home":
                content = <Home/>;
                break;
            case "About":
                content = <About/>;
                break;
            case "Activities":
                content = <Activities events={events}/>;
                break;
            case "Members":
                content = <Members/>;
                break;
            default:
                content = <h2>Some type of problem!</h2>;
        };

        return <div>
                <nav className='menu'>
                    <a onClick={this.showHandler.bind(this, "Home")}>Home</a>
                    <a onClick={this.showHandler.bind(this, "About")}>About</a>
                    <a onClick={this.showHandler.bind(this, "Activities")}>Club Activities</a>
                    <a onClick={this.showHandler.bind(this, "Members")}>Club Members</a>
                </nav>
                {content}
            </div>

    }
}



   
// What is this? HTML mixed with JavaScript
ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById("root")
);