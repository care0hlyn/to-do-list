
$(document).ready(function() {
  $("form#new-contact-form").submit(function(event) {
    event.preventDefault();

    // var msg = "Task: + " + $("#task").val();

    // if ($("#urgent-checkbox").is(":checked")) {
    //   msg = msg + " is urgent";
    // } else {
    //   msg = msg + " is not urgent";
    // }

    // alert(msg);

    var taskDescription = $("#task").val();
    var taskUrgent = $("#urgent-checkbox").is(":checked");

    var thisTask = {description: taskDescription,
                    isUrgent: taskUrgent};


    if (thisTask.isUrgent) {
      $("#task-list").append("<li class='urgentClass'>" + thisTask.description +
                              "</li>")
    } else {
      $("#task-list").append("<li>" + thisTask.description + "</li>");
    }

    $("#task-list li").last().click(function() {
      $(this).remove();
    });

    $("#task").val("");
    $("#urgent-checkbox").prop('checked', false);

  });

});
