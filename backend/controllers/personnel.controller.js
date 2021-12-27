const mongoose = require('mongoose')
const db = require('../models/index')

//STATUS можно оне указывать автоматически поонимает

// exports.showPersonnel = async (req, res) => {
//   try {
//     const fetchPersons = await db.Personnel.find()
//     res.json(fetchPersons)
//   } catch (error) {
//     res.status(409).json(error);
//   }
// }
// @FETCH all Objects
exports.getPersonnels = async (req, res) => {
  try {
    // console.log(req.query)

    // // 1) Filtering query
    // const queryObj = { ...req.query }
    // const exludeFields = ['page', 'sort', 'limit', 'fields']
    // exludeFields.forEach(el => delete queryObj[el])

    // console.log(req.query, queryObj)

    // // 2) Advanced filtering
    // let queryStr = JSON.stringify(queryObj)
    // queryStr = queryStr.replace(/\(gte|gt|lte|lt)\b/g, match => `$${match}`)
    // console.log(queryStr)
    // const query = db.Personnel(JSON.parse(queryStr))

    // // 3) Execute querys
    // //const query = db.Personnel(queryObj)
    // const personnels = await query

    // const FETCH_DB_COLLECTIONS = await db.Personnel.find(queryObj)
    // res.status(200).json(FETCH_DB_COLLECTIONS)

    const FETCH_DB_COLLECTIONS = await db.Personnel
      .find()
      .populate('companie')
      .exec(function (err, persons) {
        // console.log('person', person)
        db.Company.find({
          _id: { $nin: persons.companie }
        }, function (err, company) {
          res.json({ persons, company });
        });
      });
    //return await res.status(200).json(fetchPerson)
  } catch (error) {
    res.status(409).json(error);
  }

  // .then(data => res.json(data))
  // .catch(error => res.status(400).json('Error: ' + error))
};


// @POST a Object
exports.createPersonnel = async (req, res) => {
  // const personnel = req.body

  const newPersonnel = new db.Personnel(req.body)

  // #2 const {id, realname, username, position, ...} = req.body

  // # 1 
  // const personnel = new Personnel({
  //   id: req.body.id,
  //   realname: req.body.realname,
  //   username: req.body.username,
  //   position: req.body.position,
  //   email: req.body.email,
  //   domain: req.body.domain,
  //   related_hardware: req.body.related_hardware,
  //   privilege_level: req.body.privilege_level,
  //   is_security_administrator: req.body.is_security_administrator,
  //   number_of_incidents: req.body.number_of_incidents,
  //   addition_info: req.body.addition_info
  // });
  try {
    await newPersonnel.save()
    res.status(201).json(newPersonnel)
  } catch (error) {
    res.status(409).json(error);
  }
  // personnel.save()
  // .then(() => {
  //   res.status(200).json('Added');
  // })
  // .catch(err => {
  //   res.status(400).json(err);
  // });
};


// @GET Object by ID
exports.getPersonnel = async (req, res) => {
  try {
    const data = await db.Personnel.findById(req.params.id)
    //db.Personnel.findOne({_id: req.params.id})

    res.status(200).json({
      status: 'Data Received Successfully!',
      data  // data: {data:data} data: {data}
    });
  } catch (err) {
    res.status(404).json({
      status: 'An error has occurred!',
      err // data: {err}
    })
  }

  // .then(data => res.json(data))
  // .catch(err => res.status(400).json('Error', err))
};


// @UPDATE a Object
exports.updatePersonnel = async (req, res) => {
  const { id: _id } = req.params
  const person = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

  const updatePerson = await db.Personnel.findByIdAndUpdate(_id, { ...person, _id }, { new: true })

  res.json(updatePerson)
  // Personnel.findByIdAndUpdate(
  //   req.params.id,
  // // or req.body
  //   {
  //     user: req.body.user,
  //     email: req.body.email
  //   },
  //   { new: true }
  // )
  //   .select('-__v')
  //   .then(data => {
  //     if (!data) {
  //       return res.status(404).send({
  //         message: "Error -> Can NOT update a customer with id = " + req.params.id,
  //         error: "Not Found!"
  //       });
  //     }
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     return res.status(400).send({
  //       message: "Error -> Can not update a customer with id = " + req.params.id,
  //       error: err.message
  //     });
  //   });
};

// @DELETE a Object
exports.deletePersonnel = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Пользователя с таким Id найдено')

    await db.Personnel.findByIdAndRemove(id)
    res.json({ message: 'Пользователь удален успешно!' })

  } catch (err) {
    res.status(404).json({
      status: 'An error has occurred!',
      message: err // data: {err}
    })
  }



  // Personnel.findOneAndDelete(req.params.id)
  //   .then(() => res.json('Exercise delete'))
  //   .catch(err => res.status(400).json('Error', err))
};