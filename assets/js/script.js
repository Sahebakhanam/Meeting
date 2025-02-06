const CreateRT = document.getElementById("CreateRT");
const RTpopUp = document.getElementById("RTpopUp");
const CloseRT = document.getElementById("CloseRT");

// Show modal
createButton.addEventListener("click", () => {
  popupModal.classList.remove("popUp");
});

// Hide modal
closeModal.addEventListener("click", () => {
  popupModal.classList.add("popUp");
});

// Optional: Close modal on outside click
popupModal.addEventListener("click", (event) => {
  if (event.target === RTpopUp) {
    RTpopUp.classList.add("hidden");
  }
});

// About-us page 
<script>
      AOS.init({
        duration: 1000, // Animation duration
        offset: 100, // Animation trigger offset
      });
</script>