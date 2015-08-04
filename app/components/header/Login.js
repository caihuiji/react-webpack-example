/**
 * Created by chriscai on 2015/7/29.
 */
var React = require('react');

require("./login.css");

var Login = React.createClass({


    /**
     * @return {object}
     */
    render: function() {
        return (
            <div className="header-top">
                <div className="login-wrap">
                    <div className="login">
                        <p><img src="http://dayu.oa.com/avatars/chriscai/avatar.jpg"/>chriscai<span
                            class="line">|</span><a href="#" className="logout">注销</a></p>
                    </div>
                </div>
            </div>
        );
    }

});


module.exports = Login;