(function () {
  'use strict';

  // Per-entry two-audience tab toggle
  // Each .capability-entry operates independently — switching tabs in one
  // entry has no effect on any other entry.

  function initToggles() {
    var entries = document.querySelectorAll('.capability-entry');

    entries.forEach(function (entry) {
      var tabs = entry.querySelector('.audience-tabs');
      if (!tabs) return;

      tabs.querySelectorAll('.tab-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var panelId = this.getAttribute('data-panel');
          if (!panelId) return;

          // Update tab buttons within this entry's tab strip
          tabs.querySelectorAll('.tab-btn').forEach(function (b) {
            b.classList.remove('is-active');
            b.setAttribute('aria-selected', 'false');
          });
          this.classList.add('is-active');
          this.setAttribute('aria-selected', 'true');

          // Update panels within this entry
          entry.querySelectorAll('.tab-panel').forEach(function (panel) {
            panel.hidden = true;
          });

          var target = document.getElementById(panelId);
          if (target) {
            target.hidden = false;
          }
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggles);
  } else {
    initToggles();
  }
})();
