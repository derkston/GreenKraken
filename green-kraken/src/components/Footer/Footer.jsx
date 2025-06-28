import Link from 'next/link'
import { Container } from '../../ui/Container/Container'
import style from './Footer.module.css'

export default function Footer(){

    return <footer>
        <Container>
            <div className={style.footer__content}>
                <ul className={style.footer__list}>
                    <li className={style.footer__list_item}>
                        <ul className={style.footer__list_two}>
                            <h3>Помощь</h3>
                            <li className={style.footer__list_two_item}>
                                    <Link href='/Questions'>
                                        Частые вопросы
                                    </Link>
                            </li>
                            <li className={style.footer__list_two_item}>
                                    <Link href='/Delivery'>
                                        Доставка и самовывоз
                                    </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={style.footer__list_item}>
                        <ul className={style.footer__list_two}>
                            <h3>Политика и условия</h3>
                            
                            <li className={style.footer__list_two_item}>
                                <Link href='/Policy'>
                                    Политика конфиденциальности
                                </Link>
                            </li>
                            <li className={style.footer__list_two_item}>
                                <Link href='/Terms_service'>
                                    Условия предоставления услуг
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={style.footer__list_item}>
                        <ul className={style.footer__list_two}>
                            <h3>Служба клиентской поддержки</h3>
                            <li className={style.footer__list_two_item}>
                                    <Link href='email:stepaarkadevich2019@gmail.com'>stepaarkadevich2019@gmail.com</Link>
                                    <Link href='tel:89089078760'>89089078760</Link>
                            </li>
                            <li className={style.footer__list_two_item}>
                                Звонки принимаются ежедневно<br /> с 10:00 до 22:00 по МСК.
                            </li>
                        </ul>
                    </li>
                    <li className={style.footer__list_item}>
                        <ul className={style.footer__list_two}>
                            <h3>Адрес складов</h3>
                            <li className={style.footer__list_two_item}>
                                    Москва, Кутузовский проспект 48 <br />ТЦ Галереи "Времена Года", 3 этаж.
                            </li>
                            <li className={style.footer__list_two_item}>
                                    Время работы: ежедневно с 11:00 <br /> до 22:00.
                            </li>
                            <li className={style.footer__list_two_item}>
                                    Московская область, деревня Воронки,<br />
                                    1 к. 4. ТЦ Архангельское Аутлет.
                            </li>

                        </ul>
                    </li>
                </ul>

            </div>
        </Container>
    </footer>
}