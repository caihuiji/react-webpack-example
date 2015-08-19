/**
 * Created by chriscai on 2015/7/29.
 */
var React = require('react');


require("./nav.css");



var Nav = React.createClass({


    /**
     * @return {object}
     */
    render: function() {
        return (
            <div className="header-nav">
                <div className="header-logo">
                </div>
                <ul className="header-nav-list fn-clearfix">
                    <li className=""> <a id="indMain" href="/#/">首页</a></li>
                    <li className=""><a href="/#speed">速度监控</a></li>

                </ul>
            </div>
        );
    }

});
/* <li className="current"><a href="#index/show">指标监控</a></li> 111*/

module.exports = Nav;