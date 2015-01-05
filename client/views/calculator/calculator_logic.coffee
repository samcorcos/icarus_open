@Calculator = new Mongo.Collection(null);

Template.calculatorBox.rendered = ->
  Calculator.remove({})
  Calculator.insert
    purchasePrice: 0
    closingRepair: 0
    monthlyIncome: 0
    capRate: 0
  $('.tooltipped').tooltip
    "delay": 50
  Session.set("editingPP", true)
  Session.set("editingCR", true)
  Session.set("editingMI", true)

Template.calculatorBox.events
  'click #purchase-price': (e,t) ->
    Session.set("editingPP", true)
  'click #closing-repair': (e,t) ->
    Session.set("editingCR", true)
  'click #monthly-income': (e,t) ->
    Session.set("editingMI", true)
  'click #cap-rate': (e,t) ->
    Session.set("editingCAP", true)

  'keypress input#purchase-price': (e,t) ->
    Session.set("editingPP", false) if e.keyCode is 13
  'keypress input#closing-repair': (e,t) ->
    Session.set("editingCR", false) if e.keyCode is 13
  'keypress input#monthly-income': (e,t) ->
    Session.set("editingMI", false) if e.keyCode is 13
  'keypress input#cap-rate': (e,t) ->
    Session.set("editingCAP", false) if e.keyCode is 13

Template.calculatorBox.helpers
  calculator: ->
    Calculator.find({})
  editingPP: ->
    Session.get("editingPP")
  editingCR: ->
    Session.get("editingCR")
  editingMI: ->
    Session.get("editingMI")
  editingCAP: ->
    Session.get("editingCAP")
