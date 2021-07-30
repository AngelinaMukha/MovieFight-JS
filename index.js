const fetchData=async(searchData)=>{
    const response = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey: '4f3af505',
            s: searchData
        }
    })
}
const input = document.querySelector('input');
const onInput=(event)=>{
    fetchData(event.target.value);
};

input.addEventListener('input',onInput);















// const fetchData = async(searchTerm)=>{
//     const response = await axios.get('http://www.omdbapi.com/', {
//         params:{
//             apikey: '4f3af505',
//             s: searchTerm
//         }
//     });

//     console.log(response.data);
// };
// const input = document.querySelector('input');

// let timeoutId;
// const onInput = (event) => {
//     if(timeoutId){
//         clearTimeout(timeoutId);
//     }
//     timeoutId=setTimeout(()=>{
//         fetchData(event.target.value);
//     },1000)
    
// };
// input.addEventListener('input', onInput);


