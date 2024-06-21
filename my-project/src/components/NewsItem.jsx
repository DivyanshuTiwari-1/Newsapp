import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            
                <div className=" flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
                    
                   <div className=' mb-3  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40'>
                     
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className=" " alt="..." />
                    </div>
                    <div className="">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{title}  </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inheritt">{description.slice(0,150)}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
               
                </div>
            
        )
     
}

export default NewsItem
