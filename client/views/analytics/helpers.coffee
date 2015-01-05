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
      cost: getPurchasePrice(property._id)
    tempArray.push(tempObject)
    return
  tempArray

@getPayments = (propertyId, paymentType) -> # eg (getPayments("KeRvBxnf2TgnNRjgR", "Debt"))
  total = 0
  Returns.find().fetch()[0].payments.forEach (payment) ->
    if payment.returnType is paymentType and payment.propertyId is propertyId
      total += Number(payment.amount)
    return
  total

@getPurchasePrice = (propertyId) ->
  temp = TermSheet.findOne({ property: propertyId })
  if temp?
    Number(temp.closingRepair) + Number(temp.totalPrice)

Template.returnOnInvestment.helpers
  annualizedAssetAppreciation: ->
    #
    0
  annualizedReturns: ->
    #
    0
  annualizedLoanReturns: ->
    sumCost = 0;
    sumAnnualized = 0;
    getPropertiesAndDays().forEach (property) ->
      debtReturns = getPayments(property.propertyId, "Debt") # this returns the total returns for that property of the defined return type
      sumAnnualized += (365 / property.daysSincePurchase * -1) * debtReturns if property.daysSincePurchase < -90
      if property.cost? then sumCost += property.cost
      return
    (sumAnnualized / sumCost * 100).formatMoney(2)
    # for each property returned from getPropertiesAndDays() --done
    # annualize the returns --done
    # add together all the annualized returns (as long as days < -90) --done
    # then add together all the purchasing costs of the properties --done
    # then divide returns by cost

  annualizedEquityReturns: ->
    #
    0
