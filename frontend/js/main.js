
const getData = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:5000/api/users/local",
    dataType: "json",
    success: function (result) {
      console.log(result);
      result.forEach(element => {
        const tableRow = "<tr>" +
          "<td>" + element.firstName + "</td>" +
          "<td>" + element.lastName + "</td>" +
          "<td>" + element.email + "</td>" +
          "<td>" + element.age + "</td>" +
          "<td>" + element.gender + "</td>" +
          "<td>" + element.department + "</td>" +
          "<td>" + element.address + "</td>" +
          "<td>" + element.buzzWord + "</td>" +
          "</tr>";
        $("#studentTable").append(tableRow);
      });
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
    dataType: "json",
    contentType: 'application/json',
    data: JSON.stringify({ 'searchTerm': arg }),
    success: function (result) {
      console.log(result);
      result.forEach(element => {
        const tableRow = "<tr>" +
          "<td>" + element.firstName + "</td>" +
          "<td>" + element.lastName + "</td>" +
          "<td>" + element.email + "</td>" +
          "<td>" + element.age + "</td>" +
          "<td>" + element.gender + "</td>" +
          "<td>" + element.department + "</td>" +
          "<td>" + element.address + "</td>" +
          "<td>" + element.buzzWord + "</td>" +
          "</tr>";
        $("#studentTable").append(tableRow);
      });
    },
    error: function (err) {
      console.log(err.status, err.statusText);
    }
  });
}

const searchNow = () => {
  $("#studentTable").children().remove();
  const searchData = $("#search").val();
  const param = searchData.toLocaleLowerCase();
  if (searchData !== undefined && searchData.length > 0) {
    getDataWithParam(param);
    return;
  }
  getData();
  return;
}