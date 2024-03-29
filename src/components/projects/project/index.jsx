import './index.css';

export default function project({urlImg,title,text,skills,urlGithub}) {
    return (
        <article className='c-project'>
            <img alt='foto do projeto' src={urlImg} width='800'></img>
            <h2>{title}</h2>
            <p className='c-project__text'>{text}</p>
            <p className='c-project__skills'>{skills}</p>  
            <a href={urlGithub}>Github</a>
        </article>
    );
}