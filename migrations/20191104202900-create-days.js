'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Days', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER
            },
            initBalance: {
                type: Sequelize.DOUBLE
            },
            totalExpense: {
                type: Sequelize.DOUBLE
            },
            totalIncome: {
                type: Sequelize.DOUBLE
            },
            finalBalance: {
                type: Sequelize.DOUBLE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Days');
    }
};