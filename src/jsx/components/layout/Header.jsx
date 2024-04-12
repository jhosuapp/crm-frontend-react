import logo from '../../../assets/svg/icon-react.svg';

//Components layout
import { Hamburger } from './HeaderHamburguer';
import { HeaderNaV } from './HeaderNav';

const Header = ()=> (
    <header>
        <div>
            <a href="/">
                <img src={ logo } alt="Logo Header" />
                <p>CRM - React</p>
            </a>
            <HeaderNaV />
            <Hamburger />
        </div>
    </header>
);

export { Header };