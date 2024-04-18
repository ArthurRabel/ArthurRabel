import Arrow from './arrow/index.js';

import './index.css';

export default function Hero() {
    return (
        <> 
            <section className='c-introduction'>
                <div className='gs-wrapper c-introduction__wrapper'>
                    <h2 className='gs-animation-from-left'>Olá, seja bem-vindo</h2>
                    <h1 className='gs-animation-from-left'>Meu nome é <span className='c-introduction__special_Text'>Arthur</span>, um <span className='c-introduction__special_Text'>desenvolvedor web</span></h1>
                    <p className='gs-animation-from-left'>Ansioso para me juntar a uma equipe inovadora e contribuir para o sucesso de projetos empolgantes.</p>
                </div>
                <Arrow />
            </section>
        </>
    );
}