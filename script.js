/* ─────────────────────────────────────
   SCROLL PROGRESS + BACK TO TOP
───────────────────────────────────── */
const prog = document.getElementById('prog');
const btt  = document.getElementById('btt');

window.addEventListener('scroll', () => {
  const pct = scrollY / (document.body.scrollHeight - innerHeight) * 100;
  prog.style.width = pct + '%';
  btt.classList.toggle('on', scrollY > 400);
});

/* ─────────────────────────────────────
   NAV ACTIVE STATE ON SCROLL
───────────────────────────────────── */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-d a, .mob-nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ─────────────────────────────────────
   HAMBURGER MOBILE MENU
───────────────────────────────────── */
document.getElementById('hbg').addEventListener('click', () => {
  document.getElementById('mnav').classList.toggle('open');
});
document.querySelectorAll('.mob-nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mnav').classList.remove('open'));
});

/* ─────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ─────────────────────────────────────
   TYPEWRITER
───────────────────────────────────── */
const words = [
  'Building full-stack web apps.',
  'Training ML classification models.',
  'Visualising data with Power BI.',
  'Writing clean, production-grade code.',
  'Leading teams from idea to launch.'
];
let wordIndex = 0, charIndex = 0, deleting = false;
const twEl = document.getElementById('tw');

function type() {
  const word = words[wordIndex];
  if (!deleting) {
    twEl.textContent = word.substring(0, ++charIndex);
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1900);
      return;
    }
  } else {
    twEl.textContent = word.substring(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 42 : 72);
}
type();

/* ─────────────────────────────────────
   PROJECT TAB SWITCHER
───────────────────────────────────── */
function switchTab(id, btn) {
  document.querySelectorAll('.ppanel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
  // Re-trigger reveal animations for newly visible panel
  document.querySelectorAll('#panel-' + id + ' .reveal').forEach(el => {
    el.classList.remove('in');
    setTimeout(() => el.classList.add('in'), 50);
  });
}

/* ─────────────────────────────────────
   CONTACT FORM
───────────────────────────────────── */
function send() {
  const name    = document.getElementById('fn').value.trim();
  const email   = document.getElementById('fe').value.trim();
  const message = document.getElementById('fm').value.trim();
  const status  = document.getElementById('fstatus');

  if (!name || !email || !message) {
    status.style.cssText = 'display:block; background:rgba(248,81,73,.1); color:#f85149; border:1px solid rgba(248,81,73,.3);';
    status.textContent = 'Please fill in all required fields.';
    return;
  }

  status.style.cssText = 'display:block; background:rgba(63,185,80,.1); color:#3fb950; border:1px solid rgba(63,185,80,.3);';
  status.textContent = "✓ Message sent! I'll get back to you soon.";

  ['fn', 'fe', 'fs', 'fm'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  setTimeout(() => { status.style.display = 'none'; }, 4000);
}
