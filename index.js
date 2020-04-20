const fetchData = async (searchTerm) => {
  const response = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: "99a08554",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  fetchData(event.target.value);
});
