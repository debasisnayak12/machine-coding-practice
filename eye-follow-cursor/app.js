const pupils = document.querySelectorAll(".pupil");

window.addEventListener("mousemove", (e) => {
    e = e || window.e;

    // Position of cursor in pixels
    const { pageX, pageY } = e;

    // Available area of window
    const { innerWidth, innerHeight } = window;

    // Calculate the left and top positions in percentages
    let left = (pageX / innerWidth) * 100;
    let top = (pageY / innerHeight) * 100;

    // Constrain the left and top positions
    left = Math.max(25, Math.min(75, left));
    top = Math.max(25, Math.min(75, top));

    // Move the pupils
    pupils.forEach((pupil) => {
        pupil.style.left = `${left > 45 && left < 55 ? 50 : left}%`;
        pupil.style.top = `${top > 45 && top < 55 ? 50 : top}%`;
    });
});
