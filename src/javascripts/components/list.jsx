//
// Component: List
// --------------------

var React = require('react');
var Item = require('./item.jsx');

var List = React.createClass({
    render: function() {
        var list_items = [],
            self = this;
        for (var item_id in this.props.data) {
            var item = this.props.data[item_id];
            list_items.push(
                <Item
                    done={item.done}
                    desc={item.desc}
                    label={item.label}
                    key={item_id}
                    item_id={item_id} />
            );
        }
        return (
            <ul>
                {list_items}
            </ul>
        );
    }
});

module.exports = List;