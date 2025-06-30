'use client'

import { useState } from 'react'
import style from './Catalog.module.css'
import { getProductLocal } from '../../../services/AddProduct/AddProduct'
import { ProductItem } from '../AddProduct/ProductItem/ProductItem'
import { Container } from '../../../ui/Container/Container'

export default function Catalog(){
    const [products , setProducts] = useState(getProductLocal())
    // Категории товаров 
    const categories = new Set(getProductLocal().map(e => e.categories)) ;
    
    function postProductCategories(e , categories ){
        e.preventDefault();
        const filterProducts = getProductLocal().filter(e => e.categories == categories)
        setProducts(filterProducts)
    }

    return <main>
        <Container>
            <section className={style.catalog}>
                <div className={style.catalog__filter}>
                    <button onClick={(e) => setProducts(getProductLocal())}>Все</button>
                    {[...categories].map(categories => {
                        
                        return <button key={categories} onClick={(e) => postProductCategories(e , categories) }>
                            {categories}
                        </button>
                    })}
                </div>
                <ul className={style.catalog__list}>
                    {products.map(e => <ProductItem key={e.id} product={e} setProduct={setProducts}/>)}
                </ul>
                
            </section>
            
        </Container>
    </main>
}