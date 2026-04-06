(function () {
  'use strict';

  // Compare view — keyboard accessibility for <details> elements
  // The native <details>/<summary> handles open/close without JS.
  // This script adds keyboard support and smooth scroll-to-panel behavior.

  function initCompare() {
    var capabilities = document.querySelectorAll('.compare-capability');

    capabilities.forEach(function (detail) {
      var summary = detail.querySelector('.compare-capability-summary');
      if (!summary) return;

      // Allow Enter/Space on summary to toggle (browsers handle this natively,
      // but this ensures consistent behavior across older browsers)
      summary.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          detail.open = !detail.open;
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCompare);
  } else {
    initCompare();
  }
})();
