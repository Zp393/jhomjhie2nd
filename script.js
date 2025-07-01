//Navbar
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const icon = document.getElementById('menu-icon');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    icon.classList.toggle('bx-menu');
    icon.classList.toggle('bx-x');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      icon.classList.add('bx-menu');
      icon.classList.remove('bx-x');
    });
  });


  const track = document.querySelector('.carousel-track');
  const imageCount = track.children.length / 2; // Since we have duplicates
  const totalWidth = imageCount * window.innerWidth; // Total width of the images

  // Set the width of the track dynamically
  track.style.width = `${totalWidth}px`;

  // Set the animation duration based on the total width and desired speed
  const speed = 120; // Speed in seconds
  track.style.animationDuration = `${speed}s`;

  // Reset the position of the track
  track.addEventListener('animationiteration', () => {
    track.style.transition = 'none'; // Disable transition
    track.style.transform = 'translateX(0)'; // Reset position
    setTimeout(() => {
      track.style.transition = ''; // Re-enable transition
    }, 50); // Small timeout to allow transition to take effect
  });


 // Set the date we're counting down to
    const countDownDate = new Date("2026-12-28T03:00:00").getTime(); // Replace with your target date and time

    // Update the count down every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerHTML = String(days).padStart(2, '0');
        document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown-timer").innerHTML = "Event has started!";
        }
    }, 1000);



  // Get elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const galleryItems = document.querySelectorAll(".gallery-item img");

  // When any image is clicked
  galleryItems.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  // Close lightbox on click
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Optional: Click anywhere outside image to close
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });

// Lovestory
    function toggleReadMore() {
        const readMoreText = document.querySelector('.read-more');
        const button = document.querySelector('.read-more-button');
        
        if (readMoreText.style.display === "none" || readMoreText.style.display === "") {
            readMoreText.style.display = "block"; // Show the extended text
            button.textContent = "Read Less"; // Change button text
        } else {
            readMoreText.style.display = "none"; // Hide the extended text
            button.textContent = "Read More"; // Change button text back
        }
    }


    //FAQ

  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });

  //Gift Registry

    function openModal() {
    document.getElementById('giftModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('giftModal').style.display = 'none';
  }

  // Optional: close modal when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('giftModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }