@Calculator = new Mongo.Collection(null);

Template.calculator.rendered = ->
  Calculator.remove({})
  Calculator.insert
    purchasePrice: 0
    closingRepair: 0
    monthlyIncome: 0
    capRate: 0
  $('.tooltipped').tooltip
    "delay": 50

Template.calculator.events

Template.calculator.helpers
  calculator: ->
    Calculator.find({})
  editingTotalPriceCalc: ->
    Session.get("editingTotalPriceCalc")
  editingClosingRepairCalc: ->
    Session.get("editingClosingRepairCalc")
  editingMonthlyIncomeCalc: ->
    Session.get("editingMonthlyIncomeCalc")
  editingCAPRateCalc: ->
    Session.get("editingCAPRateCalc")
