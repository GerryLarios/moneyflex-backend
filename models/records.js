'use strict';
module.exports = (sequelize, DataTypes) => {
    const Records = sequelize.define('Records', {
        userId: DataTypes.INTEGER,
        conceptId: DataTypes.INTEGER,
        dayId: DataTypes.INTEGER,
        amount: DataTypes.DOUBLE,
        description: DataTypes.STRING
    }, {});
    Records.associate = function (models) {
        Records.belongsTo(models.Users, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
        Records.belongsTo(models.Days, {
            foreignKey: 'dayId',
            onDelete: 'CASCADE'
        });
        Records.belongsTo(models.Concepts, {
            foreignKey: 'conceptId',
        });
    };
    return Records;
};