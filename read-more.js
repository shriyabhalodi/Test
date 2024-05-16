const parentcontainer = document.querySelector('.content');

parentcontainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.classList.contains('read-more-btn-about-us');

    if (!isReadMoreBtn) return;

    const currentText = parentcontainer.querySelector('.read-more-text-about-us');

    currentText.classList.toggle('read-more-text--show');

    // Toggle the text of the button
    current.textContent = currentText.classList.contains('read-more-text--show') ? "Read Less..." : "Read More...";
}); 


