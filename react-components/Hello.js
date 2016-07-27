var React = require('react');

var Hello = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Works!</h1>
                <p>This is the React component rendered on server side (Node).</p>
            </div>
        );
    }
});

module.exports = Hello;
