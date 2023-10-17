$('.slider').each(function() {
    var $this  =$(this);
    var $group =$this.find('.slide-group');
    var $slides = $this.find('.slide');
    var buttonArray = [];
    var currentIdex = 0;
    var timeout;

    function move(newIndex) {
        var animateleft, slideleft;

        advance();

    
        if ($group.is(':animated')|| currentIndex === newIndex) {
            return;
        }

        buttonArray[currentIdex].removeClass('active');
        buttonArray[newIndex].addClass('active');

        if (newIdenx > currentIdex) {
            slideleft = '100%';
            animateleft = '-100%';
        } else {
            slideleft = '-100%';
            animateleft = '100%';
        }

        $slides.eq(newIndex).css( {left: slideleft, display: 'block'} );

        $group.animateleft( {left: animateleft}, function() {
            $slides.eq(currentIdex).css( {display: 'none'});
            $slides.eq(newIndex).css( {left: 0} );
            $group.css( {left :0});
            currentIdex = newIndex;
        });
    }

    function advance () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIdex < ($slides.length - 1)) {
                move(currentIdex + 1);
            } else {
                move(0);
            }
        },4000);
    }

    $.each($slides,function(index) {

        var $button = $('<button type="button" class="slide-btn">$bull;</n\button>');
        if (index === currentIdex) {
            $button.addClass('active');
        }
        $button.on('click', function() {
            move(index);
        }).appendTo('.slide-buttons');
        buttonArray.push($button);
    });

    advance();


});