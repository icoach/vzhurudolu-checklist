//
// Component: List
// --------------------

var React = require('react')
var Item = require('./item.jsx')

var List = React.createClass({
    render: function() {
        var items = []
        var data = this.props.items
        for (var key in data) {
            var item = data[key]
            items.push(
                <Item 
                    item_id={item.id} 
                    key={item.id} 
                    done={item.done}
                    desc={item.desc}
                    label={item.label} />
            )
        }

        return (
            <div className='checklist__group'>
                <h2>{this.props.name}</h2>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
})

module.exports = List