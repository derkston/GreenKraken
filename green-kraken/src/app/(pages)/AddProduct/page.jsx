'use client'

import { createContext, useState } from 'react'
import { Container } from '../../../ui/Container/Container'
import style from './AddProduct.module.css'
import {  deleteProduct, getAllProductQuantity, getProductLocal, handleSubmitForm } from '../../../services/AddProduct/AddProduct';
import { CodeItem } from '../../../ui/CodeItem/Code';








export default function AddProduct(){
    const [products , setProducts] = useState(getProductLocal());
    return <main>
        <Container>
            <section className={style.products}>
                <div className={style.products__form}>
                    <h2>Добавьте  продукт</h2>
                    <form  onSubmit={(e) => handleSubmitForm(e , setProducts)} >
                        <input type="text" name='categories' placeholder='Введите категорию' />
                        <input type="text" name='name' placeholder='Введите название' />
                        
                        <input type="number" name='quantity'placeholder='Введите кол-во' />
                        <input type='number' name='id' placeholder='Укажите id'/>
                        <button type='submit'>Отправить</button>
                    </form>
                    <CodeItem/>
                   
                </div>
        
                     <table className={style.products__list}>
                         <caption><h2>Ваши продукты</h2></caption>
                        <thead>
                            <tr>
                                <th>Категория</th>
                                <th>Название</th>
                                <th>Номер</th>
                                <th>Количество</th>
                                <th>Удалить продукт</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(e => {
                               return <tr key={e.id}>
                                    <td>{e.categories}</td>
                                    <td>{e.name}</td>
                                    <td>{e.id}</td>
                                    <td>{e.quantity}</td>
                                    <td>
                                        <button onClick={event => deleteProduct(event , e , setProducts)}>Удалить продукт</button>
                                    </td>
                                </tr>
                            }) }
                            <tr className={style.table_quantity}><td>Общее количество товара:<b>{getAllProductQuantity(products)}</b></td></tr>
                        </tbody>
                    </table>
      
            </section>
        </Container>
    </main>
}

