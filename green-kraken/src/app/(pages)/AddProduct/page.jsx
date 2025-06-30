'use client'

import { useState } from 'react'
import { Container } from '../../../ui/Container/Container'
import style from './AddProduct.module.css'
import { ConversionLocal, getProductLocal, handleSubmitForm } from '../../../services/AddProduct/AddProduct';








export default function AddProduct(){
    const [products , setProducts] = useState(getProductLocal());
    
    
    function deleteProduct(e , product){
        e.preventDefault()
        console.log(getProductLocal().filter(e => e.id != product.id))
        localStorage.setItem('products' , ConversionLocal(getProductLocal().filter(e => e.id != product.id)))
        setProducts(getProductLocal())
    }
    
    function ProductItem({product}){
        return <li className={style.product}>
            <h3>Название: {product.name} </h3>
            <p><span>Номер: <b>{product.id}</b></span> <span>Количество: <b>{product.quantity}</b></span></p>
            <div className={style.product__buttons}>
                <button onClick={e => deleteProduct(e , product)}>Удалить продукт</button>
                <button>Редактировать товар</button>
            </div>
        </li>
    }
    

    return <main>
        <Container>
            <section className={style.products}>
                <div className={style.products__form}>
                    <h2>Добавьте  продукт</h2>
                    <form  onSubmit={(e) => handleSubmitForm(e , setProducts)} >
                        
                        <input type="text" name='name' placeholder='Введите название' />
                        <input type="number" name='quantity'placeholder='Введите кол-во' />
                        <input type='number' name='id' placeholder='Укажите id'/>
                        <button type='submit'>Отправить</button>
                    </form>
                </div>
                <div className={style.products__list}>
                    <h2>Ваши продукты</h2>
                    <ul>
                        { products.map(e => <ProductItem key={e.id} product={e}/> )}
                    </ul>
                </div>
            </section>
        </Container>
    </main>
}

