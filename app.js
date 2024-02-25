document.querySelectorAll('.faq').forEach((faq) => {
    const btnPlus = document.querySelector('.btn-plus');
    const btnMinus = document.querySelector('.btn-minus');
    const faqText = document.querySelector('.faq-text');

    btnPlus.addEventListener('click', () => {
        faqText.classList.remove('not-visible');
        btnMinus.classList.remove('not-visible');
        btnPlus.classList.add('not-visible');
    });

    btnMinus.addEventListener('click', () => {
        faqText.classList.add('not-visible');
        btnMinus.classList.add('not-visible');
        btnPlus.classList.remove('not-visible');
    });
});
