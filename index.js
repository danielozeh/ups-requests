var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var axios = require('axios')
const config = require('./config')
const rate_data = require('./requests/rates')
const address_data = require('./requests/address')
const shipment_data = require('./requests/shipments')
const time_in_transit_data = require('./requests/time_in_transit')
const landed_cost_data = require('./requests/landed_cost')
const tracking_number = require('./requests/tracking')

const upsInstance = axios.create({
    baseURL: 'https://wwwcie.ups.com',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type',
        'Accept-Access-Control-Allow-Methods': '*',
        'Access-Contol-Allow-Origin': '*',
        'AccessLicenseNumber': config.access_key,
        'Password': config.password,
        'transId': (Math.random() + 1).toString(36).substring(7),
        'transactionSrc': 'XOLT',
        'Username': config.username,
    }
})

app.get('/', function(req, res) {
    res.send('UPS Requests using Node.js')
})

app.post('/rate', function(req, res) {
    return new Promise((resolve, reject) => {
        upsInstance.post('/ship/v1/rating/Rate', rate_data)
        .then(response => {
            const { status, statusText, data } = response
            if(status === 200 && statusText === 'OK') {
                return res.status(200).json(data)
            }
            return res.status(400).json(data)
        })
        .catch(err => {
            return res.status(500).json(err.response.data)
        })
    })
})

app.post('/address/validate', function(req, res) {
    return new Promise((resolve, reject) => {
        upsInstance.post('/rest/AV', address_data)
        .then(response => {
            const { status, statusText, data } = response
            if(status === 200 && statusText === 'OK') {
                return res.status(200).json(data)
            }
            return res.status(400).json(data)
        })
        .catch(err => {
            return res.status(500).json(err.response.data)
        })
    })
})

app.post('/shipment/create', function(req, res) {
    return new Promise((resolve, reject) => {
        upsInstance.post(`/ship/v1/shipments?additionaladdressvalidation=city`, shipment_data)
        .then(response => {
            const { status, statusText, data } = response
            if(status === 200 && statusText === 'OK') {
                return res.status(200).json(data)
            }
            return res.status(400).json(data)
        })
        .catch(err => {
            return res.status(500).json(err.response.data)
        })
    })
})

app.post('/time-in-transit', function(req, res) {
    return new Promise((resolve, reject) => {
        upsInstance.post(`/rest/TimeInTransit`, time_in_transit_data)
        .then(response => {
            const { status, statusText, data } = response
            if(status === 200 && statusText === 'OK') {
                return res.status(200).json(data)
            }
            return res.status(400).json(data)
        })
        .catch(err => {
            return res.status(500).json(err.response.data)
        })
    })
})

app.post('/landed-cost', function(req, res) {
    return new Promise((resolve, reject) => {
        upsInstance.post(`/brokerage/v1/landedcost/quotes`, landed_cost_data)
        .then(response => {
            const { status, statusText, data } = response
            if(status === 200 && statusText === 'OK') {
                return res.status(200).json(data)
            }
            return res.status(400).json(data)
        })
        .catch(err => {
            return res.status(500).json(err.response.data)
        })
    })
})

app.get('/tracking', function(req, res) {
    return new Promise((resolve, reject) => {
        upsInstance.get(`/track/v1/details${tracking_number}`)
        .then(response => {
            const { status, statusText, data } = response
            if(status === 200 && statusText === 'OK') {
                return res.status(200).json(data)
            }
            return res.status(400).json(data)
        })
        .catch(err => {
            return res.status(500).json(err.response.data)
        })
    })
})

app.listen(port, function() {
    console.log(`UPS requests running on port  ${port}`)
})