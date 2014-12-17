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
  },
  purchasePrice: function() {
    return this.price.formatMoney(0);
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
    if (Number($("#purchase-price").val())) { // && Bed is a number, && bath, && square feet
      Properties.insert({ owner: $("#user-id").val(), address: $("#property-address").val(), price: Number($("#purchase-price").val()), state: $(".add-property-state-dropdown").val()});
      $("#property-address").val("");
      $("#purchase-price").val("");
      $(".add-property-state-dropdown").val("");
    }
    else {
      alert("Please enter only numbers for the purchase price.")
    }
  }
});

Template.newPropertyForm.helpers({

});


Template.newPropertyForm.rendered = function() {
  var range_input = $('input[type=range]');
  var range_mousedown = false;

  range_input.each(function () {
    var thumb = $('<span class="thumb"><span class="value"></span></span>');
    $(this).after(thumb);
  });

  var range_wrapper = $('.range-field');

  range_wrapper.on("mousedown", function(e) {
    range_mousedown = true;
    $(this).addClass('active');

    var thumb = $(this).children('.thumb');
    if (!thumb.hasClass('active')) {
      thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
    }
    var left = e.pageX - $(this).offset().left;
    var width = $(this).outerWidth();

    if (left < 0) {
      left = 0;
    }
    else if (left > width) {
      left = width;
    }
    thumb.addClass('active').css('left', left);
    thumb.find('.value').html($(this).children('input[type=range]').val());

  });
  range_wrapper.on("mouseup", function() {
    range_mousedown = false;
    $(this).removeClass('active');
  });

  range_wrapper.on("mousemove", function(e) {

    var thumb = $(this).children('.thumb');
    if (range_mousedown) {
      if (!thumb.hasClass('active')) {
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
      }
      var left = e.pageX - $(this).offset().left;
      var width = $(this).outerWidth();

      if (left < 0) {
        left = 0;
      }
      else if (left > width) {
        left = width;
      }
      thumb.addClass('active').css('left', left);
      thumb.find('.value').html($(this).children('input[type=range]').val());
    }

  });
  range_wrapper.on("mouseout", function() {
    if (!range_mousedown) {

      var thumb = $(this).children('.thumb');

      if (thumb.hasClass('active')) {
        thumb.velocity({ height: "0", width: "0", top: "10px", marginLeft: "-6px"}, { duration: 100 });
      }
      thumb.removeClass('active');

    }


  });

};

// "change input#supplied-armor": function (events, template) {
//   Battles.update(
//     this._id,
//   { $set: { suppliedArmor: event.target.value } }
// );
// },
