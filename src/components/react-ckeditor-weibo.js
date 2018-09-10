import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxWeiboOss from 'next-weibo-oss';
import ReactCkeditor from 'react-ckeditor';

class WeiboImageUploadAdapter {

  constructor(inLoader, inOptions) {
    //todo: do not new everytime:
    this.loader = inLoader;
    this.options = inOptions;
    this._oss = new NxWeiboOss(inOptions.token);
  }

  upload() {
    return new Promise(resolve => {
      this._oss.upload(this.loader.file).then(([response]) => {
        response.default = response.url;
        resolve(response);
      });
    })
  }

}

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    token: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
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
        imageUploadAdapter={WeiboImageUploadAdapter}
        {...props}
      />
    );
  }
}
