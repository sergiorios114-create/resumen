// Inyecta la barra superior móvil y el sidebar en cada página.
// Marca el enlace activo según data-page en <body>.

(function(){
  const activePage = document.body.dataset.page || 'home';

  // Mobile topbar
  const topbar = document.createElement('header');
  topbar.className = 'mobile-topbar';
  topbar.innerHTML = `
    <button class="hamburger" id="menuToggle" aria-label="Abrir menu">&#9776;</button>
    <div class="title">Medicina Transfusional<small>Material de estudio</small></div>
    <div style="width:42px"></div>
  `;
  document.body.insertBefore(topbar, document.body.firstChild);

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.id = 'overlay';
  document.body.insertBefore(overlay, topbar.nextSibling);

  // Sidebar
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';
  sidebar.innerHTML = `
    <h1>Medicina Transfusional</h1>
    <p class="subtitle">Material de estudio - Unidades 1-5</p>
    <nav>
      <ul>
        <li><a href="index.html" data-nav="home">Inicio / Indice</a></li>
        <li><a href="u1.html" data-nav="u1">U1 - Sangre y componentes</a></li>
        <li><a href="u2.html" data-nav="u2">U2 - Transfusion CE y Plaquetas</a></li>
        <li><a href="u3.html" data-nav="u3">U3 - PFC y Crioprecipitado</a></li>
        <li><a href="u4.html" data-nav="u4">U4 - Aferesis</a></li>
        <li><a href="u5.html" data-nav="u5">U5 - Hemoderivados</a></li>
        <li><a href="comparativas.html" data-nav="comparativas">Tablas comparativas</a></li>
        <li><a href="glosario.html" data-nav="glosario">Glosario / Siglas</a></li>
        <li><a href="flashcards.html" data-nav="flashcards">Flashcards</a></li>
        <li><a href="quiz.html" data-nav="quiz">Autoevaluacion</a></li>
      </ul>
    </nav>
  `;
  document.body.insertBefore(sidebar, overlay.nextSibling);

  // Marca enlace activo
  const activeLink = sidebar.querySelector('[data-nav="'+activePage+'"]');
  if (activeLink) activeLink.classList.add('active');

  // Mobile drawer
  const menuToggle = document.getElementById('menuToggle');
  function open(){ sidebar.classList.add('open'); overlay.classList.add('active'); }
  function close(){ sidebar.classList.remove('open'); overlay.classList.remove('active'); }
  menuToggle.addEventListener('click', function(){
    if (sidebar.classList.contains('open')) close(); else open();
  });
  overlay.addEventListener('click', close);
})();
