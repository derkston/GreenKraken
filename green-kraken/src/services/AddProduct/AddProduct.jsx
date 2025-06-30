export function handleSubmitForm(e , updateState){
        e.preventDefault();
        
        // Преобразование e.target в обькет 
        const data = Object.fromEntries(new FormData(e.target).entries())
        // Преобразование в массив , где e[1] это значения input
        const newData = [...new FormData(e.target).entries().filter(e => e[1] != '')];
        if (newData.length < 3){
            alert('У вас пустые значения')
        }else{
            addProductLocal(data)
            updateState(getProductLocal())
        }
        
        
}

export function addProductLocal(product){
    const products = getProductLocal()   
    localStorage.setItem('products' , ConversionLocal([...products.filter(e => e.id != product.id) , product]))
}
export function getProductLocal() {
    const product = localStorage.length != 0 ? JSON.parse(localStorage.getItem('products')) : [{name : 'ничего нет' , id : 0 , quantity : 0,}] ;
    return  product

}
export function ConversionLocal(item){
    return JSON.stringify(item)
}

