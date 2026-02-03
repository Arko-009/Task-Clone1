gsap.to(".affiliations-row", {
  x: "-50%",
  duration: 16,
  ease: "linear",
  repeat: -1
});
gsap.utils.toArray(".count-up").forEach(el => {
  const final = parseInt(el.innerText);

  gsap.fromTo(el,{ innerText: 0 },
    {
      innerText: final,
      duration: 2,
      ease: "power1.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      }
    }
  );
});


const form = document.getElementById("signupForm");
const emailInput = form.querySelector("input");
const error = form.querySelector(".error");
const success = form.querySelector(".success");
const button = form.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  error.textContent = "";
  success.textContent = "";

  if (!emailInput.validity.valid) {
    error.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }

  // loading state
  button.disabled = true;
  button.classList.add("loading");

  //  submit
  setTimeout(() => {
    button.classList.remove("loading");
    button.disabled = false;
    form.reset();

    success.textContent = "Thanks for signing up! 🎉";

    // GSAP delight animation
    gsap.fromTo(
      success,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, 1200);
});
