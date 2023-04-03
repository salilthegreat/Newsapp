import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "gruenderszene",
                "name": "Gruenderszene"
            },
            "author": null,
            "title": "So sieht es aus, wenn ein Startup Organe mit dem 3D-Drucker herstellt",
            "description": "Klingt nach Science Fiction: Cellbricks stellt menschliches Gewebe mit dem 3-D-Drucker her. Wir waren dort und haben zugeschaut",
            "url": "https://www.businessinsider.de/gruenderszene/health/cellbricks-gewebe-brustimplantat-3d-drucker/",
            "urlToImage": "https://images.unsplash.com/photo-1636307780559-c876ff1ef9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "publishedAt": "2023-03-31T06:00:00+00:00",
            "content": "Klingt nach Science Fiction, passiert aber in der harten Realität des Berliner Weddings: Cellbricks stellt menschliches Gewebe mit dem 3D-Drucker her. Wir waren dort und haben zugeschaut.Es gibt Star… [+10429 chars]"
        },
        {
            "source": {
                "id": "next-big-future",
                "name": "Next Big Future"
            },
            "author": "Brian Wang",
            "title": "Alphafold AI and Robotic Science Lab Identified a New Liver Cancer Treatment | NextBigFuture.com",
            "description": "AlphaFold accelerates artificial intelligence powered drug discovery: efficient discovery of a novel CDK20 small molecule inhibitor”) has applied AlphaFold to",
            "url": "https://www.nextbigfuture.com/2023/03/alphafold-ai-and-robotic-science-lab-identified-a-new-liver-cancer-treatment.html",
            "urlToImage": "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "publishedAt": "2023-03-30T21:20:30Z",
            "content": "AlphaFold accelerates artificial intelligence powered drug discovery: efficient discovery of a novel CDK20 small molecule inhibitor) has applied AlphaFold to an end-to-end AI-powered drug discovery p… [+2850 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Alejandro de la Garza",
            "title": "More States Want Students to Learn About Climate Science. Ohio Disagrees",
            "description": "An Ohio bill would force college instructors to teach proven falsehoods and misleading fossil fuel talking points about climate change.",
            "url": "http://time.com/6266938/ohio-climate-change-education-bill-culture-war/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2023/03/ohio-state-climate-education.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2023-03-29T20:45:52Z",
            "content": "If you attend a college-level earth science class in Ohio in the coming years, you might learn about how climate change is causing heat waves, flooding, and record storms, and how humanity has a shri… [+5656 chars]"
        },
        {
            "source": {
                "id": "medical-news-today",
                "name": "Medical News Today"
            },
            "author": "Hannah Flynn",
            "title": "Treating a heart attack before it happens: It may not be a science fiction",
            "description": "Researchers discovered a mechanism that allows them to treat heart tissue in mice, before a heart attack, in a way that provides protection months later.",
            "url": "http://www.medicalnewstoday.com/articles/treating-a-heart-attack-months-before-it-happens-it-may-not-be-a-science-fiction",
            "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/03/heart_attack_Stocksy_txp8c7b6a71sBf300_Medium_2932441_Thumb.jpg",
            "publishedAt": "2023-03-20T20:47:00Z",
            "content": "<ul><li>The effects of a heart attack are often permanent, as the heart tissue cannot regenerate, unlike some other tissues. </li><li>This means that despite somebody surviving a heart attack, the da… [+6606 chars]"
        },
        {
            "source": {
                "id": "hacker-news",
                "name": "Hacker News"
            },
            "author": null,
            "title": "bigscience/T0pp · Hugging Face",
            "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science.",
            "url": "https://huggingface.co/bigscience/T0pp",
            "urlToImage": "https://huggingface.co/front/thumbnails/v2-2.png",
            "publishedAt": "2021-10-18T16:37:20.4140551Z",
            "content": "Model Description\r\nT0* is a series of encoder-decoder models trained on a large set of different tasks specified in natural language prompts. We convert numerous English supervised datasets into prom… [+11344 chars]"
        },
        {
            "source": {
                "id": "hacker-news",
                "name": "Hacker News"
            },
            "author": null,
            "title": "Opening up a physics simulator for robotics",
            "description": "As part of DeepMind's mission of advancing science, we have acquired the MuJoCo physics simulator and are making it freely available for everyone, to support research everywhere.",
            "url": "https://deepmind.com/blog/announcements/mujoco",
            "urlToImage": "https://lh3.googleusercontent.com/jVZ3VN7wwx2dSowqLmhqm0qAzAmcb-1t7ks3HiNnoHknihF5sl9VDEwuCNTSxfx8jFIi7mBQkvHUdnSKXSPgYLNpvCuE4YajJeMnrYA",
            "publishedAt": "2021-10-18T16:07:20.4749314Z",
            "content": "Advancing research everywhere with the acquisition of MuJoCo\r\nWhen you walk, your feet make contact with the ground. When you write, your fingers make contact with the pen. Physical contacts are what… [+1849 chars]"
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": "Nadia Drake",
            "title": "How these feuding map-makers shaped our fascination with Mars",
            "description": "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
            "url": "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
            "urlToImage": "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
            "publishedAt": "2021-02-17T14:37:21.3706142Z",
            "content": null
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": null,
            "title": "Episode 3: Why War Zones Need Science Too",
            "description": "Undaunted by Yemen’s civil war, National Geographic explorer Ella Al-Shamahi searches on the island of Socotra for traces of the earliest known humans to leave Africa.",
            "url": "https://www.nationalgeographic.com/podcasts/overheard/season-5/episode-3-why-war-zones-need-science.html",
            "urlToImage": "https://images.unsplash.com/photo-1579713899713-bcd3efe713aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "publishedAt": "2021-02-17T14:37:20.2759318Z",
            "content": null
        }
    ]
    constructor() {
        super();
        console.log("Hello! I am a constructor from News Components");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row ">
                    {this.state.articles.map((element) => {
                      return  <div className="col-md-3" key={element.url}>
                            <Newsitem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News