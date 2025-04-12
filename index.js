
  
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



document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const car = document.getElementById("carName").value;
    const name = document.getElementById("votre nom").value;
    const phone = document.getElementById("téléphone").value;
    const start = document.getElementById("dateDébut").value;
    const end = document.getElementById("dateFin").value;
  
    const message = `Bonjour, je souhaite réserver la voiture :
  - Voiture: ${car}
  - Nom: ${name}
  - Téléphone: ${phone}
  - Du: ${start}
  - Au: ${end}`;
  
    const whatsappNumber = "213774557656";
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
  
    window.open(url, "_blank");
  
    // إظهار رسالة الشكر
    const thankYou = document.getElementById("thankYouMessage");
    thankYou.style.display = "block";
    setTimeout(() => {
      thankYou.style.display = "none";
    }, 5000);
  
    // إغلاق النافذة
    document.getElementById("reservationModal").classList.remove("active");
  });




  const form = document.getElementById('bookingForm');
  const message = document.getElementById('confirmationMessage');

  form.addEventListener('submit', async function(e) {
    e.preventDefault(); // يمنع تحديث الصفحة

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); // إعادة تعيين النموذج
        message.style.display = 'block'; // إظهار رسالة التأكيد
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur réseau. Vérifiez votre connexion.");
    }
  });







  document.addEventListener('DOMContentLoaded', () => {
    const reserverButtons = document.querySelectorAll('.reserver-btn');
    const modal = document.getElementById('reservationModal');
    const closeModal = document.querySelector('.close');
    const carNameInput = document.getElementById('carNameInput');
  
    reserverButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const carName = btn.getAttribute('data-car'); // نأخذ اسم السيارة من الزر
        carNameInput.value = carName;
        modal.style.display = 'block';
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });







  const urlParams = new URLSearchParams(window.location.search);
    const voiture = urlParams.get('voiture');
    if (voiture) {
      document.querySelector('input[name="Voiture"]').value = voiture;
    }
  
  


    document.querySelectorAll('.car-images-slider').forEach(slider => {
      const images = slider.querySelectorAll('.car-img');
      const prevBtn = slider.querySelector('.prev');
      const nextBtn = slider.querySelector('.next');
      let index = 0;
  
      function showImage(i) {
        images.forEach(img => img.classList.remove('active'));
        images[i].classList.add('active');
      }
  
      prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
      });
  
      nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        showImage(index);
      });

    });




