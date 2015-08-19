/**
 * Created by chriscai on 2015/7/29.
 */


var React = require('react');
var Index = require('../main/index/Index');
var LeftNav = require('../main/speed/speed');
var Content = require('./Content');

var Router = require('react-router');
var Route = Router.Route;

var routes = (
    <Route handler={Index}>
        <Route path="about" handler={About}/>
        <Route path="inbox" handler={Inbox}/>
    </Route>
);

var Main = React.createClass({

    /**
     * @return {object}
     */
    render: function() {
        return (
            <main>
                <LeftNav/>
                <Content/>
            </main>

           );
    }


});


module.exports = Main;