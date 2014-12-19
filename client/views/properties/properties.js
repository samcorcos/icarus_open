Template.properties.rendered = function() {

  createPropertiesMap();
  $('.modal-trigger').leanModal();
  $('.modal-close').leanModal();

  // $('.datepicker').pickadate();
};

Meteor.subscribe("properties");


Template.propertyPanel2.helpers({
  properties: function() {
    return Properties.find();
  }
});

Template.properties.events({
  'click #add-property-button': function(e,t) {
    $(".flex-white-div-property").toggleClass("add-flex-div-show")
    $(".red-break-property").toggleClass("add-red-break-show")
  }
});

Template.newPropertyForm.events({
  'click #submit-new-property': function(e,t) {
    //if it's only numbers, else, throw error.
    if ($("#zpid").val()) {
      Properties.insert({
        owner: $("#user-id").val(),
        address: $("#property-address").val(),
        // price: Number($("#purchase-price").val()),
        state: $(".add-property-state-dropdown").val(),
        city: $("#city").val(),
        zip: $('#zip-code').val(),
        bed: $("#bed-count").val(),
        bath: $("#bath-count").val(),
        sqft: $("#sqft-count").val(),
        zpid: $("#zpid").val()
      });
      $("#property-address").val("");
      $("#purchase-price").val("");
      $(".add-property-state-dropdown").val("");
      $("#city").val("");
      $('#zip-code').val("");
      $("#bed-count").val("");
      $("#bath-count").val("");
      $("#sqft-count").val("");
      $("#zpid").val("");
      toast('Successfully Added To Database!', 3000)
      $("#property-map").remove();
      $("#append-map-here").append("<div id='property-map'></div>")
      createPropertiesMap();
    }
    else {
      alert("Please enter only numbers for the purchase price.")
    }
  }
});

Template.newPropertyForm.helpers({

});


Template.newPropertyForm.rendered = function() {

  // // Uncomment these if you want to use a range // //

  // var range_input = $('input[type=range]');
  // var range_mousedown = false;
  //
  // range_input.each(function () {
  //   var thumb = $('<span class="thumb"><span class="value"></span></span>');
  //   $(this).after(thumb);
  // });
  //
  // var range_wrapper = $('.range-field');
  //
  // range_wrapper.on("mousedown", function(e) {
  //   range_mousedown = true;
  //   $(this).addClass('active');
  //
  //   var thumb = $(this).children('.thumb');
  //   if (!thumb.hasClass('active')) {
  //     thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
  //   }
  //   var left = e.pageX - $(this).offset().left;
  //   var width = $(this).outerWidth();
  //
  //   if (left < 0) {
  //     left = 0;
  //   }
  //   else if (left > width) {
  //     left = width;
  //   }
  //   thumb.addClass('active').css('left', left);
  //   thumb.find('.value').html($(this).children('input[type=range]').val());
  //
  // });
  // range_wrapper.on("mouseup", function() {
  //   range_mousedown = false;
  //   $(this).removeClass('active');
  // });
  //
  // range_wrapper.on("mousemove", function(e) {
  //
  //   var thumb = $(this).children('.thumb');
  //   if (range_mousedown) {
  //     if (!thumb.hasClass('active')) {
  //       thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
  //     }
  //     var left = e.pageX - $(this).offset().left;
  //     var width = $(this).outerWidth();
  //
  //     if (left < 0) {
  //       left = 0;
  //     }
  //     else if (left > width) {
  //       left = width;
  //     }
  //     thumb.addClass('active').css('left', left);
  //     thumb.find('.value').html($(this).children('input[type=range]').val());
  //   }
  //
  // });
  // range_wrapper.on("mouseout", function() {
  //   if (!range_mousedown) {
  //
  //     var thumb = $(this).children('.thumb');
  //
  //     if (thumb.hasClass('active')) {
  //       thumb.velocity({ height: "0", width: "0", top: "10px", marginLeft: "-6px"}, { duration: 100 });
  //     }
  //     thumb.removeClass('active');
  //
  //   }
  //
  //
  // });

};

// "change input#supplied-armor": function (events, template) {
//   Battles.update(
//     this._id,
//   { $set: { suppliedArmor: event.target.value } }
// );
// },




function toast(message, displayLength, className) {
  className = className || "";
  if ($('#toast-container').length == 0) {
    // create notification container
    var container = $('<div></div>')
    .attr('id', 'toast-container');
    $('body').append(container);
  }

  // Select and append toast
  var container = $('#toast-container')
  var newToast = createToast(message);
  container.append(newToast);

  newToast.css({"top" : parseFloat(newToast.css("top"))+35+"px",
  "opacity": 0});
  newToast.velocity({"top" : "0px",
  opacity: 1},
{duration: 300,
  easing: 'easeOutCubic',
  queue: false});
  //        newToast.delay(displayLength)
  newToast.velocity({"opacity": 0, marginTop: '-40px'}, { duration: 375,
    easing: 'easeOutExpo',
    queue: false, delay: displayLength,
    complete: function(){$(this).remove()}
  });

  //        .slideUp(250, function(){
  //            $(this).remove();
  //        });


  function createToast(message) {
    var toast = $('<div></div>');
    toast.addClass('toast');
    toast.addClass(className);
    var text = $('<span></span>');
    text.text(message);
    toast.append(text);
    return toast;
  }
}
