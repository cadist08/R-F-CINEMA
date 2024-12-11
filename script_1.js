document.addEventListener("DOMContentLoaded", () => {
    const seats = document.querySelectorAll(".seat");
    const selectedSeatsCount = document.getElementById("selected-seats");
    const totalPrice = document.getElementById("total-price");
    const payButton = document.getElementById("pay-button");
    const paymentConfirmation = document.getElementById("payment-confirmation");
    const showtimeSelect = document.getElementById("showtime");
    const selectedTimeDisplay = document.getElementById("selected-time");
  
    const seatPrice = 50000; // Harga per kursi
    let selectedCount = 0;
    let total = 0;
  
    // Fungsi untuk mengupdate total harga dan jumlah kursi dipilih
    function updateSummary() {
      total = selectedCount * seatPrice;
      selectedSeatsCount.textContent = `Kursi dipilih: ${selectedCount}`;
      totalPrice.textContent = `Total Harga: Rp ${total.toLocaleString("id-ID")}`;
    }
  
    // Event listener untuk setiap kursi
    seats.forEach(seat => {
      seat.addEventListener("click", () => {
        if (seat.classList.contains("selected")) {
          seat.classList.remove("selected");
          selectedCount--;
        } else {
          seat.classList.add("selected");
          selectedCount++;
        }
        updateSummary();
      });
    });
  
    // Event listener untuk tombol bayar
    payButton.addEventListener("click", () => {
      if (selectedCount > 0) {
        const selectedTime = showtimeSelect.value; // Mendapatkan jam tayang yang dipilih
        selectedTimeDisplay.textContent = selectedTime; // Menampilkan di konfirmasi
        alert(`Pembayaran sebesar Rp ${total.toLocaleString("id-ID")} berhasil untuk jam ${selectedTime}.`);
        paymentConfirmation.classList.remove("hidden");
      } else {
        alert("Silakan pilih kursi terlebih dahulu!");
      }
    });
  });
<<<<<<< HEAD
  
=======
  
>>>>>>> e5ce8057640628820be8bdb867ca60c926a89096
