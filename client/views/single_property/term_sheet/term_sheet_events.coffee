Template.singlePropertyTermSheet.events
  "click #input-tab": (e, t) ->
    $(".inputs").toggleClass "add-flex-div-show"
    $(".outputs").removeClass "add-flex-div-show"
    $(".returns").removeClass "add-flex-div-show"
    $(".additional").removeClass "add-flex-div-show"
    return

  "click #output-tab": (e, t) ->
    $(".outputs").toggleClass "add-flex-div-show"
    $(".inputs").removeClass "add-flex-div-show"
    $(".returns").removeClass "add-flex-div-show"
    $(".additional").removeClass "add-flex-div-show"
    return

  "click #returns-tab": (e, t) ->
    $(".returns").toggleClass "add-flex-div-show"
    $(".outputs").removeClass "add-flex-div-show"
    $(".inputs").removeClass "add-flex-div-show"
    $(".additional").removeClass "add-flex-div-show"
    return

  "click #additional-tab": (e, t) ->
    $(".additional").toggleClass "add-flex-div-show"
    $(".outputs").removeClass "add-flex-div-show"
    $(".returns").removeClass "add-flex-div-show"
    $(".inputs").removeClass "add-flex-div-show"
    return

  "click #total-price-cell": (e, t) -> Session.set "editingTotalPrice", true
    return

  "click #down-payment-cell": (e, t) -> Session.set "editingDownPayment", true
    return

  "click #closing-repair-cell": (e, t) -> Session.set "editingClosingRepair", true
    return

  "click #apr-cell": (e, t) -> Session.set "editingAPR", true
    return

  "click #taxes-cell": (e, t) -> Session.set "editingTaxes", true
    return

  "click #hoa-cell": (e, t) -> Session.set "editingHOA", true
    return

  "click #insurance-cell": (e, t) -> Session.set "editingInsurance", true
    return

  "click #rent-price-cell": (e, t) -> Session.set "editingRentPrice", true
    return

  "click #square-footage-cell": (e, t) -> Session.set "editingSquareFootage", true
    return

  "click #equity-sold-cell": (e, t) -> Session.set "editingEquitySold", true
    return

  "click #percent-capital-needed-cell": (e, t) -> Session.set "editingPercentCapitalNeeded", true
    return
