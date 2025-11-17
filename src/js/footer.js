document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.subscribe-form');
  const input = form.querySelector('.subscribe-input');

  input.addEventListener('input', () => {
    clearError(input);
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    clearError(input);

    const email = input.value.trim();

    if (!email) {
      showError(input, 'Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(input, 'Enter a valid email');
      return;
    }

    // TODO : send the email to the server (need a real endpoint)
    try {
      const response = await fetch('https://example.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      alert('Subscribed successfully!');
      form.reset();
    } catch (err) {
      showError(input, 'Failed to send. Please try again later.');
      console.error(err);
    }
  });
});

function showError(input, message) {
  input.classList.add('error');

  const msg = document.createElement('div');
  msg.className = 'error-message';
  msg.textContent = message;

  input.insertAdjacentElement('afterend', msg);
}

function clearError(input) {
  input.classList.remove('error');

  const msg = input.parentNode.querySelector('.error-message');
  if (msg) msg.remove();
}
