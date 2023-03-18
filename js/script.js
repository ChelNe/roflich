'use strict'

let users = [
    {
        login: 'admin',
        pass: 'admin'
    }
];

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    //log and reg btns events

    let login = document.querySelector('.login_btn'),
        reg = document.querySelector('.register_btn');

    login.addEventListener('click', () => {
        location.href = 'login.html';
    });

    reg.addEventListener('click', () => {
        location.href = 'reg.html';
    });


    //login

    const log_form = document.querySelector('.log_form'),
          log_login = document.querySelector('#log_login'),
          log_pass = document.querySelector('#log_pass');

    if(log_form) {
        log_form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            for(let i = 0; i < users.length; i++) {
                if(log_login.value === users[i].login) {
                    if(log_pass.value === users[i].pass) {
                        localStorage.setItem('logined', 'yes');
    
                        location.href = 'index.html';
                    }
                    else {
                        const errorMessage = document.createElement('div');
                        errorMessage.style.color = 'red';
                        errorMessage.classList.add('error');
                        errorMessage.textContent = 'login or password error';
    
                        if(!document.querySelector('.error'));
                            log_form.append(errorMessage);
    
                        setTimeout(() => {
                            errorMessage.remove();
                        }, 2000);
                    }
                }
                else {
                    const errorMessage = document.createElement('div');
                    errorMessage.style.color = 'red';
                    errorMessage.classList.add('error');
                    errorMessage.textContent = 'login or password error';
    
                    if(!document.querySelector('.error'));
                        log_form.append(errorMessage);
    
                    setTimeout(() => {
                        errorMessage.remove();
                    }, 2000);
                }
            }
        });
    }

    //icon changer

    if(localStorage.getItem('logined') === 'yes') {
        const btns_wrapper = document.querySelector('.btns_wrapper');

        const user_icon = document.createElement('img');
        
        user_icon.setAttribute('src', 'icons/exit.png');
        user_icon.style.height = '30px';
        user_icon.style.filter = 'invert(100%)';
        user_icon.classList.add('exit');
        user_icon.style.cursor = 'pointer';

        btns_wrapper.remove();

        document.querySelector('.menu').append(user_icon);
    }

    if(document.querySelector('.exit')) {
        const exit = document.querySelector('.exit');

        exit.addEventListener('click', () => {
            localStorage.setItem('logined', 'no');

            location.href = 'index.html';
        });
    }

    //reg forma krch

    const reg_form = document.querySelector('.reg_form'),
          reg_login = document.querySelector('#reg_login'),
          reg_pass = document.querySelector('#reg_pass'),
          reg_rep_pass = document.querySelector('#reg_rep_pass');

    if(reg_form) {
        reg_form.addEventListener('submit', (e) => {
            e.preventDefault();

            if(reg_login.value !== '' && reg_pass.value === reg_rep_pass.value) {
                users.push({login: reg_login.value, pass: reg_pass.value});

                localStorage.setItem('logined', 'yes');

                location.href = 'index.html';
            }
            else {
                const errorMessage = document.createElement('div');
                    errorMessage.style.color = 'red';
                    errorMessage.classList.add('error');
                    errorMessage.textContent = 'login or password error';
    
                    if(!document.querySelector('.error'));
                        reg_form.append(errorMessage);
    
                    setTimeout(() => {
                        errorMessage.remove();
                    }, 2000);
            }
        });
    }
})