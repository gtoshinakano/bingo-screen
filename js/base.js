/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
		var cw = $('.circle-box').width();
		$('.circle-box').css({'height': cw+'px'});
    });
	
	var cw = $('.circle-box').width();
	$('.circle-box').css({'height':cw+'px'});
	
});
	
$(document).ready(function(){
	$('.circles').css({ z: 'scale(5.2)' });
	$("#der").transition({ x: 200 });
	$('#der').css({ transform: 'scale(5.2)' });
});