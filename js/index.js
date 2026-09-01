(function () {
  var input = document.getElementById('filter');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.template-card'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('section.niche'));
  var emptyState = document.getElementById('empty-state');

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  input.addEventListener('input', function () {
    var q = normalize(input.value.trim());
    var anyVisible = false;

    cards.forEach(function (card) {
      var haystack = normalize(card.getAttribute('data-search') || '');
      var match = q === '' || haystack.indexOf(q) !== -1;
      card.closest('.col').classList.toggle('d-none', !match);
      if (match) anyVisible = true;
    });

    sections.forEach(function (section) {
      var visibleCols = section.querySelectorAll('.col:not(.d-none)');
      section.classList.toggle('d-none', !(q === '' || visibleCols.length > 0));
    });

    emptyState.classList.toggle('d-none', !(q !== '' && !anyVisible));
  });
})();
