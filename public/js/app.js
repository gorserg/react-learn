const News = () => {
    const date = new Date().toISOString();
    return (
     <div className="news">{'Empty news for date' +  date}
    </div>);
};

const Comments = () => (
    <div className="comments">
        Empty comments
    </div>
);

const App = () => (
    <>
        App title
        <News/>
        <Comments/>
    </>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
