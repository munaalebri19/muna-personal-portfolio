'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  if (elem) {
    elem.classList.toggle("active");
  }
};


// Sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}


// Testimonials modal
const testimonialsItem =
  document.querySelectorAll("[data-testimonials-item]");

const modalContainer =
  document.querySelector("[data-modal-container]");

const modalCloseBtn =
  document.querySelector("[data-modal-close-btn]");

const overlay =
  document.querySelector("[data-overlay]");

const modalImg =
  document.querySelector("[data-modal-img]");

const modalTitle =
  document.querySelector("[data-modal-title]");

const modalText =
  document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (modalContainer) {
    modalContainer.classList.toggle("active");
  }

  if (overlay) {
    overlay.classList.toggle("active");
  }
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");

    if (modalImg && avatar) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }

    if (modalTitle && title) {
      modalTitle.innerHTML = title.innerHTML;
    }

    if (modalText && text) {
      modalText.innerHTML = text.innerHTML;
    }

    testimonialsModalFunc();
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}

if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
}


// Publication filters
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (
      selectedValue === "all" ||
      selectedValue === filterItems[i].dataset.category
    ) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    const selectedValue = this.textContent.trim().toLowerCase();

    if (selectValue) {
      selectValue.textContent = this.textContent;
    }

    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

let lastClickedBtn = filterBtn.length > 0 ? filterBtn[0] : null;

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    const selectedValue = this.textContent.trim().toLowerCase();

    if (selectValue) {
      selectValue.textContent = this.textContent;
    }

    filterFunc(selectedValue);

    if (lastClickedBtn) {
      lastClickedBtn.classList.remove("active");
    }

    this.classList.add("active");
    lastClickedBtn = this;
  });
}


// Contact form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}


// Page navigation
const navigationLinks =
  document.querySelectorAll("[data-nav-link]");

const pages =
  document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const selectedPage =
      this.textContent.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      const pageName =
        pages[j].dataset.page.trim().toLowerCase();

      pages[j].classList.toggle(
        "active",
        selectedPage === pageName
      );
    }

    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
    }

    this.classList.add("active");
    window.scrollTo(0, 0);
  });
}
