// Get modal elements
const modal = document.getElementById('orderModal');
const openBtn = document.querySelector('.btn-buy');
const closeBtn = document.querySelector('.close-button');
const cancelBtn = document.getElementById('cancelOrderBtn');
const confirmBtn = document.getElementById('confirmOrderBtn');
const addressInput = document.getElementById('addressInput');

// Open modal on Buy Now click
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  addressInput.value = ''; // clear previous input
});

// Close modal function
function closeModal() {
  modal.style.display = 'none';
}

// Close modal when clicking X or Cancel button
closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

// Confirm order button click handler
confirmBtn.addEventListener('click', () => {
  const address = addressInput.value.trim();
  if (address === '') {
    alert('Please enter your delivery address.');
    return;
  }
  alert(`Thank you for your order!\n\nDelivery Address:\n${address}`);
  closeModal();
});

// Close modal when clicking outside modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
