import {  deleteProduct,  } from '../../../../services/AddProduct/AddProduct'
import style from './ProductItem.module.css'

export function ProductItem({product , setProduct}){
        return <li className={style.product}>
            <h2>Категория: {product.categories}</h2>
            <h3>Название: {product.name} </h3>
            <p><span>Номер: <b>{product.id}</b></span> <span>Количество: <b>{product.quantity}</b></span></p>
            <div className={style.product__buttons}>
                <button onClick={e => deleteProduct(e , product , setProduct)}>Удалить продукт</button>
                <button>Редактировать товар</button>
            </div>
        </li>
}

