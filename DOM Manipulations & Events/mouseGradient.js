function attachGradientEvents() {

    let resultElement = document.getElementById('result');
    let gradientBoxElement = document.getElementById('gradient');

    gradientBoxElement.addEventListener('mousemove', function(e) {

        let percentage = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
        resultElement.textContent = `${percentage}%`;
    });

    gradientBoxElement.addEventListener('mouseout', function() {
        resultElement.textContent = '';
    });
}
