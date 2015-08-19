/**
 * Created by chriscai on 2015/7/29.
 */
var React = require('react');
var TreeView = require('../../common/TreeView');

var LeftNav = React.createClass({

    /**
     * @return {object}
     */
    render: function() {
        return (
            <div className="layout-left-nav">
                <TreeView/>
            </div>
        );
    }


});

module.exports = LeftNav;