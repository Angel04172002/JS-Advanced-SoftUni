function notify(message) {

  const notificationDivElement = document.getElementById('notification');
  notificationDivElement.textContent = message;
  notificationDivElement.style.display = 'block';

  notificationDivElement.addEventListener('click', function (e) {
    e.currentTarget.style.display = 'none';
  });
}
