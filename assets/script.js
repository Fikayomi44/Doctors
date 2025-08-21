'use strict';

// Navbar Interactivity
const menuBtn = document.querySelector('.btn');
const menu = document.querySelector('header ul');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.cross');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('nav-active');
  overlay.classList.remove('hidden');
});

function closeMenu() {
  menu.classList.remove('nav-active');
  overlay.classList.add('hidden');
}

overlay.addEventListener('click', closeMenu);
closeBtn.addEventListener('click', closeMenu)