const socket = io();
const productsTable = document.querySelector('#product-table'); //Table from footer.ejs


socket.on('productList', products =>{
    if(products){
        productsTable.innerHTML = ''; // To prevent multiplication of products in table
        products.forEach( product =>{
            productsTable.innerHTML += `<tr>
          <td>${product.id}</td>
          <td><strong>${product.title}</strong></td>
          <td>${product.price}</td>
          <td><img src="${product.thumbnail}" width="30" /></td>
          </tr>`;
        })
    }
});

