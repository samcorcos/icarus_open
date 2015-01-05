@createTimeline = () ->

  # data needs to be an array of objects
  debtData = []
  equityData = []
  assetData = []


  svg = d3.select('#analytics-timeline')
