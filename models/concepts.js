'use strict';
module.exports = (sequelize, DataTypes) => {
    const Concepts = sequelize.define('Concepts', {
        userId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        category: DataTypes.ENUM('income', 'expense', 'saving'),
        active: DataTypes.BOOLEAN,
    }, {});
    Concepts.associate = function (models) {
        Concepts.belongsTo(models.Users, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
        Concepts.hasOne(models.Records, {
            foreignKey: 'conceptId'
        });
    };
    return Concepts;
};