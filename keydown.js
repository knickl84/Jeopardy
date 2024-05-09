document.addEventListener('keydown', function(event) {
    if (event.key === ' ') { 
        var answer = document.getElementById('answer');
        if (answer.style.display === 'none') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    } else if (event.key ==='Enter') { 
        window.location.href = 'index.html'; 
    }
});