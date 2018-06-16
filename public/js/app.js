const News = () => {
    const date = new Date().toISOString();
    return (
     <div className="news">{'Empty news for date' +  date}
    </div>);
};

function CommentsAsFunction(){
    return <div className="comments">
        Empty comments as function
    </div>;
}

const CommentsAsArrayFunc = () => (
    <div className="comments">
        Empty comments as array function
    </div>
);

class CommentsAsClass extends React.Component {

    componentDidMount() {
        console.log('componentDidMount');
    }

   render (){
       return <div className="comments">
           Empty comments as class
       </div>
   }
}

const App = () => (
    <div>
        App title
        <News/>
        <CommentsAsFunction/>
        <CommentsAsArrayFunc/>
        <CommentsAsClass/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
