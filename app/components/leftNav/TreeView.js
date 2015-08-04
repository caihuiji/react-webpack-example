/**
 * Created by chriscai on 2015/8/3.
 */
var React = require('react');

require("bootstrap-treeview/bootstrap-treeview.min.css");
var treeView = require("bootstrap-treeview/bootstrap-treeview");

var defaultData = [
    {
        text: '广州研发部门',
        href: '#parent1',
        tags: ['4'],
        nodes: [
            {
                text: '简历',
                href: '#child1',
                tags: ['2'],
                nodes: [
                    {
                        text: '首屏测速',
                        href: '#grandchild1',
                        tags: ['0']
                    }
                ]
            }
        ]
    },
    {
        text: '微信阅读',
        href: '#parent2',
        tags: ['0']
    },
    {
        text: 'email app',
        href: '#parent3',
        tags: ['0']
    },
    {
        text: '账单助手',
        href: '#parent4',
        tags: ['0']
    },
    {
        text: '漂流瓶',
        href: '#parent5'  ,
        tags: ['0']
    }
];



var TreeView = React.createClass({

    componentDidMount: function() {
        // When the component is added, turn it into a modal

        $(React.findDOMNode(this))
            .treeview({
                expandIcon: 'glyphicon glyphicon-chevron-right',
                collapseIcon: 'glyphicon glyphicon-chevron-down',
                bootstrap2: false,
                data: defaultData
            });
    },
    componentWillUnmount: function() {
        $(React.findDOMNode(this)).remove();
    },


    /**
     * @return {object}
     */
    render: function() {
        return (
            <div id="treeview" className="treeview"></div>
        );
    }

});


module.exports = TreeView;