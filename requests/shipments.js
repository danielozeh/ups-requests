const config = require('../config')

module.exports = {
    ShipmentRequest: {
        Shipment: {
            Description: "Description of goods", //max 50 characters
            Shipper: {
                Name: "Daniel Ozeh",
                AttentionName: "Daniel Ozeh",
                TaxIdentificationNumber: "",
                Phone: {
                    Number: "2348134277988"
                },
                ShipperNumber: config.account_number,
                Address: {
                    AddressLine: "12 Olaiya street",
                    City: "Ikeja",
                    StateProvinceCode: "LA",
                    PostalCode: "100212",
                    CountryCode: "NG",
                },
            },
            ShipTo: {
                Name: "Daniel Ozeh",
                AttentionName: "Daniel Ozeh",
                Phone: {
                    Number: "2348134277988"
                },
                FaxNumber: "",
                TaxIdentificationNumber: "",
                Address: {
                    AddressLine: "355 West San Fernando Street",
                    City: "San Jose",
                    StateProvinceCode: "CA",
                    PostalCode: "95113",
                    CountryCode: "US",
                },
            },
            PaymentInformation: {
                ShipmentCharge: {
                    Type: "01",
                    BillShipper: {
                        AccountNumber: config.account_number
                    }
                }
            },
            Service: {
                Code: "07",
                Description: "World Wide express"
            },
            Package: [
                {
                    Description: "International Goods",
                    Packaging: {
                        Code: "02"
                    },
                    PackageWeight: {
                        UnitOfMeasurement: {
                            Code: "KGS"
                        },
                        Weight: "3"
                    },
                    PackageServiceOptions: ""
                },
                {
                    Description: "International Goods",
                    Packaging: {
                        Code: "02"
                    },
                    PackageWeight: {
                        UnitOfMeasurement: {
                            Code: "KGS"
                        },
                        Weight: "3"
                    },
                    PackageServiceOptions: ""
                }
            ],
            ItemizedChargesRequestedIndicator: "",
            RatingMethodRequestedIndicator: "",
            TaxInformationIndicator: "",
            ShipmentRatingOptions: {
                NegotiatedRatesIndicator: ""
            }
        },
        LabelSpecification: {
            LabelImageFormat: {
                Code: "GIF" //PNG 
            }
        }
    }
}