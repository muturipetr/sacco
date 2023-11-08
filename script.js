
    // Get references to the button and pop-up form
    const showPopupButton = document.getElementById('show-popup');
    const closePopupButton = document.getElementById('close-popup');
    const popupForm = document.getElementById('popup-form');
    
    // Show the pop-up form when the button is clicked
    showPopupButton.addEventListener('click', () => {
        popupForm.style.display = 'block';
    });
    
    // Hide the pop-up form when the close button is clicked
    closePopupButton.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });
    
    function opennav(){
        document.getElementById("mysidenav").style.width="250px";
    }
    function closenav(){
        document.getElementById("mysidenav").style.width="0";
    }
    