function updatenav() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) === false) {
        var nav = document.querySelector('div.navbar');
        if (window.scrollY > document.querySelector('section').scrollHeight - nav.scrollHeight) {
            nav.style.background = '#e5e5e5';
            nav.style.transition = 'all 0.1s ease-in';
        } else {
            nav.style.background = 'unset';
            nav.style.transition = 'unset';
        }
    }
}

window.onscroll = (e) => { updatenav(); };
updatenav();


window.addEventListener('MystemSignIn', e => {
    u = e.detail;
    if (u.success) {
        u = u.user;
        document.querySelector('p.name').innerHTML = u.fname + ' ' + u.lname;
    }
})

window.addEventListener('MystemSignOut', e => {
    document.querySelector('p.name').innerHTML = '';
})
