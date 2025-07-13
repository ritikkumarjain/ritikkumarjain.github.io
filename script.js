document.addEventListener("DOMContentLoaded", function () {

    // Fetch name from content.json and set to #title
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            if (data.name) {
                document.getElementById("title").textContent = data.name;
                document.getElementById("description1").textContent = data.description1;
            }
        })
        .catch(() => {
            // fallback if fetch fails
            // document.getElementById("title").textContent = "Backend Developer | Cloud Enthusiast";
        });

    // Get modal element
    const modal = document.getElementById('statsModal');
    const openModalButton = document.querySelector('.open-modal-button');
    const closeButton = document.querySelector('.close-button');

    // Set the title (this will always run)
    document.getElementById("title").textContent = "Backend Developer | Cloud Enthusiast";

    // Only add event listeners if the elements exist
    if (openModalButton && modal) {
        openModalButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    if (closeButton && modal) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
