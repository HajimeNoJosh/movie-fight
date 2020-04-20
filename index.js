const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
      params: {
          apikey: '99a08554',
          s: 'avengers'
      }
  });

  console.log(response.data)
};

fetchData()
