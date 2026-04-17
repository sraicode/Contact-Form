const scriptURL = 'Google App Script URL'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Your form has been successfully submitted. We truly appreciate your interest and will be in touch with you shortly." ))
  .then(() => { window.location.reload(); })
  .catch(error => error('Error!', error.message))
})
