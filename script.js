"use strict";
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    let visible = 0;
    document.querySelectorAll(".project[data-category]").forEach((project) => {
      project.hidden = category !== "all" && project.dataset.category !== category;
      if (!project.hidden) visible += 1;
    });
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    document.querySelector("#filter-status").textContent = `Показано проектов: ${visible}`;
  });
});
document.querySelector("#year").textContent = String(new Date().getFullYear());
