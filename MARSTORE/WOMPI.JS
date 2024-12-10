// payment.js
document.getElementById('payment-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    // Recoger datos del formulario
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCVC = document.getElementById('card-cvc').value;
    const cardName = document.getElementById('card-name').value;
  
    const [expMonth, expYear] = cardExpiry.split('/');
  
    // Configura tu clave pública aquí
    const PUBLIC_KEY = 'tu_clave_publica_aquí';
  
    // Solicitar token a Wompi
    try {
      const response = await axios.post('https://sandbox.wompi.co/v1/tokens/cards', {
        number: cardNumber,
        cvc: cardCVC,
        exp_month: expMonth,
        exp_year: `20${expYear}`,
        card_holder: cardName
      }, {
        headers: {
          Authorization: `Bearer ${PUBLIC_KEY}`,
          'Content-Type': 'application/json'
        }
      });
  
      const cardToken = response.data.data.id;
      document.getElementById('response').innerText = `Token generado: ${cardToken}`;
  
      // Aquí puedes continuar procesando el pago usando el token generado.
      // Por ejemplo, iniciar una transacción en tu backend.
    } catch (error) {
      console.error(error);
      document.getElementById('response').innerText = `Error: ${error.response.data.error.messages}`;
    }
  });
  