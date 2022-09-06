module.exports = {
    RateRequest: {
      Shipment: {
        ShipmentRatingOptions: {
          UserLevelDiscountIndicator: "TRUE",
        },
        Shipper: {
          Name: "Billy Blanks",
          ShipperNumber: "",
          Address: {
            AddressLine: "366 Robin LN SE",
            City: "Marietta",
            StateProvinceCode: "GA",
            PostalCode: "30067",
            CountryCode: "US",
          },
        },
        ShipTo: {
          Name: "Sarita Lynn",
          Address: {
            AddressLine: "355 West San Fernando Street",
            City: "San Jose",
            StateProvinceCode: "CA",
            PostalCode: "95113",
            CountryCode: "US",
          },
        },
        ShipFrom: {
          Name: "Billy Blanks",
          Address: {
            AddressLine: "366 Robin LN SE",
            City: "Marietta",
            StateProvinceCode: "GA",
            PostalCode: "30067",
            CountryCode: "US",
          },
        },
        Service: {
          Code: "03",
          Description: "Ground",
        },
        ShipmentTotalWeight: {
          UnitOfMeasurement: {
            Code: "LBS",
            Description: "Pounds",
          },
          Weight: "10",
        },
        Package: {
          PackagingType: {
            Code: "02",
            Description: "Package",
          },
          Dimensions: {
            UnitOfMeasurement: {
              Code: "IN",
            },
            Length: "10",
            Width: "7",
            Height: "5",
          },
          PackageWeight: {
            UnitOfMeasurement: {
              Code: "LBS",
            },
            Weight: "7",
          },
        },
      },
    },
  };
  