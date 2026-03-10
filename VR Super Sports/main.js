/* c:\Users\vr\Documents\GitHub\VRproject\기나쥬\script.js */

document.addEventListener('DOMContentLoaded', () => {
    console.log("VR Super Sports Champion 홈페이지가 로드되었습니다.");

    // 시작하기 버튼 클릭 이벤트
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            alert('무료 체험 신청 페이지로 이동합니다! (데모 기능)');
        });
    }

    // 스크롤 애니메이션 (간단한 등장 효과)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 요소들 선택
    const animatedElements = document.querySelectorAll('.game-visual, .game-text, .step-item, .review-card');
    
    animatedElements.forEach(el => {
        // 초기 스타일 설정 (CSS에서 처리해도 됨)
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        
        // 관찰 시작
        observer.observe(el);
    });
});
