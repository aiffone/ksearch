
const getData = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:5000/api/users/local",
    dataType: "json",
    success: function (result) {
      console.log(result);
    },
    error: function (err) {
      console.log(err);
    }
  });
}

const getDataWithParam = (arg) => {
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/api/users/local/search",
    data: { "searchTerm": arg },
    dataType: "json",
    success: function (result) {
      console.log(result);
    },
    error: function (err) {
      console.log(err);
    }
  });
}

const searchNow = () => {
  const searchData = $("#search").innerHtml;
  console.log(searchData);
  if (searchData !== undefined && searchData.length > 0) {

    console.log("search data is NOT empty");
    getDataWithParam(searchData);
    return;
  }
  console.log("search data IS empty");
  getData();
  return;
}