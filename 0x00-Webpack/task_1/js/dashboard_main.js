// dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

// Elements in the specified order
const elements = [
	$('<p>').text('Holberton Dashboard'),
	$('<p>').text('Dashboard data for the students'),
	$('<button>').text('Click here to get started').on('click', _.debounce(updateCounter, 500)),
	$('<p>').attr('id', 'count'),
	$('<p>').text('Copyright - Holberton School')
];
// Append elements to the body
	$(document.body).append(elements);
// Counter for button clicks
	let count = 0;
// Function to update the counter
	function updateCounter() {
		count++;
		$('#count').text(`${count} clicks on the button`);
	}
