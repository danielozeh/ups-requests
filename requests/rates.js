const config = require('../config')

/*services codes - {
    07 - World wide express
    08 - World wide expedited
    11 - Standard
}*/

/*
    Unit of Measurement - Dimensions: {
        CM - Nigeria
        IN - International
    }
    {
        PackageWeight: {
            KGS - Local toLocal - Local to International
            LBS - International
        }
    }
*/

/*
    Packaging types: {
        00 - Unknown
        01 - UPS Letter
        02 - Package
        03 - Tube
        04 - Pak
        21 - Express Box
        24 - 25KG Box
        25 - 10KG Box
        30 - Pallet
        2a - Small Express Box
        2b - Medium Express Box
        2c - Large Express Box
    }
*/
module.exports = {
    RateRequest: {
        ShipmentRatingOptions: {
            UserLevelDiscountIndicator: "TRUE",
        },
        //PickupType: {
            //Code: "01"
        //},
        CustomerClassification: {
            Code: "00"
        },
        Shipment: {
            //OriginRecordTransactionTimestamp: new Date().toISOString(),
            Shipper: {
                Name: "Daniel Ozeh",
                ShipperNumber: config.account_number,
                Address: {
                    AddressLine: "12 Olaiya street",
                    City: "IKEJA",
                    StateProvinceCode: "LA",
                    PostalCode: "100212",
                    CountryCode: "NG",
                },
            },
            ShipTo: {
                Name: "Daniel Ozeh",
                Address: {
                    AddressLine: "12 Olaiya street",
                    City: "Lagos",
                    StateProvinceCode: "LA",
                    PostalCode: "100212",
                    CountryCode: "NG",
                },
            },
            ShipFrom: {
                Name: "Daniel Ozeh",
                ShipperNumber: "",
                Address: {
                    AddressLine: "2 Seaforth Avenue",
                    City: "Leeds",
                    StateProvinceCode: "Leeds",
                    PostalCode: "LS96BE",
                    CountryCode: "GB",
                },
            },
            Service: {
                Code: "08",
                Description: "",
            },
            ShipmentTotalWeight: {
                UnitOfMeasurement: {
                    Code: "KGS",
                    Description: "",
                },
                Weight: "7",
            },
            DocumentsOnlyIndicator: '',
            Package: {
                PackagingType: {
                    Code: "02",
                    Description: "Package",
                },
                Dimensions: {
                    UnitOfMeasurement: {
                        Code: "CM",
                    },
                    Length: "10",
                    Width: "7",
                    Height: "5",
                },
                PackageWeight: {
                    UnitOfMeasurement: {
                        Code: "KGS",
                    },
                    Weight: "2",
                }
            },
            PaymentInformation: {
                ShipmentCharge: {
                    Type: "02",
                    BillShipper: {
                        AccountNumber: config.account_number
                    }
                }
            }
        }
    }
}