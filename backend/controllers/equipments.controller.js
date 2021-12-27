const mongoose = require('mongoose')
const db = require('../models/index.js');


// @FETCH all Customers
exports.getEquipments = async (req, res) => {
  try {
    const data = await db.Equipments.find({})
    res.json(data)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};


// @POST a Customer
exports.createEquipments = async (req, res) => {
  const data = new db.Equipments(req.body)
  try {
    await data.save()
    res.status(201).json(data)
  } catch (error) {
    res.status(409).json(error);
  }
};


// UPDATE a Customer
exports.updateEquipments = async (req, res) => {
  try {
    const { id: _id } = req.params
    const data = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Компания не найдена с таким ID')
    const updateData = await db.Equipments.findByIdAndUpdate(_id, { ...data, _id }, { new: true })
    res.json({ updateData, message: 'Компания удалена успешно из БД!' })
  } catch (error) {
    res.json(error)
  }
};


// @DELETE
exports.deleteEquipments = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Компания не найдена')
    await db.Equipments.findByIdAndRemove(id)
    res.json({ message: 'Данные о компании изменены успешно!' })
  } catch (err) {
    res.json(error)
  }
};


// @ADD to Personnel model
// exports.addToPersonnel = async (req, res) => {
//   try {
//     const person = await db.Personnel.find()
//     person.companie.push(req.body);
//     person.save();
   
//   } catch (error) {
//     res.json(error)
//   }
// }