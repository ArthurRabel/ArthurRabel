import React from 'react';

import './index.css';

export default function project({urlImg,title,text,skils,urlGithub}) {
    return (
        <>
            <article className='c-project'>
                <img src={urlImg} width="800"></img>
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <p>{skils}</p>  
                    <a href={urlGithub}><button>Github</button></a>
                </div>
            </article>
        </>
    );
}