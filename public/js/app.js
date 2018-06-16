const newsArray = [
    {
        author: 'Author 1',
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        author: 'Author 2',
        text: ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        author: 'Author 3',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];


const News = (props) => {
    const {data} = props;
    var newsTemplate = data.map(function (item, index) {
        return (
            <div key={index}>
                <p className="news__author">{item.author}:</p>
                <p className="news__text">{item.text}</p>
            </div>
        )
    });
    return (
        <div className="news">
            {newsTemplate}
        </div>
    );
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
        <News data={newsArray} />
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
