/**
 * Created by chriscai on 2015/8/4.
 */

var React = require("react");
var LeftNav = require("./LeftNav");
var Content = require("./Content");

var Speed = React.createClass({

    /**
     * @return {object}
     */
    render: function() {
        return (
             <div>
                 <LeftNav/>
                 <Content/>
             </div>
        );
    }
});

module.exports = Speed;


