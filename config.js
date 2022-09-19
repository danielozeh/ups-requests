require('dotenv').config()

module.exports = {
    url: process.env.UPS_URL,
    username: process.env.UPS_USERNAME,
    password: process.env.UPS_PASSWORD,
    account_number: process.env.UPS_ACCOUNT_NUMBER,
    access_key: process.env.UPS_ACCESS_KEY
}