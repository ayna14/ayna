$("#target").click(function () {
    name = $('#text_input').val();
    count = $('#mylist div').length;
    $('#mylist').append('<div id="' + count + '" class="list-group-item">' + '<label><input type="checkbox" value="">' + name + '</label></div>');
    $('#text_input').val("");
});