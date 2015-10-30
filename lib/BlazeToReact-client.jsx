BlazeToReact = function(name, options) {
  if (!options) {
    options = {};
  }

  if (!options.container) {
    options.container = <span />;
  }

  return React.createClass({
    shouldComponentUpdate() {
      // Blaze has the full control once started
      return false;
    },

    componentWillUnmount() {
      Blaze.remove(this.blazeView);
    },

    componentWillReceiveProps(props) {
      _.extend(this.blazeView.dataVar.curValue, props);
      this.blazeView.dataVar.dep.changed();
    },

    render() {
      return React.cloneElement(options.container, {
        ref: function(el) {
          this.blazeView = Blaze.renderWithData(Template[name], this.props, el);
        }.bind(this)
      });
    }
  });
};
