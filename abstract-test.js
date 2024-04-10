document.addEventListener("DOMContentLoaded", function() {
    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=79c7fdb3de1a49a88ca75b9e4612b498')
        .then(response => response.json())
        .then(data => {
            const { city, region, country } = data;
            const locationString = `${city}, ${region}, ${country}`;
            document.getElementById('location').innerText = `Your Location: ${locationString}`;
        })
        .catch(error => {
            console.error('Error fetching user location:', error);
            document.getElementById('location').innerText = 'Unable to retrieve location.';
        });
});
