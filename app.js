// Replace the following values with your own
const username = "superjjy";
const repository = "home";

// Handle form submission
$("form").submit(function(event) {
	event.preventDefault();

	// Get form values
	const input = $("#input-field").val();
    	const token = $("#token-field").val();

	// Create data object
	const data = {
		name: input,
	};

	// Send data to GitHub repository using API
	$.ajax({
		url: `https://api.github.com/repos/${username}/${repository}/issues`,
		type: "POST",
		headers: {
			Authorization: `${token}`
		},
		data: JSON.stringify(data),
		success: function(response) {
			// Display success message
			alert("Thank you for submitting the questionnaire!");
			// Reset form
			$("form")[0].reset();
		},
		error: function(xhr, status, error) {
			// Display error message
			alert(`An error occurred: ${error}`);
		}
	});
});
