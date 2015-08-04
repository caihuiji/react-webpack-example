/**
 * Created by chriscai on 2015/7/29.
 */


var React = require('react');
var Box = require('../main/Box');

var Content = React.createClass({

    /**
     * @return {object}
     *
     */
    render: function() {
        return (
            <div className="layout-content ">
                <Box title="趋势-时间端对比" className="col-lg-12" chartType="spline"  />
                <Box title="统计" className="col-lg-6" chartType="column" />
                <Box title="占比" className="col-lg-6" chartType="pie" />
                <Box title="趋势-纬度对比" className="col-lg-12" class="spline"/>
            </div>
           );
    }


});


module.exports = Content;