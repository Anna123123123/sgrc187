//HOW RUN THIS CODE
// node seeder.js -d /for deleting all

import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/User.model.js';
import Product from './models/Products.model.js';
// import Order from './models/Order.model';
import connectionDB from './configdb/db.js';

dotenv.config();

// OPTION: 1
// const DATA = JSON.parse(fs.readFileSync('./data/testData.json', 'uttf-8'))
// const importDataToDB = async () => {
//     try {
//         await SomeDB.create(DATA)
//         console.log('Data successfully')
//         process.exit();
//     } catch (err) {
//         console.log(err)
//     }
//     const deleteDataFromDB = async () => {
//         try {
//             await SomeDB.deleteMany()
//             console.log('Data successfully')
//             process.exit();
//         } catch (err) {
//             console.log(err)
//         }

connectionDB();


// OPTION: 2
const importDataToDB = async () => {
    try {
        //await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data was imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`Something error: ${error}`.red.inverse);
        process.exit(1);
    }
}


const destroyedDataFromDB = async () => {
    try {
        //await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data was destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`Something error: ${error}`.red.inverse);
        process.exit(1);
    }
}

console.log(process.argv)


//Call function delete or import
if (process.argv[2] === '-d') {
    destroyedDataFromDB();
} else {
    // (process.argv[2] === '--import')
    importDataToDB();
}
