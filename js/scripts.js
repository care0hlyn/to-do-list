
$(document).ready(function() {
  $("form#new-contact-form").submit(function(event) {
    event.preventDefault();

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
      if (confirm("Mark this task as complete?")) {
        $(this).remove();
      }
    });

    $("#task").val("");
    $("#urgent-checkbox").prop('checked', false);

  });

});
