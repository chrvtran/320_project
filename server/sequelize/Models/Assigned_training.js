const { DataTypes, Sequelize } = require('sequelize');

const schema = {
    at_id : {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    e_id : {
        type: DataTypes.BIGINT,
    },
    title : {
        type: DataTypes.STRING,
    },
    description : {
        type: DataTypes.STRING,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_created : {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    date_due : {
        type: DataTypes.DATE,
    },
    progress : {
        type: DataTypes.STRING,
    },
};

module.exports = ['assigned_training',schema];