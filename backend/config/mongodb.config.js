const mongoose = require('mongoose');
const Role = require('../models/role.model')

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_MONGODB
            .replace('<USER>', process.env.DATABASE_USER)
            .replace('<PASSWORD>', process.env.DATABASE_PASSWORD))

        console.log(`MongoDB connected🐱‍👤: ${conn.connection.host}`.cyan.underline)

        initial()


        console.log(`Все готово!🔥`)
    } catch (err) {
        console.error(`Error: ${err.message}🤢`.red.underline.bold)
        process.exit(1)
    }
}

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}


module.exports = connectionDB;