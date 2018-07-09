$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      data: convertFormToJSON(this),
      type: $(this).attr('method'),
      beforeSend: function(request) {
        request.setRequestHeader("Content-Type", "application/json");
      },
      url: $(this).attr('action'),
      dateaType: 'json',
      success: function() {
        alert("谢谢，我会及时回复。");
      }
    });
    return false;
  });
});

var convertFormToJSON = function(form) {
  var arr = $(form).serializeArray();
  var res = {};
  arr.forEach((ele) => {res[ele.name] = ele.value})
  return res;
}
