import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const capitalizeFirstLetter = (letter) => {
        return letter.charAt(0).toUpperCase() + letter.slice(1)
    }
    console.log(props.country)
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0)

    document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`
    const updateData = async () => {
        props.changeLoading(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticle(parseData.articles);
        setTotalResult(parseData.totalResults)
        setLoading(false)
        props.changeLoading(100);
    }
    useEffect(() => {
        updateData();
    },[])


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        props.changeLoading(10);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticle(article.concat(parseData.articles));
        setTotalResult(parseData.totalResults);
        setPage(page + 1)
        props.changeLoading(100);
    }
    return (

        <div className='container my-3'>
            <h2 className='text-center ' style={{marginTop : "80px"}}>NewsMonkey - Top Headlines from {capitalizeFirstLetter(props.category)}</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResult}
                loader={<Spinner />}>

                <div className="row justify-content-center">
                    {article.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description ? element.description.slice(0, 88) : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"}
                                newsUrl={element.url ? element.url : ""}
                                author={element.author ? element.author : "Unknown"}
                                date={element.publishedAt ? element.publishedAt : ""}
                                source={element.source.name}
                            />
                        </div>
                    })}

                </div>
            </InfiniteScroll>
        </div>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}

export default News