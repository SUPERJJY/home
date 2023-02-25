const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const entries = Array.from(formData.entries());
  const input = $('#input').val();
  const data = {
	input: input
  };

  entries.forEach(([key, value]) => {
    data[key] = value;
  });

  fetch('https://api.github.com/repos/SUPERJJY/home/contents/data.json', {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer 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',
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
