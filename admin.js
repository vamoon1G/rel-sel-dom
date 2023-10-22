document.addEventListener("DOMContentLoaded", function() {
    const passwordModal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');
    const errorMessage = document.getElementById('errorMessage');
    const mainContent = document.getElementById('mainContent');

    // Проверяем, был ли введен пароль в текущей сессии с помощью сессионных куков
    const hasEnteredPassword = sessionStorage.getItem('hasEnteredPassword');

    if (hasEnteredPassword !== 'true') {
        // Если пароль ещё не был введен в текущей сессии, отображаем модальное окно
        passwordModal.style.display = 'flex';
    }

    submitPassword.addEventListener('click', function() {
        const correctPassword = "zalosdaf213wq"; // Замените это на реальный пароль

        if (passwordInput.value === correctPassword) {
            // Сохраняем информацию о том, что пароль был введен в текущей сессии
            sessionStorage.setItem('hasEnteredPassword', 'true');
            hidePasswordInput();
        } else {
            errorMessage.textContent = "Неправильный пароль";
            passwordInput.value = '';
        }
    });

    // Функция для скрытия поля ввода пароля и отображения основного содержимого
    function hidePasswordInput() {
        passwordModal.style.display = 'none';
        mainContent.style.display = 'block';
    }

    passwordModal.addEventListener('transitionend', function() {
        if (passwordModal.style.display === 'none') {
            passwordInput.style.display = 'none';
        }
    });
});
