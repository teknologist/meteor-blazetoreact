# BlazeToReact
Transform a Blaze template into a React.js component while keeping the reactivity

# Install
`meteor add thereactivestack:blazetoreact`

# Usage
```html
<template name="hello">
  This is whatever template: {{message}}
  Blaze keeps being reactive from React values: {{count}}
</template>
```

# Example with a package (accounts-ui)
```javascript
const LoginButtons = BlazeToReact('loginButtons');

App = React.createClass({
  render() {
    return (
      <div>
        {/* ... */}
        <LoginButtons />
      </div>
    );
  }
})
```

# Example with your own template
```javascript
const Hello = BlazeToReact('hello');

App = React.createClass({
  getInitialState() {
    return {
      count: 0
    };
  },

  componentDidMount() {
    var self = this;

    this.interval = setInterval(function() {
      self.setState({ count: this.state.count + 1 });
    }, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render() {
    return <Hello message="hi from react" count={this.state.count} />;
  }
})
```
