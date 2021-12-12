var url = "http://localhost:3300/api/instrumentos";

fetch(url)
.then(response => response.json())
.then(data => {
;
    let res = document.querySelector('#elem');
    res.innerHTML = '';

    for (let item of data){
        re.innerHTML += `
        <p>${item.name}</p>`

    }





    

    
    console.log(data)
})

.catch(err => console.log(err))