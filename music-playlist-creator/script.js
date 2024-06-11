// JavaScript for Opening and Closing the Modal

       // Script to handle modal open/close
       const playlistCard = document.querySelector('.playlist-card');
       const modalOverlay = document.querySelector('.modal-overlay');
       const modalClose = document.querySelector('.modal-close');

       // Open modal when playlist card is clicked
       playlistCard.addEventListener('click', () => {
           modalOverlay.style.display = 'block';
       });

       // Close modal when close button is clicked
       modalClose.addEventListener('click', () => {
           modalOverlay.style.display = 'none';
       });

       // Close modal when clicking outside the modal content
       modalOverlay.addEventListener('click', (e) => {
           if (e.target === modalOverlay) {
               modalOverlay.style.display = 'none';
           }
       });

       
