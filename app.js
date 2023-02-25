const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const entries = Array.from(formData.entries());
  const input = $('#input').val();
  const token = $('#token').val();
  const data = {
	input: input
  };

  entries.forEach(([key, value]) => {
    data[key] = value;
  });

  fetch('https://api.github.com/repos/SUPERJJY/home/contents/data.json', {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ${token}',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Add form data',
      content: btoa(JSON.stringify(data)),
      branch: 'main',
      path: 'data.json'
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
