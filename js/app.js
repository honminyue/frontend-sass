// (function($, document, window) viewport){

  // Global Variables
  var global1 = $('.global1');

  // Executes once whole document has been loaded
  $(document).ready(function() {
    //console.log('Current breakpoint:', viewport.current());

    // Prevent Hask Link
    $('a[href="#"]').on('click', function (e) {e.preventDefault(); });
    console.log('test watch');
    
  });

  $(window).resize(
    // viewport.changed(function(){
    //   // console.log('Current breakpoint:', viewport.current());
      
    //   // Executes only in XS breakpoint
    //   if( viewport.is('xs') ) {
        
    //   }
    //   // Executes in SM, MD and LG breakpoints
    //   if( viewport.is('>=sm') ) {
        
    //   }
    //   // Executes in XS and SM breakpoints
    //   if( viewport.is('<md') ) {

    //   }
    // })
  );

// })(jQuery, document, window, ResponsiveBootstrapToolkit);
