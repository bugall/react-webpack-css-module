import React from 'react';
import styles from '../../css/index/index.css';
var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <p className={styles.name}>Hello world</p>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
