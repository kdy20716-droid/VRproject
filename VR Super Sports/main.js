document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    // 스크롤 이벤트에 따라 헤더 스타일 변경
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // 50px 이상 스크롤되면
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});