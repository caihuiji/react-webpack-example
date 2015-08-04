require("common/base.css");
require("bootstrap/dist/css/bootstrap.min.css")
require("bootstrap/dist/css/bootstrap-theme.min.css")
require("./app.css");

var React = require('react');
var Header = require('./components/layout/Header');
var Main = require('./components/layout/Main');
var Footer = require('./components/layout/Footer');




var App = React.createClass({

/**
 * @return {object}
 */
render: function() {
    return (
        <div id="main-wrap" className="layout-main">
            <Header />
            <Main />
            <Footer />
        </div>

    );
}


});


React.render(
    <App/>,
    document.body
);
