// input label up and down

document.querySelectorAll(".input-box").forEach((group) => {
  let isActive = false;

  // Label click → toggle active
  group.querySelector("label").addEventListener("click", function () {
    isActive = !isActive;
    group.classList.toggle("active", isActive);
    if (isActive) {
      group.querySelector("input").focus();
    }
  });

  // Input click → toggle off if already active
  group.querySelector("input").addEventListener("click", function () {
    if (isActive) {
      isActive = false;
      group.classList.remove("active");
    } else {
      isActive = true;
      group.classList.add("active");
    }
  });
});
