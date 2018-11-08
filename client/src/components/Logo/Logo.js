import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Logo extends PureComponent {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 56 56">
      <path fill="#2EC6FF" fill-rule="nonzero" d="M28 56C12.536 56 0 43.464 0 28S12.536 0 28 0s28 12.536 28 28-12.536 28-28 28zM17 17a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1H17zm21.686 6.127l-4.5-.562-.372 2.976 3.01.377-1.492 11.907-10.419-1.307-.372 2.982L36.448 41a1.5 1.5 0 0 0 1.675-1.302L39.989 24.8a1.5 1.5 0 0 0-1.302-1.674v.001z" />
    </svg>
  }
}

Logo.defaultProps = {
  size: 56
}

Logo.propTypes = {
  size: PropTypes.number
};
