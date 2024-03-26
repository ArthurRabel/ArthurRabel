import Arrow from '../arrow/index.jsx';

import './index.css';

export default function introduction() {
    return (
        <> 
            <section className='c-introduction'>
                <div className='wrapper c-introduction__wrapper'>
                    <h2 className='animation'>Olá, seja bem-vindo</h2>
                    <h1 className='animation'>Meu nome é <span>Arthur</span>, um <span>desenvolvedor web</span></h1>
                    <p className='animation'>Ansioso para me juntar a uma equipe inovadora e contribuir para o sucesso de projetos empolgantes.</p>
                </div>
                <Arrow />
            </section>
        </>
    );
}