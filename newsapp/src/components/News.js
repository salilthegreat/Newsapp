import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
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
        let url = "https://newsapi.org/v2/everything?q=india&from=2023-04-02&to=2023-04-01&sortBy=popularity&apiKey=5e23fbfcc13d494888e9461a087b92cb&page=1&pageSize=21";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
    }
    handlePrevClick = async () => {
        console.log('prev')
        let url = `https://newsapi.org/v2/everything?q=india&from=2023-04-02&to=2023-04-01&sortBy=popularity&apiKey=5e23fbfcc13d494888e9461a087b92cb&page=${this.state.page - 1}&pageSize=21`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            totalResults: parseData.totalResults
        })
    }
    handleNextClick = async () => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/21)){
            console.log("Ended")
        }else{ 
       console.log('next')
        let url = `https://newsapi.org/v2/everything?q=india&from=2023-04-02&to=2023-04-01&sortBy=popularity&apiKey=5e23fbfcc13d494888e9461a087b92cb&page=${this.state.page + 1}&pageSize=21`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
            totalResults: parseData.totalResults
        })}
    }
    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row justify-content-center">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url ? element.url : ""} />
                        </div>
                    })}

                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-sm btn-dark">&larr;Previous</button>
                    <button onClick={this.handleNextClick} className="btn btn-sm btn-dark">&rarr;Next</button>
                </div>
            </div>
        )
    }
}

export default News