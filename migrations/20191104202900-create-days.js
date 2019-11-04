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
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isInt: true
                }
            },
            initBalance: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                validate: {
                    isNumeric: true
                }
            },
            totalExpense: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                validate: {
                    isNumeric: true
                }
            },
            totalIncome: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                validate: {
                    isNumeric: true
                }
            },
            finalBalance: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                validate: {
                    isNumeric: true
                }
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