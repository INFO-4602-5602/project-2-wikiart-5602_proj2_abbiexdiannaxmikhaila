var orgscroll = $(document).scrollTop(), switchcheck=false;

function autoScroll(){
  // if(scrollable){
    if(switchcheck) return;
    switchcheck = true;
    var viz = ['one', 'two', 'two-b', 'three', 'four']
    var scroll = $(this).scrollTop();
    // scrollable=false;
    
    if (scroll > orgscroll) {

      for (var i in viz) {
        num = viz[i];
        id = '#viz-'+num;
        if (scroll < $(id).offset().top + 1) {
          $('html, body').animate({ scrollTop: $(id).offset().top }, 'slow');
          break;
        }
      }
    }
    orgscroll = scroll;
  // }
  setTimeout(function(){ switchcheck = false; }, 1000)
}

$(window).on('scroll', autoScroll);


$(document).foundation()