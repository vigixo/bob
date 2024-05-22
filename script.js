function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.forEach(segment => {
        ctx.fillStyle = 'green';
        ctx.fillRect(segment.x, segment.y, box, box);
    });

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    } else {
        snake.pop();
    }

    let newHead = { x: snakeX, y: snakeY };

    // Move the snake
    if (direction === 'left') newHead.x -= box;
    if (direction === 'right') newHead.x += box;
    if (direction === 'up') newHead.y -= box;
    if (direction === 'down') newHead.y += box;

    snake.unshift(newHead); // Add new head to the beginning of the snake

    // Check for collision with walls or itself
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake.slice(1))) {
        clearInterval(game);
        alert('Game Over! Your score: ' + score);
        window.location.reload();
    }
}
