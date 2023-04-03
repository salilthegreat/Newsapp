import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    constructor() {
        super();
        console.log("Hello! I am a constructor from News Components");
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        console.log("mount");
        let url = "https://newsapi.org/v2/everything?q=india&from=2023-04-02&to=2023-04-01&sortBy=popularity&apiKey=5e23fbfcc13d494888e9461a087b92cb";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles })
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
            </div>
        )
    }
}

export default News