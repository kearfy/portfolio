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

mystem.auth.user(res => {
    if (res.success) {
        document.querySelector('.name').innerHTML = res.user.fname + ' ' + res.user.lname;
    } else {
        console.error(res.error);
    }
})
