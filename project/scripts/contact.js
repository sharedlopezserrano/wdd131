const reservationType = document.getElementById('reservation-type');
const timeSlotGroup = document.getElementById('time-slot-group');
const timeSlot = document.getElementById('reservation-time');
const form = document.querySelector('.contact-form');

if (reservationType && timeSlotGroup && timeSlot) {
    reservationType.addEventListener('change', function () {
        if (this.value === 'full') {
            timeSlotGroup.style.display = 'none';
            timeSlot.required = false;
        } else {
            timeSlotGroup.style.display = '';
            timeSlot.required = true;
        }
    });
}
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = {
            name: form.name.value,
            email: form.email.value,
            reservationType: form['reservation-type'].value,
            reservationDay: form['reservation-day'].value,
            reservationTime: timeSlotGroup.style.display === 'none' ? '' : form['reservation-time'].value,
            message: form.message.value
        };
        localStorage.setItem('presstartReservation', JSON.stringify(data));
        alert('Reservation saved! Thank you.');
        form.reset();
        timeSlotGroup.style.display = '';
        timeSlot.required = true;
    });
}
