
import style from './Header.module.css';
import { Container } from '../../ui/Container/Container';
import Navigation from '../Navigation/Navigation';
import Basket from '../../ui/Basket/Basket';
import Logo from '../../ui/Logo/Logo';

export default function Header(){
    return <header>
        <Container>
            <div className={style.header__content}>
                <Logo color=' #1E5945' />
                <Navigation/>
                <Basket />
            </div>
        </Container>
    </header>
}