function obtenerProductos() {
    axios.get('http://localhost:7676/MyProducts')
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function agregarProducto(){
    var params = new URLSearchParams();
    
    params.append("name", "Asus VivoBook")
    params.append("price", 25000)
    params.append("category", "computers")
    params.append("description", "hola 123")

    axios.post('http://localhost:7676/NewProduct', params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}