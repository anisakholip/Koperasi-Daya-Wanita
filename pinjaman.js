function updateSimpanan() {
    const simpanan = document.getElementById('simpanan').value;
    const jangkaWaktu = document.getElementById('jangkaWaktuSimpanan').value;
    const persentase = 0.5;
    
    document.getElementById('simpananValue').innerText = `Rp ${parseInt(simpanan).toLocaleString()}`;
    document.getElementById('jangkaWaktuSimpananValue').innerText = `${jangkaWaktu} Bulan`;
    
    const totalBunga = (simpanan * (persentase / 100) * (jangkaWaktu / 12)).toFixed(2);
    const totalSimpanan = (parseFloat(simpanan) + parseFloat(totalBunga)).toFixed(2);
    
    document.getElementById('totalBungaSimpanan').innerText = `Rp ${parseInt(totalBunga).toLocaleString()}`;
    document.getElementById('totalSimpanan').innerText = `Rp ${parseInt(totalSimpanan).toLocaleString()}`;
}

function updatePinjaman() {
    const pinjaman = document.getElementById('pinjaman').value;
    const jangkaWaktu = document.getElementById('jangkaWaktuPinjaman').value;
    const persentase = 0.5;
    
    document.getElementById('pinjamanValue').innerText = `Rp ${parseInt(pinjaman).toLocaleString()}`;
    document.getElementById('jangkaWaktuPinjamanValue').innerText = `${jangkaWaktu} Bulan`;
    
    const totalBunga = (pinjaman * (persentase / 100) * (jangkaWaktu / 12)).toFixed(2);
    const totalPinjaman = (parseFloat(pinjaman) + parseFloat(totalBunga)).toFixed(2);
    
    document.getElementById('totalBungaPinjaman').innerText = `Rp ${parseInt(totalBunga).toLocaleString()}`;
    document.getElementById('totalPinjaman').innerText = `Rp ${parseInt(totalPinjaman).toLocaleString()}`;
}

// Initialize the sliders on page load
window.onload = function() {
    updateSimpanan();
    updatePinjaman();
};

