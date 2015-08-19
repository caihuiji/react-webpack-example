require("common/base.css");
require("bootstrap/dist/css/bootstrap.min.css")
require("bootstrap/dist/css/bootstrap-theme.min.css")
require("./app.css");

var React = require('react');
var Header = require('./components/layout/Header');
var Footer = require('./components/layout/Footer');


var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Index = require('./components/main/index/Index');
var Speed = require('./components/main/speed/Speed');


var App = React.createClass({

/**
 * @return {object}
 */
render: function() {

    return (
        <div id="main-wrap" className="layout-main">
            <Header />
            <main id="main">
                <RouteHandler/>
            </main>
            <Footer />
        </div>
    );
}


});

var routes = (
    <Route handler={App}>
        <DefaultRoute   handler={Index}/>
        <Route name="speed" path="speed" handler={Speed}/>
    </Route>
);


Router.run(routes , function (Handler) {
    React.render(<Handler/> , document.getElementById("wrapper"));
});

