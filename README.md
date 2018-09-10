# react-ckeditor-weibo
> CKEditor component for weibo oss based on react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    token: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ckeditor-weibo --registry=https://registry.npm.taobao.org
```

```js
import ReactCkeditorWeibo from 'react-ckeditor-weibo';
```

```scss
// customize your styles:
$react-ckeditor-weibo-options:(
);

@import 'node_modules/react-ckeditor-weibo/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-ckeditor-weibo --save
// import : import ReactCkeditorWeibo from 'react-ckeditor-weibo'

class App extends React.Component {
  state = {
    token: require('./token.json').token,
    value: `
      <h2>Hello</h2>
      <p>ckeditor is a very good editor</p>
      <p>React is so good</p>
      <p>Ruby lang is wonderful!</p>
    `
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="hello-react-ckeditor-weibo">
        <ReactCkeditorWeibo
          value={this.state.value}
          onChange={this._onChange}
          token={this.state.token}
          ref='rc'
        />
      </div>
    );
  }
}

```
