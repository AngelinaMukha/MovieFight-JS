const fetchData = async()=>{
    const response = await axios.get('http://www.omdbapi.com/', {
        params:{
            apikey: '4f3af505',
            i: "tt0848228"
        }
    });


    console.log(response.data);
};

fetchData();
