const banderas = document.getElementById('banderas')

//accedemos a toda la url
const query =  new URLSearchParams(window.location.search)
//parametro de la url como get con el nombre "name"
const params =  query.get('name')


document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res =  await fetch('https://restcountries.eu/rest/v2/all')
        const data =  await res.json()
        
        //obteniendo los datos del filtro por nombre del pais
        const filtroData =  data.filter(item => item.name === params)
        banderillas(filtroData)
        

    } catch (error) {
        console.log(error)
    }
}

const banderillas =  data => {
    let elementos= ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Region: </b>
                    ${item.region}
                </p>
            </div>
       </article>   
        `
    });

    banderas.innerHTML = elementos
}