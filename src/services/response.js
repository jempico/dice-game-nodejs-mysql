//Managing Response Callback

function sendResponse(res, err, data){
    if (err){
      res.json({
        success: false,
        message: err
      })
    } else if (!data){
      res.json({
        success: false,
        message: "Not Found"
      })
    } else {
      res.json({success: true,data: data
      })
    }
  }

  module.exports = sendResponse;