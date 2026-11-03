/**
 * Meta IITGandhinagar — Search highlight persistence fix
 * Issue #49: "Searching will add highlights permanently"
 *
 * Material for MkDocs wraps search matches in <mark> tags when
 * search.highlight is enabled. Without cleanup, these highlights
 * persist permanently across page navigations, making content
 * look broken after a search.
 *
 * This script:
 *   1. Clears stale <mark> highlights on every page load
 *   2. Resets Material's internal search state so highlights
 *      don't bleed into newly navigated pages
 *   3. Listens for instant navigation events (Material's
 *      navigation.instant feature) to clean up after each
 *      client-side transition
 *
 * Future-proof: uses MutationObserver as a safety net and
 * defensive feature detection so it never breaks if Material
 * changes its internal APIs.
 */

(function () {
  'use strict';

  /**
   * Remove all search highlight <mark> elements from the page,
   * restoring the original text nodes they wrapped.
   */
  function clearSearchHighlights() {
    var marks = document.querySelectorAll(
      '.md-typeset mark, .md-content mark, article mark, main mark'
    );

    marks.forEach(function (mark) {
      var parent = mark.parentNode;
      if (!parent) return;

      // Replace the <mark> with its text content, preserving
      // surrounding nodes. Use a document fragment to avoid
      // multiple reflows when there are many highlights.
      var fragment = document.createDocumentFragment();
      Array.from(mark.childNodes).forEach(function (child) {
        fragment.appendChild(child);
      });
      parent.replaceChild(fragment, mark);
    });

    // Reset any data attributes Material may have set to track
    // highlighted state on content containers.
    var containers = document.querySelectorAll(
      '[data-md-search-highlight], [data-search-highlighted]'
    );
    containers.forEach(function (el) {
      el.removeAttribute('data-md-search-highlight');
      el.removeAttribute('data-search-highlighted');
    });
  }

  /**
   * Reset Material's internal search component state so that
   * navigating away from a search results page doesn't carry
   * highlight state into the next page.
   */
  function resetSearchState() {
    var searchInput = document.querySelector('.md-search__input');
    if (searchInput && searchInput.value) {
      // Only clear if we're not on a search results page.
      // On a search results page, the input legitimately has a value.
      var isSearchPage =
        document.body.classList.contains('md-search-results') ||
        document.querySelector('.md-search__results');
      if (!isSearchPage) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  }

  /**
   * Full cleanup: clear highlights + reset search state.
   */
  function cleanupSearch() {
    clearSearchHighlights();
    resetSearchState();
  }

  /**
   * Initialize once the DOM is ready.
   */
  function init() {
    // Always clean up on initial load — a previous page's
    // highlights should never survive a navigation.
    cleanupSearch();

    // Material for MkDocs with navigation.instant emits a
    // 'page:change' event on the window for client-side
    // transitions. Clean up after each transition.
    window.addEventListener('page:change', function () {
      // Use a microtask so Material has finished inserting
      // the new page content before we query it.
      setTimeout(cleanupSearch, 0);
    });

    // Safety net: if Material's search component inserts
    // <mark> tags after our initial cleanup, remove them.
    // This guards against future Material versions that
    // defer highlight application.
    if (window.MutationObserver) {
      var observer = new MutationObserver(function (mutations) {
        var shouldClean = false;
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return; // not an element
            if (node.matches && node.matches('mark')) {
              shouldClean = true;
            }
            if (node.querySelectorAll &&
                node.querySelectorAll('mark').length > 0) {
              shouldClean = true;
            }
          });
        });
        if (shouldClean) {
          // Debounce: only clean once per animation frame.
          if (!observer._scheduled) {
            observer._scheduled = true;
            requestAnimationFrame(function () {
              clearSearchHighlights();
              observer._scheduled = false;
            });
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  }

  // Start when DOM is ready.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
