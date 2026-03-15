const revealElements = document.querySelectorAll('.reveal');
const creatorForm = document.getElementById('creatorForm');
const formMessage = document.getElementById('formMessage');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

revealElements.forEach((section) => revealObserver.observe(section));

creatorForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!creatorForm.checkValidity()) {
        formMessage.textContent = 'Please complete all fields to activate your profile.';
        formMessage.style.color = '#ff8fab';
        return;
    }

    const creatorName = creatorForm.creatorName.value.trim();
    formMessage.textContent = `Welcome ${creatorName}! Your creator application has been queued.`;
    formMessage.style.color = '#66e6ff';
    creatorForm.reset();
});
