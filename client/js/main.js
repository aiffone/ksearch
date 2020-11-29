
(function ($) {
	"use strict";
	$('.column100').on('mouseover', function () {
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable') + "";
		var column = $(this).data('column') + "";

		$(table2).find("." + column).addClass('hov-column-' + verTable);
		$(table1).find(".row100.head ." + column).addClass('hov-column-head-' + verTable);
	});

	$('.column100').on('mouseout', function () {
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable') + "";
		var column = $(this).data('column') + "";

		$(table2).find("." + column).removeClass('hov-column-' + verTable);
		$(table1).find(".row100.head ." + column).removeClass('hov-column-head-' + verTable);
	});


})(jQuery);


const getData = () => {
	$.ajax({
		type: "GET",
		url: "http://localhost:5000/api/users/local",
		dataType: "json",
		success: function (result) {
			console.log(result);
			if (result.length < 1) {
				$("#txt").html('No Student found');
			} else {
				$("#txt").html(result.length + ' Students');
			}
			result.forEach(element => {
				const tableRow = "<tr class='row100 body'>" +
					"<td class='cell100 column1'>" + element.firstName + "</td>" +
					"<td class='cell100 column2'>" + element.lastName + "</td>" +
					"<td class='cell100 column3'>" + element.email + "</td>" +
					"<td class='cell100 column4'>" + element.age + "</td>" +
					"<td class='cell100 column5'>" + element.gender + "</td>" +
					"<td class='cell100 column6'>" + element.department + "</td>" +
					"<td class='cell100 column7'>" + element.address + "</td>" +
					"<td class='cell100 column8'>" + element.buzzWord + "</td>" +
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
			if (result.length < 1) {
				$("#txt").html('No Student found');
			} else {
				$("#txt").html(result.length + ' Students');
			}
			result.forEach(element => {
				const tableRow = "<tr class='row100 body'>" +
					"<td class='cell100 column1'>" + element.firstName + "</td>" +
					"<td class='cell100 column2'>" + element.lastName + "</td>" +
					"<td class='cell100 column3'>" + element.email + "</td>" +
					"<td class='cell100 column4'>" + element.age + "</td>" +
					"<td class='cell100 column5'>" + element.gender + "</td>" +
					"<td class='cell100 column6'>" + element.department + "</td>" +
					"<td class='cell100 column7'>" + element.address + "</td>" +
					"<td class='cell100 column8'>" + element.buzzWord + "</td>" +
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