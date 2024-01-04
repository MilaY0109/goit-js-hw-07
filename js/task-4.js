const logForm = document.querySelector('.login-form');
    
    logForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

        const emailInput = logForm.elements['email'];
        const passwordInput = logForm.elements['password'];
        const trimEmailInput = emailInput.value.trim();
        const trimPasswordInput = passwordInput.value.trim();

         if (trimEmailInput === '' || trimPasswordInput === '') {
        alert ('All form fields must be filled in');
        return;
         }
        const logFormData = {
        trimEmailInput,
        trimPasswordInput,
        };

         console.log(logFormData);

      logForm.reset();
    });
