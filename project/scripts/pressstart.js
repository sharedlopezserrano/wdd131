document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('modification-date').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger-btn');
const nav = document.getElementById('main-nav');
const closeBtn = document.getElementById('close-nav-btn');

if (hamburger && nav && closeBtn) {
    hamburger.addEventListener('click', () => {
        nav.classList.add('open');
        closeBtn.style.display = 'block';
        hamburger.classList.add('hide');
    });
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('open');
        closeBtn.style.display = 'none';
        hamburger.classList.remove('hide');
    });
    document.addEventListener('click', (e) => {
        if (
            nav.classList.contains('open') &&
            !nav.contains(e.target) &&
            e.target !== hamburger &&
            !hamburger.contains(e.target)
        ) {
            nav.classList.remove('open');
            closeBtn.style.display = 'none';
            hamburger.classList.remove('hide');
        }
    });
}

const promoCodes = [
    { day: "Sunday", code: "NO_PROMO", text: "We're closed today! Come back soon!" },
    { day: "Monday", code: "MONPIXEL", text: "Monday Special: Use code MONPIXEL for 10% off Pixel Fries!" },
    { day: "Tuesday", code: "TUESBURGER", text: "Tuesday Only: Use code TUESBURGER for a free drink with any Retro Burger!" },
    { day: "Wednesday", code: "WEDNESDAY8BIT", text: "Wednesday Deal: Use code WEDNESDAY8BIT for 15% off 8-Bit Chicken Sandwich!" },
    { day: "Thursday", code: "THURSDAYSMOOTH", text: "Thursday Refresh: Use code THURSDAYSMOOTH for 2x Mana Smoothies for $10!" },
    { day: "Friday", code: "FRIDAYGAME", text: "Friday Fun: Use code FRIDAYGAME for a free dessert with any main dish!" },
    { day: "Saturday", code: "SATURDAYPOWER", text: "Saturday Power: Use code SATURDAYPOWER for 20% off your total bill!" }
];

function showPromoCode() {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const promo = promoCodes.find(p => p.day === today) || promoCodes[0];
    const promoDiv = document.createElement('div');
    promoDiv.className = 'promo-highlight';
    promoDiv.innerHTML = `<strong>Today's Promo:</strong> <span class="promo-code">${promo.code}</span> <span class="promo-text">${promo.text}</span> <span class="promo-today">(Just for today!)</span>`;
    const main = document.querySelector('.main-layout');
    if (main) main.insertBefore(promoDiv, main.firstChild);
}

showPromoCode();