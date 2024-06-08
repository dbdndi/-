// script.js
document.addEventListener('DOMContentLoaded', () => {
    const firstImage = document.getElementById('first-image');
    const clickMessage = document.getElementById('click-message');
    const contentContainer = document.querySelector('.content-container');
    let secondImage;

    document.body.addEventListener('click', () => {
        if (!secondImage) {
            clickMessage.style.display = 'none';

            secondImage = document.createElement('img');
            secondImage.src = 'second-image-url.jpg'; // 2번째 이미지 URL로 변경
            secondImage.alt = 'Second Image';
            secondImage.id = 'second-image';
            secondImage.style.position = 'absolute';
            secondImage.style.top = '-50%';
            secondImage.style.left = '50%';
            secondImage.style.transform = 'translateX(-50%)';
            contentContainer.appendChild(secondImage);

            let position = -50;
            const fallSpeed = 2;

            function fall() {
                if (position < 50) {
                    position += fallSpeed;
                    secondImage.style.top = `${position}%`;
                    requestAnimationFrame(fall);
                } else {
                    decideOutcome();
                }
            }

            fall();
        }
    });

    function decideOutcome() {
        const rand = Math.random() * 100;
        let finalImageSrc;

        if (rand <= 60) {
            finalImageSrc = 'second-image-url.jpg'; // 2번째 이미지 URL로 변경
        } else if (rand <= 95) {
            finalImageSrc = 'third-image-url.jpg'; // 3번째 이미지 URL로 변경
        } else {
            finalImageSrc = 'fourth-image-url.jpg'; // 4번째 이미지 URL로 변경
        }

        secondImage.src = finalImageSrc;

        setTimeout(() => {
            displayResult(finalImageSrc);
        }, 1000); // 1초 후에 결과 표시
    }

    function displayResult(finalImageSrc) {
        const resultImage = document.createElement('img');
        resultImage.src = finalImageSrc === 'second-image-url.jpg' ? 'result1-image-url.jpg' :
                          finalImageSrc === 'third-image-url.jpg' ? 'result2-image-url.jpg' :
                          'result3-image-url.jpg';
        resultImage.alt = 'Result Image';
        resultImage.id = 'result-image';
        contentContainer.appendChild(resultImage);

        resultImage.style.display = 'block';
        secondImage.remove();
    }
});