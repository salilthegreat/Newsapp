import React, { Component } from 'react'
export class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date,source } = this.props;

        return (
            <div className='my-3 mx-auto'>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" style={{ height: "11rem" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} {title.length === 45 ? "..." : ""}</h5>
                          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>
                            {source}
                        </span>
                        <p className="card-text">{description}{description.length === 88 ? "..." : ""}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        <p className='card-text'><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem