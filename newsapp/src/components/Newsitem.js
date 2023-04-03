import React, { Component } from 'react'

export class Newsitem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className='my-3 mx-auto'>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" style={{height:"11rem"}} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title} {title.length===45 ?"...":"" }</h5>
                            <p className="card-text">{description}{description.length===88 ?"...":"" }</p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem