const Article = (props) => {
    var {author, text} = props;
    return (
        <div className='article'>
            <p className='news__author'>{author}:</p>
            <p className='news__text'>{text}</p>
        </div>
    )
};

Article.defaultProps = {
    author: 'Stranger'
};

Article.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

const News = (props) => {
    const {data} = props;
    let newsTemplate;
    if (data.length > 0) {
        newsTemplate = data.map(function (item, index) {
            return (
                <div key={index}>
                    <Article author={item.author} text={item.text} elem={Comments}/>
                </div>
            )
        });
    }
    else
        newsTemplate = <p>Empty news</p>;
    return (
        <div className="news">
            {newsTemplate}
            <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>Total: {data.length}</strong>
        </div>
    );
};

News.propTypes = {
    data: PropTypes.array.isRequired
};

const Comments = () => (
    <div className="comments">
        Empty comments
    </div>
);


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: [], isLoading: false};
    }

    componentDidMount() {
        this.setState({isLoading: true}, () => {
            setTimeout(() => {
                fetch("/api/data")
                    .then(res => res.json())
                    .then(news => {
                        console.log(news);
                        this.setState({data: news, isLoading: false})
                    });
            }, 4000);
        });
    }

    render() {
        const {isLoading} = this.state;
        return (
            <div className="app">
                {isLoading && <div>Loading...</div>}
                <News data={this.state.data}/>
                <Comments/>
            </div>);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
