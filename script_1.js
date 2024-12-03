let selectedSeats = 0;
const seatPrice = 10000; // Harga per kursi

function showSeats(time) {
    document.getElementById('selectedTime').textContent = time;
    document.getElementById('seatSelection').style.display = 'flex';
}

function selectSeat(seat) {
    seat.classList.toggle('selected');
    // Menghitung jumlah kursi yang dipilih
    selectedSeats = document.querySelectorAll('.seat.selected').length;
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice = selectedSeats * seatPrice;
    document.getElementById('totalPrice').textContent = totalPrice;
}

function generatePaymentCode() {
    if (selectedSeats > 0) {
        // Membuat kode pembayaran acak
        const paymentCode = 'PAY' + Math.random().toString(36).substring(2, 10).toUpperCase();
        document.getElementById('code').textContent = paymentCode;
        document.getElementById('paymentCode').style.display = 'block';
    } else {
        alert('Pilih setidaknya satu kursi!');
    }
}
