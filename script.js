// Get modal element
const modal = document.getElementById('statsModal');

// Get open modal button
const openModalButton = document.querySelector('.open-modal-button');

// Get close button
const closeButton = document.querySelector('.close-button');

// Open modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});