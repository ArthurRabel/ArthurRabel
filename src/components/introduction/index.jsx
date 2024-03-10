import Arrow from '../arrow/index.jsx';

import './index.css';

export default function introduction() {
    return (
        <>
            <section className='c-introduction'>
                <h2>Olá, seja bem-vindo</h2>
                <h1>Meu nome é <span>Arthur</span>, um <span>desenvolvedor web</span></h1>
                <p>Ansioso para me juntar a uma equipe inovadora e contribuir para o sucesso de projetos empolgantes.</p>
            </section>
            <Arrow />
        </>
    );
}