/**
 * Created by chriscai on 2015/7/29.
 */


var React = require('react');
var Box = require('./Box');

var BaseChart = require("../../charts/BaseChart")

var Content = React.createClass({

    /**
     * @return {object}
     *
     */
    render: function() {
        return (
            <div className="layout-content">
                <Box title="趋势-时间段对比" className="col-lg-12"  >
                    <BaseChart chartType="spline"/>
                </Box>
                <Box title="统计" className="col-lg-6" >
                    <BaseChart chartType="column"/>
                </Box>
                <Box title="占比" className="col-lg-6" >
                    <BaseChart chartType="pie"/>
                </Box>
                <Box title="趋势-纬度对比" className="col-lg-12">
                    <BaseChart chartType="spline"/>
                </Box>
            </div>
           );
    }

});


module.exports = Content;