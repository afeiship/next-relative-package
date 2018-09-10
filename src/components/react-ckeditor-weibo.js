import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactCkeditor from 'react-ckeditor';
import ImageUploadAdapter from './image-upload-adapter';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    token: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  render() {
    const { className, token, ...props } = this.props;
    return (
      <ReactCkeditor
        onChange={this._onChange}
        className={classNames('react-ckeditor-weibo', className)}
        adapterOptions={{ token }}
        imageUploadAdapter={ImageUploadAdapter}
        {...props}
      />
    );
  }
}
