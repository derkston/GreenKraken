export function handleSubmitForm(e , updateState){
        e.preventDefault();
        
        // Преобразование e.target в обькет 
        const data = Object.fromEntries(new FormData(e.target).entries())
        // Преобразование в массив , где e[1] это значения input
        const newData = [...new FormData(e.target).entries().filter(e => e[1] != '')];
        if (newData.length < 4){
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

export function deleteProduct(e , product , setProduct){
        e.preventDefault()
        
        localStorage.setItem('products' , ConversionLocal(getProductLocal().filter(e => e.id != product.id)))
        setProduct(getProductLocal())
}
export function getAllProductQuantity(products){
    
        if(products.length < 0){
            return +products[0].quantity
        }else {
            return products.reduce((acc , product ) => {
                return acc + +product.quantity
            },0)
        }
}