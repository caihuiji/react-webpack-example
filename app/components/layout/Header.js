/**
 * Created by chriscai on 2015/7/29.
 */
var React = require('react');
var Login = require('../header/Login');
var Nav = require('../header/Nav');


var Header = React.createClass({


    /**
     * @return {object}
     */
    render: function() {
        return (
            <nav className="layout-header ">
                <Login />
                <Nav />
            </nav>);
    }

});


module.exports = Header;