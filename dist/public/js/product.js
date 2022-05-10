const socket = io();

const renderProductList = () =>{
    fetch('/api/v1/product')
        .then( response => response.json())
        .then( data => {
            let html = data.map( product =>{
                return(`<tr>
                            <td>${product.code}</td>
                            <td>${product.title}</td>
                            <td>${product.price}</td>
                            <td>${product.stock}</td>
                        </tr>
                `)
            }).join(' ');
            document.querySelector('#product-table').innerHTML = html;
        })
        .catch( error => console.log(error));
    
}

socket.on('productList', products => {return renderProductList()});
