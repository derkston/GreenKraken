import { Container } from '../ui/Container/Container'
import style from './home.module.css'
import Image from 'next/image'
import preview from '../../public/preview.jpg'
export default function Page(){
    return <main>
        <section className={style.preview}>
            <Container>
                <div className={style.section__content}>
                    <div className="preview__text">
                        <h1>Оригинальные товары <br /> на GreenKraken</h1>
                        <PreviewList/>
                    </div>
                    <Image 
                        src={preview}
                        
                        alt=''
                    />    
                </div>
            </Container>
        </section>
    </main>
}

function PreviewList(){
    return <ul className={style.preview__list}>
        <li className={style.preview__list_item}>Доставка по всей России бесплатно</li>
        <li className={style.preview__list_item}>Официально зарегистрированное юридическое лицо</li>
        <li className={style.preview__list_item}>Оформление и оплата заказа как в магазине</li>
        <li className={style.preview__list_item}>Только сертифицированные товары из каталога POIZON</li>
        <li className={style.preview__list_item}>Доставили более 10 000 посылок за 3 года</li>
    </ul>
}