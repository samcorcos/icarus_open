#
# Get the number of days since purchase date
# Get all payments of particular type (from the purchase date, which means all of them)
# Then, divide:     360/<days since purchse> * <all payments>
# That will give you the annualized return from that investment type
#
# Then, use that number to divide by the totalCost (purchase + repair) to get the annual rate of return.
#

@getDaysSincePurchase = (property) ->
  purchaseDate = moment(property.purchaseDate)
  diff = purchaseDate.diff(moment(), "days")

@getPropertiesAndDays = () ->
  tempArray = []
  Properties.find().fetch().forEach (property) ->
    tempObject =
      daysSincePurchase: getDaysSincePurchase(property)
      propertyId: property._id
    tempArray.push(tempObject)
    return
  tempArray

@getPayments = (propertyId, paymentType) -> # eg (getPayments("KeRvBxnf2TgnNRjgR", "Debt"))
  total = 0
  Returns.find().fetch()[0].payments.forEach (payment) ->
    if payment.returnType is paymentType
      total += Number(payment.amount)
    return
  total


Template.returnOnInvestment.helpers
  annualizedAssetAppreciation: ->
    #
    0
  annualizedReturns: ->
    #
    return 0
  annualizedLoanReturns: ->
    # for each property returned from getPropertiesAndDays()
    # annualize the returns
    # add together all the annualized returns (as long as days < -90)
    # then add together all the purchasing costs of the properties
    # then divide returns by cost

    console.log getPropertiesAndDays()
  annualizedEquityReturns: ->
    #
    return 0
