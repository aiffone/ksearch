const getData = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:5000/api/users/local",
    dataType: "json",
    success: function (result) {
      console.log(result);
      if (result.length < 1) {
        $("#txt").html("No Student found");
      } else {
        $("#txt").html(result.length + " Students");
      }
      result.forEach((element) => {
        const tableRow =
          "<tr class='row100 body'>" +
          "<td class='cell100 column1'>" +
          element.firstName +
          "</td>" +
          "<td class='cell100 column2'>" +
          element.lastName +
          "</td>" +
          "<td class='cell100 column3'>" +
          element.email +
          "</td>" +
          "<td class='cell100 column4'>" +
          element.age +
          "</td>" +
          "<td class='cell100 column5'>" +
          element.gender +
          "</td>" +
          "<td class='cell100 column6'>" +
          element.department +
          "</td>" +
          "<td class='cell100 column7'>" +
          element.address +
          "</td>" +
          "<td class='cell100 column8'>" +
          element.buzzWord +
          "</td>" +
          "</tr>";
        $("#studentTable").append(tableRow);
      });
    },
    error: function (err) {
      console.log(err);
    },
  });
};

const getDataWithParam = (arg) => {
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/api/users/local/search",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({ searchTerm: arg }),
    success: function (result) {
      console.log(result);
      if (result.length < 1) {
        $("#txt").html("No Student found");
      } else {
        $("#txt").html(result.length + " Students");
      }
      result.forEach((element) => {
        const tableRow =
          "<tr class='row100 body'>" +
          "<td class='cell100 column1'>" +
          element.firstName +
          "</td>" +
          "<td class='cell100 column2'>" +
          element.lastName +
          "</td>" +
          "<td class='cell100 column3'>" +
          element.email +
          "</td>" +
          "<td class='cell100 column4'>" +
          element.age +
          "</td>" +
          "<td class='cell100 column5'>" +
          element.gender +
          "</td>" +
          "<td class='cell100 column6'>" +
          element.department +
          "</td>" +
          "<td class='cell100 column7'>" +
          element.address +
          "</td>" +
          "<td class='cell100 column8'>" +
          element.buzzWord +
          "</td>" +
          "</tr>";
        $("#studentTable").append(tableRow);
      });
    },
    error: function (err) {
      console.log(err.status, err.statusText);
    },
  });
};

const searchNow = () => {
  $("#studentTable").children().remove(); //clear the current contant of the table in index.html
  const searchData = $("#search").val(); // get the value/text in the search box in index.html
  const param = searchData.toLocaleLowerCase(); // conver the text gotten into lowercase to help our search
  if (searchData !== undefined && searchData.length > 0) {
    //check if search parameter is valid i.e is not empty or is undefined
    getDataWithParam(param); //this method is called if a user has entered a search parameter in the search box in index.htnl
    return;
  }
  getData(); //this method is only called if search box is empty or has no input
  return;
};
