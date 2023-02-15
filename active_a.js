// Wybierz wszystkie linki nawigacyjne
const navLinks = document.querySelectorAll('nav li a');

// Dla każdego linku nawigacyjnego dodaj obsługę zdarzenia kliknięcia
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Zablokuj domyślne zachowanie przeglądarki dla kliknięcia w link
        event.preventDefault();

        // Pobierz identyfikator sekcji, do której ma przewinąć się strona
        const target = link.getAttribute('href').substring(1);

        // Znajdź sekcję na podstawie jej identyfikatora
        const targetSection = document.getElementById(target);

        // Dodaj klasę "active" do klikniętego linku nawigacyjnego
        link.classList.add('active');

        // Usuń klasę "active" z pozostałych linków nawigacyjnych
        navLinks.forEach((otherLink) => {
            if (otherLink !== link) {
                otherLink.classList.remove('active');
            }
        });

        // Przewiń do sekcji z animacją
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});