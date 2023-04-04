import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country :'in',
        pageSize : 6,
        category: 'general'
    }
    static propTypes={
        country:PropTypes.string.isRequired,
        pageSize:PropTypes.number.isRequired,
        category:PropTypes.string.isRequired
    }
    constructor() {
        super();
        console.log("Hello! I am a constructor from News Components");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0

        }
    }
    async componentDidMount() {
        console.log("mount");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e23fbfcc13d494888e9461a087b92cb&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }
    handlePrevClick = async () => {
        console.log('prev')
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e23fbfcc13d494888e9461a087b92cb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e23fbfcc13d494888e9461a087b92cb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                totalResults: parseData.totalResults,
                loading: false
            })
        }
    }
    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row justify-content-center">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"} newsUrl={element.url ? element.url : ""} />
                        </div>
                    })}

                </div>
                <div className="d-flex justify-content-between">
                    {!this.state.loading && <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-sm btn-dark">&larr;Previous</button>}
                    {!this.state.loading && <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-sm btn-dark">&rarr;Next</button>}
                </div>
            </div>
        )
    }
}

export default News