// scroll animation using intersection observer
// found this code online to make things fade in when scrolling
let observerOptions = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.1 
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // stop observing after animation
        }
    });
}, observerOptions);

let fadeElements = document.querySelectorAll('.fade-in');
for(let i=0; i<fadeElements.length; i++) {
    observer.observe(fadeElements[i]);
}

// 1. number counting part
// this makes the numbers count up quickly
const counters = document.querySelectorAll('.counter');
const speed = 200; 

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let counter = entry.target;
            
            function updateCount() {
                let target = parseInt(counter.getAttribute('data-target'));
                let count = parseInt(counter.innerText);
                
                let inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target; 
                }
            }
            
            updateCount(); 
            observer.unobserve(counter); 
        }
    });
}, observerOptions);

for(let i=0; i<counters.length; i++) {
    counterObserver.observe(counters[i]);
}

// 2. category search filter
// this compares search box text with card headings
let searchInput = document.getElementById('categorySearch');
let categoryCards = document.querySelectorAll('.category-card');

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        let filterText = e.target.value.toLowerCase();
        
        categoryCards.forEach(card => {
            let title = card.querySelector('h3').innerText.toLowerCase();
            
            if (title.includes(filterText)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';
            }
        });
    });
}
