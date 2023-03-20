const bcrypt = require('bcrypt');
'use strict';

const hash = bcrypt.hashSync('admin@123', 10);

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [
            {
                id: 1,
                first_name: 'Admin',
                last_name: 'null',
                email: 'admin@mail.com',
                password: hash,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
