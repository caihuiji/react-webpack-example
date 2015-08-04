/**
 * Created by chriscai on 2015/7/29.
 */


var React = require('react');
var LeftNav = require('./LeftNav');
var Content = require('./Content');

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