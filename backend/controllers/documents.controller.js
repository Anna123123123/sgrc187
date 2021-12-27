const commissionOrder = require('../documents/commission-order')
const pdf = require('html-pdf')


exports.fetchCommissionOrderPdf = async (req, res) => {
    try {
       await res.sendFile('./../result.pdf')
      } catch (error) {
        res.status(404).json({ message: error.message })
      }
}

exports.createCommissionOrderPdf = async (req, res) => {
       try {
           pdf.create(commissionOrder(req.body), {}).toFile('result.pdf', (err) => {
          if(err) {
              res.send(Promise.reject());
          }
          res.send(Promise.resolve());
      });
       } catch (error) {
         console.log(error)
       }  
}


