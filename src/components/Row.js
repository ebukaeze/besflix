import React, { useState } from 'react';


function RowPost({title}) {
 const [ movies, setMovie ] = useState([])
    return(
        <div className="row">
            <h2>{title}</h2>
            <section className="movie-row container">

            </section>

        </div>
    )
}

export default RowPost;