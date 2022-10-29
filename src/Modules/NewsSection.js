import react, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import Proptypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroller";
export class NewsSection extends Component {
    constructor(props) {
        super(props);
        console.log("Contrsuctor is being called")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0

        }
        document.title=`${this.props.category} - News`
    }

    static defaultProps = {
        country: 'us',
        category: 'general',
        pageSize: 8
    }

    static propTypes = {
        country: Proptypes.string,
        category: Proptypes.string,
        pageSize: Proptypes.string
    }

    async componentDidMount() {
        const links = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e89fba0122034c57be5b142947390733&page=1&pageSize=${this.props.pageSize}`;
        const resp = await fetch(links);
        const data = await resp.json();
        console.log(data);
        this.setState({ articles: data.articles })
    }


    fetchMoredata = async () => {
        console.log("Hello there")
        let new_page = this.state.page + 1;
        const links = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e89fba0122034c57be5b142947390733&page=${new_page}&pageSize=${this.props.pageSize}`;

        const resp = await fetch(links)

        const data = await resp.json();

        this.setState({
            loading:false,
            page: new_page,
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults
        })
    }
    render() {

        return (
            <>
                <h1 className="text-center" >{`Top Headlines - ${this.props.category}`}</h1>

                {this.state.loading && <Loading /> }
                <InfiniteScroll
                    pageStart={this.state.articles.length}
                    loadMore={this.fetchMoredata}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}
                >
                    <div className="container">

                        <div className="row">
                            {this.state.articles.map(elem => {
                                return (<div className="col-md-4">
                                    <NewsItem title={elem.title ? elem.title.substring(0, 50) + '...' : " "}
                                        description={elem.description ? elem.description.substring(0, 110) + '...' : " "}
                                        imgUrl={elem.urlToImage} url={elem.url} author={elem.author} time={new Date(elem.publishedAt).toGMTString()} />
                                </div>);
                            })}

                        </div>
                    </div>
                </InfiniteScroll>


                {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={() => this.clickhandle(false)}>&larr;Previous</button>
                        <button disabled={
                            this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
                        } type="button" className="btn btn-dark " onClick={() => this.clickhandle(true)}>Next &rarr;</button>
                    </div> */}


            </>
        );
    }
}

export default NewsSection
