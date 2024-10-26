document.getElementById('btn').onclick = function(){
   const demoElement = document.getElementById('demo');
   demoElement.style.color = "black";
   demoElement.innerHTML= " Ganti Cok!"

}

document.getElementById('resetBtn').onclick = function(){
    const demoElement = document.getElementById('demo');

    demoElement.style.color = "red";

    demoElement.innerHTML="Bapakmu";

}

const moveBtn = document.getElementById('resetBtn');

resetBtn.onclick = function() {
    // Menonaktifkan tombol
    resetBtn.disabled = true;

    // Menggerakkan tombol ke posisi acak
    moveButtonRandomly();
};

// Fungsi untuk menggerakkan tombol ke posisi acak
function moveButtonRandomly() {
    const windowWidth = window.innerWidth - resetBtn.offsetWidth; // Lebar jendela dikurangi lebar tombol
    const windowHeight = window.innerHeight - resetBtn.offsetHeight; // Tinggi jendela dikurangi tinggi tombol

    // Menghasilkan posisi acak
    const randomX = Math.random() * windowWidth;
    const randomY = Math.random() * windowHeight;

    // Mengatur posisi tombol
    resetBtn.style.left = `${randomX}px`;
    resetBtn.style.top = `${randomY}px`;

    // Menghidupkan kembali tombol setelah 1 detik
    setTimeout(() => {
        resetBtn.disabled = false; // Menghidupkan tombol kembali
    }, 0.1);
}
