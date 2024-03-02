import logo from '../../../assets/svg/logo.svg';

//Components layout
import { Hamburger } from './Hamburguer';

const Header = ()=> (
    <header>
        <div>
            <a href="/">
                <img src={ logo } alt="Logo Header" />
                <p>CRM - React</p>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="#">Clientes</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Pedidos</a>
                    </li>
                </ul>
            </nav>
            <Hamburger />
        </div>
    </header>
);

export { Header };