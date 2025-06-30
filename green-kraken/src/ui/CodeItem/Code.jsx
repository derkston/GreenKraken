import style from './Code.module.css'

export function CodeItem(){

    return <div className={style.code} >
        <code>{localStorage.getItem('products')}</code>
    </div>
    
}