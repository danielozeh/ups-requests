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
                    AddressLine: "4651 Chapmans Lane",
                    City: "Leeds",
                    StateProvinceCode: "",
                    PostalCode: "87825",
                    CountryCode: "GB",
                },
            },
            ShipFrom: {
                Name: "Daniel Ozeh",
                AttentionName: "Daniel Ozeh",
                TaxIdentificationNumber: "",
                Phone: {
                    Number: "2348134277988"
                },
                Address: {
                    AddressLine: "12 Olaiya street",
                    City: "Surulere",
                    StateProvinceCode: "LA",
                    PostalCode: "101283",
                    CountryCode: "NG",
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
                Description: ""
            },
            Package: {
                Description: "Local Goods",
                Packaging: {
                    Code: "02",
                    Description: ""
                },
                PackageWeight: {
                    UnitOfMeasurement: {
                        Code: "KGS"
                    },
                    Weight: "3"
                },
                Dimensions: {
                    UnitOfMeasurement: {
                        Code: "CM"
                    },
                    Length: "20",
                    Width: "2",
                    Height: "5"
                },
                PackageServiceOptions: ""
            },
            NumOfPiecesInShipment: "1",
            ItemizedChargesRequestedIndicator: "",
            RatingMethodRequestedIndicator: "",
            TaxInformationIndicator: "",
            ShipmentRatingOptions: {
                NegotiatedRatesIndicator: ""
            }
        },
        LabelSpecification: {
            LabelImageFormat: {
                Code: "PNG" //PNG 
            }
        }
    }
}