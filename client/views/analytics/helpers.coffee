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

Template.returnOnInvestment.helpers
  annualizedAssetAppreciation: ->
    #
    console.log getPropertiesAndDays()
  annualizedReturns: ->
    #
    return 0
  annualizedLoanReturns: ->
    #
    return 0
  annualizedEquityReturns: ->
    #
    return 0
