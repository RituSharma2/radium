const axios = require("axios");

const checkTemp = async function (req, res) {

  try {
    let cities = ["london", "bengaluru", "mumbai", "delhi", "kolkata", "moscow", "chennai"]
    let appid = req.query.appid
    let arr = []
    for (let i = 0; i < cities.length; i++) {
      let obj = { city: cities[i] }


      let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`)


      console.log(res.data.main.temp)
      obj.temp = res.data.main.temp
      arr.push(obj)

    }
    let sortedArr = arr.sort(function (a, b) { return a.temp - b.temp })
    res.status(200).send({ msg: "Success", data: sortedArr })
  }

  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong", error: err })
  }
}




module.exports.checkTemp = checkTemp