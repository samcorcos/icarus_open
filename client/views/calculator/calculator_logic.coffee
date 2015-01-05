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
    if e.keyCode is 13
      Session.set("editingPP", false)
  'keypress input#closing-repair': (e,t) ->
    if e.keyCode is 13
      Session.set("editingCR", false)
  'keypress input#monthly-income': (e,t) ->
    if e.keyCode is 13
      Session.set("editingMI", false)
  'keypress input#cap-rate': (e,t) ->
    if e.keyCode is 13
      Session.set("editingCAP", false)


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

# I should set up the click events now so I know how to set things up.

# //
# //   'keypress input#purchase-price': function(e,t) {
# //     if (e.keyCode === 13) {
# //       Session.set("editingTotalPriceCalc", false);
# //     }
# //   },
# //   'keypress input#closing-repair': function(e,t) {
# //     if (e.keyCode === 13) {
# //       Session.set("editingClosingRepairCalc", false);
# //     }
# //   },
# //   'keypress input#monthly-income': function(e,t) {
# //     if (e.keyCode === 13) {
# //       Session.set("editingMonthlyIncomeCalc", false);
# //     }
# //   }
# //   // 'keypress input#cap-rate': function(e,t) {
# //   //   if (e.keyCode === 13) {
# //   //     Session.set("editingCAPRateCalc", false);
# //   //   }
# //   // }
# //
