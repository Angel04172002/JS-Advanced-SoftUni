function attachEventsListeners() {

    const RATIOS = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };


    function convert(unit, value) {

        const inDays = value / RATIOS[unit];

        return {
            days: inDays,
            hours: inDays * 24,
            minutes: inDays * 1440,
            seconds: inDays * 86400
        };
    }

    const btnElements = document.querySelectorAll('main input[type="button"]');
    const inputTextElements = document.querySelectorAll('main input[type="text"]');

    Array.from(btnElements).forEach(btn => {
        btn.addEventListener('click', displayTimeUnits);
    });
    

    function displayTimeUnits(e) {

        const inputTextElement = e.currentTarget.previousElementSibling;
        const inputTextElementValue = Number(inputTextElement.value);
        const inputId = inputTextElement.id;

        const timeUnits = convert(inputId, inputTextElementValue);

        inputTextElements[0].value = timeUnits.days;
        inputTextElements[1].value = timeUnits.hours;
        inputTextElements[2].value = timeUnits.minutes;
        inputTextElements[3].value = timeUnits.seconds;
    }
}
