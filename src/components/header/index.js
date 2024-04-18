"use client";
import ToggleTheme from './themeToggle/index.js';
import './index.css';

export default function Header() {
    return (
        <header className='c-header'>
            <ul>
                <li><a aria-label="Ir para parte que fala sobre mim" href='#about'>Sobre mim</a></li>
                <li><a aria-label="Ir para parte que fala sobre os projetos que fiz" href='#projects'>Projetos</a></li>
                <li><ToggleTheme /></li>
            </ul>
        </header>
    );
}