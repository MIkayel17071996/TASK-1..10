const form = document.getElementById('myForm');


window.addEventListener('load', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        const element = form.elements[key];
        if (element) {
          element.value = formData[key];
        }
      }
    }
  }
});

form.addEventListener('input', () => {
  const formData = {};
  for (const element of form.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  localStorage.setItem('formData', JSON.stringify(formData));
});