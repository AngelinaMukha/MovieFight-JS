const fetchData = async(searchTerm)=>{
    const response = await axios.get('http://www.omdbapi.com/', {
        params:{
            apikey: '4f3af505',
            s: searchTerm
        }
    });
    const divExists=document.body.querySelector('#target div');
    if(divExists){
        var divs = document.getElementById("target");
        while (divs.firstChild) {
            divs.removeChild(divs.firstChild);
        }
    }
    if(response.data.Error){
        const target = document.querySelector('#target');
        const div =document.createElement('div');
        div.innerHTML =`
        <h1>Not found</h1>
        `;
        target.appendChild(div);
        return [];
    }
    return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async (event) => {
    let movies = await fetchData(event.target.value);
    for(let movie of movies){
        const target = document.querySelector('#target');
        const div =document.createElement('div');
        div.innerHTML =`
        <img src="${movie.Poster}"/>
        <h1>${movie.Title}</h1>
        `;
        target.appendChild(div);
    }
};
input.addEventListener('input', debounce(onInput, 1000));


