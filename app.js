// TAB SYSTEM
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        tabs.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.target).classList.add("active");
    });
});

// DATA STRUKTUR
const struktur = [
    "Ketua: M. Radho Yoda Pratama",
    "Wakil Ketua: Erli",
    "Sekretaris: Nuraini",
    "Bendahara: Via"
];

// DATA ANGGOTA
const anggota = [
    "Syifa Salma Nabila",
    "M. Rizki Julianto",
    "Alan"
];

// RENDER STRUKTUR
const strukturList = document.getElementById("struktur-list");
struktur.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = item;
    strukturList.appendChild(card);
});

// RENDER ANGGOTA
const anggotaList = document.getElementById("anggota-list");
anggota.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = item;
    anggotaList.appendChild(card);
});
