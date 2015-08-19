/**
 * Created by chriscai on 2015/8/4.
 */

var React = require("react");

require("./Box.css")



var Box = React.createClass({

    getDefaultProps: function() {
        return {
            className: ''
        };
    },

    /**
     * @return {object}
     */
    render: function() {
        return (
           <div className={this.props.className + " main-box"}>
                <h3>{this.props.title}</h3>
                <div className="chart-body">
                    {this.props.children}
                </div>
           </div>
        );
    }
});

module.exports = Box;


