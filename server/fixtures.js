if (Properties.find().count() === 0) {

  //creating two properties, one owned by samcorcos, one by davidpezzola

  Properties.insert({
    address: "123 Fake Street",
    owner: "pYYPfZjL9Sn9iDATr",
    price: 250000
  })

  Properties.insert({
    address: "4444 John Street",
    owner: "AW4mXYrxeqri8KgTz",
    price: 1000000
  })

}
