var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./components/Menu.react');
var App = require('./components/App.react');

class Main extends React.Component{
    render(){
        return[
            <Menu key="menu" />,
            <App key="app" />
        ];
    }
}

ReactDOM.render(<Main />, document.getElementById('main'));