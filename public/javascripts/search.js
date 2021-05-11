window.onload = function() {
    // const searchBtn = document.getElementById('searchBtn');
    const result = document.getElementById('result');
    const searchValue = document.getElementById('searchValue');
    const backBtn = document.getElementById('backBtn');

    searchValue.addEventListener('input', (e) => {
        fetch(`/products/${searchValue.value}`, {
            method: 'GET',
            
        }).then((response) => {
            if (!response.ok) {
                throw new Error()
            }
            return response.json()
        }).then((json) => {
            result.innerHTML=""
            json.forEach((product)=>{
                result.innerHTML+=`<div>${JSON.stringify(product)}</div>`
            })
        }).catch(() => {
            alert('there was an error')
        })
    });
    backBtn.addEventListener('click', (e) =>{
        location.href='/index.html'
    })
}
    