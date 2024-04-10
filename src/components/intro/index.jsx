import './index.css';
import Logo from '../../../public/favicon/mstile-150x150.png';

export default function Intro(){
    return (
    <div className="c-intro">
        <img src={Logo} alt="Minha logo" className="c-intro__animation"/>
    </div>
    )
}