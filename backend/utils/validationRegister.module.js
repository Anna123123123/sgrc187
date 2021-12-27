module.exports.validationRegister = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'Введите имя пользователя'
    }
    if (email.trim() === '') {
        errors.email = 'Введите электронную почту'
    } else {
        const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!email.match(regEx)) {
            errors.email = 'Неправильный тип e-mail'
        }
    }

    if (password === '') {
        errors.password = 'Пароль не может быть пустым'
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Пароли не совпадают'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}



//validate username

module.exports.validationUsername = (username, password) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'Введите имя пользователя'
    }
    if (password.trim() === '') {
        errors.password = 'Введите пароль'
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}