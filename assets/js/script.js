// Scroll Reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.goals, .new-user', { origin: 'top' });
ScrollReveal().reveal('.care-plan, .medical, .edit-client, .my-profile', { origin: 'left' });
ScrollReveal().reveal('.shift-notes, .calender, .edit-user, .log-out', { origin: 'right' });