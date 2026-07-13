document.querySelectorAll('.input-group').forEach(group => {
    const minus = group.querySelector('.btn:first-child');
    const plus = group.querySelector('.btn:last-child');
    const input = group.querySelector('input');

    minus.addEventListener('click', () => {
        let value = parseInt(input.value) || 1;
        if (value > 1) {
            input.value = value - 1;
        }
    });

    plus.addEventListener('click', () => {
        let value = parseInt(input.value) || 1;
        input.value = value + 1;
    });
});
