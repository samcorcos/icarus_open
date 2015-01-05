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

Template.calculatorBox.events
  'click #purchase-price': (e,t) ->
    Session.set("editingTP", true)
  'click #closing-repair': (e,t) ->
    Session.set("editingCR", true)
  'click #monthly-income': (e,t) ->
    Session.set("editingMI", true)
  'click #cap-rate': (e,t) ->
    Session.set("editingCAP", true)

Template.calculatorBox.helpers
  calculator: ->
    Calculator.find({})
  editingTotalPriceCalc: ->
    Session.get("editingTP")
  editingClosingRepairCalc: ->
    Session.get("editingCR")
  editingMonthlyIncomeCalc: ->
    Session.get("editingMI")
  editingCAPRateCalc: ->
    Session.get("editingCAP")

# I should set up the click events now so I know how to set things up.


# // Template.calculator.events({
# //   'click #purchase-price-div': function(e,t) {
# //     Session.set("editingTotalPriceCalc", true);
# //   },
# //   'click #closing-repair-div': function(e,t) {
# //     Session.set("editingClosingRepairCalc", true);
# //   },
# //   'click #monthly-income-div': function(e,t) {
# //     Session.set("editingMonthlyIncomeCalc", true);
# //   },
# //   // 'click #cap-rate-div': function(e,t) {
# //   //   Session.set("editingCAPRateCalc", true);
# //   // },
# //
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
