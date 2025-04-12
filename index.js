
  
    const carList = document.querySelector(".car-list");
    const carsLink = document.querySelector("#cars-link");
    const homeSection = document.querySelector("#home-section");
    const carsSection = document.querySelector("#cars-section");
  
    carsLink.addEventListener("click", (e) => {
      e.preventDefault();
  
      // إخفاء الصفحة الرئيسية
      homeSection.style.display = "none";
  
      // عرض قسم السيارات
      carsSection.style.display = "block";
      carList.innerHTML = "";
  
      cars.forEach(car => {
        const carDiv = document.createElement("div");
        carDiv.classList.add("car-item");
  
        carDiv.innerHTML = `
          <img src="${car.image}" alt="${car.name}" class="car-image">
          <div class="car-info">
            <h3>${car.name}</h3>
            <p>${car.price}</p>
          </div>
        `;
  
        carList.appendChild(carDiv);
      });
    });
  
  


  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }

  document.addEventListener("DOMContentLoaded", function () {
    const reserveButtons = document.querySelectorAll(".btn-reserve");
    const modal = document.getElementById("reservationModal");
    const closeModal = document.querySelector(".close");
    const carNameInput = document.getElementById("carName");
  
    reserveButtons.forEach(button => {
      button.addEventListener("click", () => {
        const carName = button.getAttribute("data-car");
        carNameInput.value = carName;
        modal.style.display = "block";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const reserveButtons = document.querySelectorAll(".reserve-btn");
    const modal = document.getElementById("reservationModal");
    const closeModal = document.getElementById("closeModal");
    const carNameInput = document.querySelector("input[name='carName']");
  
    reserveButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const carName = this.getAttribute("data-car");
        carNameInput.value = carName;
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });


  const modal = document.getElementById('reservationModal');
  const closeModal = document.getElementById('closeModal');
  
  // عندما يضغط على زر "Réserver"
  function openReservation(carName) {
    document.querySelector('input[name="carName"]').value = carName;
    modal.style.display = 'flex';
  }
  
  // إغلاق النافذة
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });



  document.addEventListener("DOMContentLoaded", () => {
    const reserveBtns = document.querySelectorAll(".btn-reserver");
    const modal = document.getElementById("reservationModal");
    const closeBtn = document.getElementById("closeModal");
    const carNameInput = document.querySelector("input[name='carName']");
  
    reserveBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const car = btn.getAttribute("data-car");
        carNameInput.value = car;
        modal.style.display = "flex"; // استخدم flex لتفعيل center
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  });



  document.querySelectorAll('.btn-reserver').forEach(button => {
    button.addEventListener('click', function () {
      const carName = this.closest('.car-item').querySelector('h3').innerText;
      document.getElementById('carName').value = carName;
      document.getElementById('reservationModal').classList.add('active');
    });
  });
  
  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('reservationModal').classList.remove('active');
  });




  // فتح النافذة
document.querySelectorAll(".btn-reserver").forEach(btn => {
    btn.addEventListener("click", function () {
      document.getElementById("carName").value = this.getAttribute("data-car");
      document.getElementById("reservationModal").classList.add("active");
    });
  });
  
  // إغلاق النافذة
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("reservationModal").classList.remove("active");
  });







  // زر "Réserver"
document.querySelectorAll(".btn-reserver").forEach(btn => {
    btn.addEventListener("click", function () {
        const carName = this.getAttribute("data-car");
        document.getElementById("carName").value = carName;
        document.getElementById("reservationModal").classList.add("active");
    });
});

// زر إغلاق النافذة
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("reservationModal").classList.remove("active");
});

// إرسال البيانات إلى واتساب عند الضغط على "Envoyer"
document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const car = document.getElementById("carName").value;
    const name = document.getElementById("votre nom").value;
    const phone = document.getElementById("téléphone").value;
    const start = document.getElementById("dateDebut").value;
    const end = document.getElementById("dateFin").value;
    const phoneNumber = "213774557656"; // رقم واتسا"

    // تكوين الرسالة
    const message = `Bonjour, je souhaite réserver la voiture:`
    - Voiture: ${car}
    - Nom: ${name}
    - Téléphone: ${phone}
    - Du: ${start}
    - Au: ${end}

    // تكوين رابط 
    const whatsappNumber = "213774557656";
    const url = `https://api.whatsapp.com/send/?phone=213774557656&text&type=phone_number&app_absent=0&wame_ctl=1`;

    // فتح الرابط في نافذة جديدة
    console.log(url);
    window.open(url, "_blank");

    // إغلاق النافذة
    document.getElementById("reservationModal").classList.remove("active");
});


