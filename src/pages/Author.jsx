import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FetchAPI from '../hooks/FetchAPI';

// COMPONENTS
import Loading from '../components/Loading';


function Author() {
    const { name } = useParams();
    const URL = `https://poetrydb.org/author/${name}`
    
    const author = FetchAPI(URL);


  return (
    <section className='Author'>
        {
            author ? (
            <>
                <h3 className='author-name'>{author[0].author}</h3>
                <div className="poems-container">
                {
                    author.map((poem, i) => (
                        <Link to={`/Author/${poem.author}/${poem.title}`} className="poem-title" key={i}>{poem.title}</Link>
                    ))
                }
                </div>
            </>
            ) : (
                <Loading />
            )

        }
    </section>
  )
}

export default Author;