import React from 'react'
import { useParams } from 'react-router-dom';
import FetchAPI from '../hooks/FetchAPI';


// COMPONENTS
import Loading from '../components/Loading';

function Author() {
    const { title } = useParams();
    const URL = `https://poetrydb.org/title/${title}`
    
    const poem = FetchAPI(URL);
    console.log(poem)

  return (
    <section className='Poem'>
        { 
            poem ? (
            <article className='poem'>
                <h2 className='poem-title'>{poem[0].title}</h2>
                <h3 className='author-name'>{poem[0].name}</h3>
                {
                    poem[0].lines.map(line => (
                        line == "" ? (
                            <br />
                        ) : (
                            <p className='line'>{line}</p>
                        )
                    ))
                }
            </article>
            ) : (
                <Loading />
            )
        }
    </section>
  )
}

export default Author