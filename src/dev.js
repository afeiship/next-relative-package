import './dev.scss';
import ReactCkeditorWeibo from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
