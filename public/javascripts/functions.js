window.onload = function() {

const productName = document.getElementById('productName');
const productPrice = document.getElementById ('productPrice');
const addBtn = document.getElementById('addBtn');
const searchBtn = document.getElementById('searchBtn');
// const removeBtn = document.getElementsById('removeBtn');


addBtn.addEventListener('click', (e) => {

    fetch('/products', {
        method: 'PUT',
        body: JSON.stringify({
            name: productName.value,
            price: productPrice.value 
        }), headers: {
            'Content-Type': 'application/json'
      }
    }).then(()=> {
        alert('added successfully')
        productName.value=""
        productPrice.value=""
    }).catch(() => {
        alert('there was an error')
    })
});

searchBtn.addEventListener('click', (e) =>{
    location.href='/search.html'
})


}



