( function( window, document ) {
  function product_review_keepFocusInMenu() {
    document.addEventListener( 'keydown', function( e ) {
      const product_review_nav = document.querySelector( '.sidenav' );
      if ( ! product_review_nav || ! product_review_nav.classList.contains( 'open' ) ) {
        return;
      }
      const elements = [...product_review_nav.querySelectorAll( 'input, a, button' )],
        product_review_lastEl = elements[ elements.length - 1 ],
        product_review_firstEl = elements[0],
        product_review_activeEl = document.activeElement,
        tabKey = e.keyCode === 9,
        shiftKey = e.shiftKey;
      if ( ! shiftKey && tabKey && product_review_lastEl === product_review_activeEl ) {
        e.preventDefault();
        product_review_firstEl.focus();
      }
      if ( shiftKey && tabKey && product_review_firstEl === product_review_activeEl ) {
        e.preventDefault();
        product_review_lastEl.focus();
      }
    } );
  }
  product_review_keepFocusInMenu();
} )( window, document );