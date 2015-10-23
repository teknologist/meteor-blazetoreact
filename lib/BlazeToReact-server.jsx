// Blaze templates are not loaded server-side, we cannot do server-rendering
// We make sure the render is the same as on the client initially

const DummyElement = React.createClass({
  render() {
    return <span />;
  }
});

BlazeToReact = function(name, options) {
  if (!options) {
    options = {};
  }

  if (!options.container) {
    options.container = <span />;
  }

  return React.createClass({
    render() {
      return options.container;
    }
  });
};
