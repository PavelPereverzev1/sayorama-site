document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    clearErrors(form);

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      showErrors(form, errors);
      return;
    }

    // TODO : send the form data to the server (need a real endpoint)
    try {
      const response = await fetch('https://example.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Server error');

      console.log('Form sent successfully!');
      form.reset();
    } catch (err) {
      console.error('Failed to send the form.');
      console.error(err);
    }
  });
});

function validateForm(data) {
  const errors = {};

  if (!data.subject) {
    errors.subject = 'Select a value from the drop-down list';
  }

  if (!data.email) {
    errors.email = 'Please enter your email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!data.phone) {
    errors.phone = 'Please enter your phone number';
  } else if (!/^\+\d{2}\s\d{3}\s\d{7}$/.test(data.phone)) {
    errors.phone = 'Please enter your phone in the format +00 000 0000000';
  }

  if (data.message && data.message.length > 150) {
    errors.message = 'Max 150 characters';
  }

  return errors;
}

function clearErrors(form) {
  form.querySelectorAll('.error-message').forEach(el => el.remove());
  form
    .querySelectorAll('.input-wrapper input, .input-wrapper select')
    .forEach(el => el.classList.remove('error'));
}

function showErrors(form, errors) {
  for (const [name, message] of Object.entries(errors)) {
    const field = form.querySelector(`[name="${name}"]`);

    if (!field) continue;

    field.classList.add('error');

    const messageEl = document.createElement('div');
    messageEl.className = 'error-message';
    messageEl.textContent = message;

    field.closest('label').appendChild(messageEl);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.querySelector('input[name="phone"]');

  phoneInput.addEventListener('input', () => {
    let value = phoneInput.value.replace(/\D/g, '');

    if (value.length > 12) value = value.slice(0, 12);

    let formatted = '+';

    if (value.length > 0) {
      formatted += value.substring(0, 2);
    }
    if (value.length > 2) {
      formatted += ' ' + value.substring(2, 5);
    }
    if (value.length > 5) {
      formatted += ' ' + value.substring(5, 12);
    }

    phoneInput.value = formatted;
  });
});
