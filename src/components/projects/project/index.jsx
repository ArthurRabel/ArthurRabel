import './index.css';

export default function project({urlImg,title,text,skills,urlAcessar}) {
    return (
        <article className='c-project'>
            <img alt='foto do projeto' src={urlImg} width='800'></img>
            <h2>{title}</h2>
            <p className='c-project__skills'>{skills}</p>  
            <p className='c-project__text'>{text}</p>
            <a href={urlAcessar}>Acessar</a>
        </article>
    );
}