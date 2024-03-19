function drawOlympicLogo() {
    const canvas = document.getElementById('canvas_drawing');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = (canvas.height / 2) - 20;
    const radius = Math.min(canvas.width, canvas.height) / 4;

    const padding = radius / 4;

    ctx.lineWidth = 5;

    let animationProgress = 0;
    const animationDuration = 1000;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawCircle((centerX - 37) - radius - padding, centerY, 'blue', animationProgress);
        drawCircle(centerX, centerY, 'black', animationProgress);
        drawCircle((centerX + 37) + radius + padding, centerY, 'red', animationProgress);
        drawCircle((centerX - 17) - radius / 2 - padding, centerY + radius + padding, 'yellow', animationProgress);
        drawCircle((centerX + 17) + radius / 2 + padding, centerY + radius + padding, 'green', animationProgress);

        animationProgress += 1 / animationDuration;

        if (animationProgress <= 1) {
            requestAnimationFrame(animate);
        }
    }

    function drawCircle(x, y, color, progress) {
        const currentRadius = radius * progress;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, currentRadius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    animate();
}

drawOlympicLogo();
