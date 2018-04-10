$(function() {
    // Delete item
    $('a.delete').click(function() {
        var thisparam = $(this);
        var item_id = thisparam.parent().parent().attr('id');
        thisparam.parent().parent().text('Please Wait...');
        $.ajax({
            type: "GET",
            url: thisparam.attr('href'),
            success: function() {
                $('#'+item_id).fadeOut('slow');
            }
        });
        return false;
    });

    // update item
    $('a.done').click(function() {
        var thisparam = $(this);
        var item_id = thisparam.parent().attr('id');
        $.ajax({
            type: "GET",
            url: thisparam.attr('href'),
            success: function() {
                $('#'+item_id).addClass('checked');
            }
        });
        return false;
    });
});
