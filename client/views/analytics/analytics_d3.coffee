@createTimeline = () ->
  # http://bl.ocks.org/mbostock/3902569

  # data needs to be an array of objects
  debtData = []
  equityData = []
  assetData = [] # we can get historic pricing data from zillow?


  Returns.find().fetch()[0].payments.forEach (payment) ->
    tempObject = {}
    tempObject.type = payment.returnType
    tempObject.amount = Number(payment.amount)
    debtData.push(tempObject) if tempObject.type is "Debt"
    equityData.push(tempObject) if tempObject.type is "Equity"
    return



  svg = d3.select('#analytics-timeline')
