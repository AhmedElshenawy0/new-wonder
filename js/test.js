$(document).ready(function(){
    $('#add-to-cart').click(function() {
        var size = $('#size').val();
        $('#cart-message').text('Added to cart: Size ' + size + ' - Women\'s Original Cheeky Jean');
    });
});