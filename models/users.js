'use strict';
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
        active: DataTypes.BOOLEAN
    }, {});
    Users.associate = function (models) {
        Users.hasMany(models.Concepts, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
        Users.hasMany(models.Records, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
        Users.hasMany(models.Days, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
    };
    return Users;
};