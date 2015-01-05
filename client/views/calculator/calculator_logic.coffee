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

  'keyup input#purchase-price': (e,t) ->
    Session.set("editingPP", false) if e.keyCode is 13
    Calculator.update
      _id: @_id
    , $set:
      purchasePrice: e.currentTarget.value
      capRate: getCAP()
  'keyup input#closing-repair': (e,t) ->
    Session.set("editingCR", false) if e.keyCode is 13
    Calculator.update
      _id: @_id
    , $set:
      closingRepair: e.currentTarget.value
      capRate: getCAP()
  'keyup input#monthly-income': (e,t) ->
    Session.set("editingMI", false) if e.keyCode is 13
    Calculator.update
      _id: @_id
    , $set:
      monthlyIncome: e.currentTarget.value
      capRate: getCAP()
  'keyup input#cap-rate': (e,t) ->
    Session.set("editingCAP", false) if e.keyCode is 13
    Calculator.update
      _id: @_id
    , $set:
      capRate: e.currentTarget.value

# It is entirely unclear to me why it only submits on "enter"...

@getPP = ->
  p = Calculator.find().fetch()[0].purchasePrice
  c = Calculator.find().fetch()[0].closingRepair
  m = Calculator.find().fetch()[0].monthlyIncome
  cap = Calculator.find().fetch()[0].capRate
  return


@getCR = ->

@getMI = ->

@getCAP = ->
  p = Number(Calculator.find().fetch()[0].purchasePrice)
  c = Number(Calculator.find().fetch()[0].closingRepair)
  m = Number(Calculator.find().fetch()[0].monthlyIncome)
  cap = (m * 12) / (c + p) * 100
  cap.formatMoney(2)


Template.calculatorBox.helpers
  calculator: -> Calculator.find({})
  editingPP: -> Session.get("editingPP")
  editingCR: -> Session.get("editingCR")
  editingMI: -> Session.get("editingMI")
  editingCAP: -> Session.get("editingCAP")
