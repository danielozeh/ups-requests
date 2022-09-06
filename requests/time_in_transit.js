const config = require('../config');

module.exports = {
    Security: {
        UsernameToken: {
            Username: config.username,
            Password: config.password
        },
        UPSServiceAccessToken: {
            AccessLicenseNumber: config.access_key
        }
    },
    TimeInTransitRequest: {
        Request: {
            RequestOption: "TNT",
            TransactionReference: {
                CustomerContext: "",
                TransactionIdentifier: ""
            }
        },
        ShipFrom: {
            Address: {
                City: "Lagos",
                StateProvinceCode: "",
                PostalCode: "100123",
                CountryCode: "NG",
            },
        },
        ShipTo: {
            Address: {
                City: "Leeds",
                //StateProvinceCode: "SD",
                PostalCode: "LS9 6BE",
                CountryCode: "GB",
            },
        },
        Pickup: {
            Date: '20220905'
        },
        ShipmentWeight: {
            UnitOfMeasurement: {
                Code: "KGS",
                Description: "Kilograms"
            },
            Weight: "5"
        },
        //TotalPackagesInShipment: '1',
        MaximumListSize: "1",
        InvoiceLineTotal: {
            CurrencyCode: "NGN",
            MonetaryValue: "87579.17"
        }
    }
}