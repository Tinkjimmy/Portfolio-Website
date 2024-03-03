document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarIcon = document.querySelector('.navbar-toggler-icon');
  const navbar = document.querySelector('.navbar');

  navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
      navbarIcon.classList.toggle('rotated');
      navbar.classList.toggle('show');
  });

  // Form submission and alert display logic
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(this);

      fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              showAlert('Message sent successfully!', 'success');
              document.getElementById('contact-form').reset();
          } else {
              showAlert('Failed to send message. Please try again.', 'danger');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          showAlert('An error occurred. Please try again.', 'danger');
      });
  });

  // Function to show alert
  function showAlert(message, type) {
      const alertPlaceholder = document.getElementById('alert-placeholder') || createAlertPlaceholder();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert" style="position: fixed; top: 20px; right: 20px; z-index: 1050;">' + message + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';

      alertPlaceholder.append(wrapper);
  }

  // Function to create alert placeholder if it doesn't exist
  function createAlertPlaceholder() {
      const placeholder = document.createElement('div');
      placeholder.id = 'alert-placeholder';
      document.body.appendChild(placeholder);
      return placeholder;
  }
});
