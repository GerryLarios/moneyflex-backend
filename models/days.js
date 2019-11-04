'use strict';
module.exports = (sequelize, DataTypes) => {
    const Days = sequelize.define('Days', {
        userId: DataTypes.INTEGER,
        initBalance: DataTypes.DOUBLE,
        totalExpense: DataTypes.DOUBLE,
        totalIncome: DataTypes.DOUBLE,
        finalBalance: DataTypes.DOUBLE
    }, {});
    Days.associate = function (models) {
        Days.belongsTo(models.Users, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
        Days.hasMany(models.Records, {
            foreignKey: 'dayId',
            onDelete: 'CASCADE'
        });
    };
    return Days;
};