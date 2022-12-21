import React from 'react'
import { Link } from 'react-router-dom';

// CUSTOM HOOKS
import FetchAPI from '../hooks/FetchAPI';

// COMPONENTS
import Loading from '../components/Loading';

function Home() {
    const URL = "https://poetrydb.org/author";

    const data = FetchAPI(URL);

  return (
    <section className='Authors'>
        <h2 className='title'>Authors: </h2>
        <div className="authors-container">
        {
            data ? (
                data.authors.map((author, i) => (
                    <Link to={`/Author/${author}`} key={i}>{author}</Link>
                ))
            ) : (
                <Loading />
            )
        }
        </div>
    </section>
  )
}

export default Home;