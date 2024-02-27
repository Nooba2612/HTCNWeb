const checkUserName = () => {
    const inputValue = document.querySelector(".validate-user-name input").value;
    const notification = document.querySelector(".validate-user-name .notification");
    const nameRegex = /^[a-z0-9_-]{3,16}$/;

    if (nameRegex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};

const checkPassword = () => {
    const inputValue = document.querySelector(".validate-password input").value;
    const notification = document.querySelector(".validate-password .notification");
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (passwordRegex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};

const checkEmail = () => {
    const inputValue = document.querySelector(".validate-email input").value;
    const notification = document.querySelector(".validate-email .notification");
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;

    if (emailRegex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};

const checkIPv4 = () => {
    const inputValue = document.querySelector(".validate-ipv4 input").value;
    const notification = document.querySelector(".validate-ipv4 .notification");
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (ipv4Regex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};

const checkHexValue = () => {
    const inputValue = document.querySelector(".validate-hex input").value;
    const notification = document.querySelector(".validate-hex .notification");
    const hexRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;

    if (hexRegex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};

const checkSlug = () => {
    const inputValue = document.querySelector(".validate-slug input").value;
    const notification = document.querySelector(".validate-slug .notification");
    const slugRegex = /^[a-z0-9-]+$/;

    if (slugRegex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};

const checkURL = () => {
    const inputValue = document.querySelector(".validate-url input").value;
    const notification = document.querySelector(".validate-url .notification");
    const urlRegex =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (urlRegex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};

const checkHTML = () => {
    const inputValue = document.querySelector(".validate-date input").value;
    const notification = document.querySelector(".validate-html .notification");
    const htmlRegex = /<([a-z][a-z0-9]*)\b[^>]*>(.*?)<\/\1>/;

    if (htmlRegex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};

const checkDate = () => {
    const inputValue = document.querySelector(".validate-date input").value;
    const notification = document.querySelector(".validate-date .notification");
    const dateRegex = /^([1-2][0-9]|3[0-1]|0?[1-9])([-\.\/ ])(1[0-2]|0?[1-9])(\2)([\d]{4}|[\d]{2})$/;

    if (dateRegex.test(inputValue)) {
        notification.innerText = "Đúng định dạng";
    } else {
        notification.innerText = "Sai định dạng";
    }
};
