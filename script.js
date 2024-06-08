// script.js
document.addEventListener('DOMContentLoaded', () => {
    const firstImage = document.getElementById(dmsgk.jpg');
    const clickMessage = document.getElementById('click-message');
    const contentContainer = document.querySelector('.content-container');
    let secondImage;

    document.body.addEventListener('click', () => {
        if (!secondImage) {
            clickMessage.style.display = 'none';

            secondImage = document.createElement('img');
            secondImage.src = 'second-image-url.jpg'; // B.png
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
            finalImageSrc = 'second-image-url.jpg'; //B.png
        } else if (rand <= 95) {
            finalImageSrc = 'third-image-url.jpg'; //A.png
        } else {
            finalImageSrc = 'fourth-image-url.jpg'; //s.jpg
        }

        secondImage.src = finalImageSrc;

        setTimeout(() => {
            displayResult(finalImageSrc);
        }, 1000); // 1초 후에 결과 표시
    }

    function displayResult(finalImageSrc) {
        const resultImage = document.createElement('img');
        resultImage.src = finalImageSrc === 'second-image-url.jpg' ? 'BBB.jpg' :
                          finalImageSrc === 'third-image-url.jpg' ? 'AAA.jpg' :
                          'SSS.jpg';
        resultImage.alt = 'Result Image';
        resultImage.id = 'result-image';
        contentContainer.appendChild(resultImage);

        resultImage.style.display = 'block';
        secondImage.remove();
    }
});