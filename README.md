# react-ckeditor-weibo
> CKEditor component for weibo oss based on react

## properties:
```javascript

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

class App extends React.Component{
  state = {
    token: require('./token.json').token
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-ckeditor-weibo">
        <ReactCkeditorWeibo token={this.state.token} ref='rc' />
      </div>
    );
  }
}

```
