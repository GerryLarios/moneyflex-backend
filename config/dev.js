module.exports = {
    development: {
        username: "moneyflex_root",
        password: "m0n3yfl3x",
        database: "moneyflex_development",
        host: "127.0.0.1",
        dialect: "postgres"
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: process.env.username,
        password: process.env.password,
        database: process.env.database,
        host: process.env.host,
        dialect: process.env.dialect
    }
}