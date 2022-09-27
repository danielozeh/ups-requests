const config = require('../config')

module.exports = {
    PickupCreationRequest: {
        RatePickupIndicator: 'N',
        Shipper: {
            Account: {
                AccountNumber: config.account_number,
                AccountCountryCode: 'NG'
            }
        },
        PickupDateInfo: {
            CloseTime: '1700',
            ReadyTime: '1000',
            PickupDate: '20220922'
        },
        PickupAddress: {
            CompanyName: 'Daniel Ozeh',
            ContactName: 'Daniel Ozeh',
            AddressLine: '045 Oladimeji street, Aguda',
            City: 'Surulere',
            StateProvince: '',
            PostalCode: '101283',
            CountryCode: 'NG',
            ResidentialIndicator: 'Y',
            Phone: {
                Number: '+2348134277988'
            }
        },
        AlternateAddressIndicator: 'N',
        PickupPiece: {
            ServiceCode: '007',
            Quantity: '1',
            DestinationCountryCode: 'GB',
            ContainerCode: '01', //01 - package, 02 - UPS Letter, 03 - Pallet
        },
        TotalWeight: {
            Weight: '2',
            UnitOfMeasurement: 'KGS'
        },
        OverWeightIndicator: 'N', //if weight over 32kgs or 70lbs, indicatior is Y else N
        PaymentMethod: '01',
        SpecialInstruction: 'Instruction here',
        ServiceCategory: '01', //if country is BE, FR, DE, IT, MX, NL, PL, ES, GB (01 - domestic, 02 - International)
        ShipmentLabelsAvailable: 'Y',
        TrackingDataWithReferenceNumber: {
            TrackingNumber: '1Z796AA36632366869'
        }
    }
}