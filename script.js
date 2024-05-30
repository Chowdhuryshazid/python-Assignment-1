document.addEventListener('DOMContentLoaded', function () {
    const packages = document.querySelectorAll('.package');
    
    packages.forEach(pkg => {
        const minusButton = pkg.querySelector('.minus');
        const plusButton = pkg.querySelector('.plus');
        const priceSpan = pkg.querySelector('.price');
        const roomsP = pkg.querySelector('.rooms');
        const signupButton = pkg.querySelector('.signup');
        const thankYouP = pkg.querySelector('.thank-you');
        const selectedRoomsSpan = pkg.querySelector('.selected-rooms');

        let roomCount = 1;
        let basePrice = parseInt(priceSpan.textContent);

        minusButton.addEventListener('click', function () {
            if (roomCount > 1) {
                roomCount--;
                updatePriceAndRooms();
            }
        });

        plusButton.addEventListener('click', function () {
            roomCount++;
            updatePriceAndRooms();
        });

        signupButton.addEventListener('click', function () {
            selectedRoomsSpan.textContent = roomCount;
            thankYouP.style.display = 'block';
        });

        function updatePriceAndRooms() {
            priceSpan.textContent = basePrice * roomCount;
            roomsP.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
        }
    });
});
