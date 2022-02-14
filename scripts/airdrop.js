// This script is for airdrop mock on testnet
const { ethers } = require("hardhat")
const { getBigNumber } = require("./shared/utilities")

const RECEIVERS = [
  // "0xc7e318811aAc4e3975BF49d6A7C6FBC82D2305a7",
  // "0xf3ab571f2aae7665d6608e45601af108bd270105",
  // "0x7B4740924BeF9A62a042E0548D7586AEF436Ef1E",
  // "0x67dd07Ef4cfe619940c7489523fa33CD189Af2a2",
  // "0xf68B8be6075A835559FA8851F598995fEBDA5B40",
  // "0x7026876DB37e16FD7BC515f210Ae3e9590d8e866",
  // "0x44c35b7f06a23b0c1b576d4ce21d22152d085b5a",
  // "0x7621cab303BDe21ACa5f8f7111Edc816b8A28ed9",
  // "0x9F5e349E396D51a2ce3f137B3D9edb5f8863785d",
  // "0x4eC69615bb5C4506c93F65bC991cCeb8a640582E",
  // "0xA4210b0dAbC08CE4965ab03874338183b8d91A58",
  // "0x5CA2BD34ab55147d6e8468f94E414168699Abc30",
  // "0x29b5236b7D5E549e25Af7910BB18EDdC90405919",
  // "0x543739C7f057A332F6a1298C5A0BDDd17cFc5429",
  // "0x203fE2a4BA4Cf5deb136f280a54f604Acb2929ba",
  // "0xe6f924f3b269A2b2b21327395FD0522b0d7Bd437",
  // "0x44D142fa5EaD699Cb550CA9D2ab0022B74853362",
  // "0xD95f5A6c50C3E3D0546a409dA5148a31f916014C",
  // "0x6353f31fdB1c4Ec86B9730e03135eA09C0efbbDf",
  // "0xB564c6371dd5d4E007167d3272Ea74BA3E078f95",
  // "0x02766E3d25BDA6badcD34d7BCEA5bF054990444A",
  // "0xDd29d1C8AC8A6ce3070cC29103227aD8AFc09550",
  // "0xD920AF54662E86f329da602873FD0DfE6D86982A",
  // "0x5b9c3F060A92F080213EaA0BB13FABE4279cFa76",
  // "0xc9476F234E141885fC2e45473e035d2941740D41",
  // "0x4231e85B776328ED323dF759f7ddb3A5DAc615f5",
  // "0xe33248B01dbB547ae53caF9caAE1c12B3f21185e",
  // "0x226825354172f5e0f01B79621e0764fE2F1b11ed",
  // "0x31BA2fb498a292E7B802b627778E675B38d85b04",
  // "0x8bbEca4D93Ce618407dfE431990e6C0C74a0f71f",
  // "0x558219cF7B1de8B6f9520Fbf8735b452519D5d35",
  // "0xe550160602ceb28e1fb24b45815d58bfa6bc311b",
  // "0x864e5bd224b7905cf1ccc37ea2e00447747b86bd",
  // "0xE489Ca511aD4c0102BF340ad8608a6a3B0046d42",
  // "0x70c71C697f07644a6872aa118B062fa4e131C8C4",
  // "0x1d17ef8ec98b3c363a05cb53e112dc818d78fdf1",
  // "0x1c705a67f952a67d878392edbe37f52ED71b4c39",
  // "0x15D6aAAfaD6255BaE4Cc6805617A03a7D8c5e991",
  // "0x83c46611F9717c58e2664AD86B32Df707B9207d0",
  // "0x2928efe2445b25daef27ff9c05b80d343a97ad6f",
  // "0x0aEC243F82fFd017666F6ffDF9fA81DAf2546fB4",
  // "0x07d65EeD5BBfFc7A7fb767b1d9b2E008F9bcE0A3",
  // "0x043e7570fce20ad90e09bc17423b63fedf47e732",
  // "0x5a0a92471609D63454190d11Ccd3058947c4F7fb",
  // "0xb3e79064E622BED5d85042DD2425a115708c2574",
  // "0xA02c4436c82278E23131e3e704dA76FFabaE4Ad2",
  // "0x602b8f2cde7a86c436942e7b4c2429bc8769abe8",
  // "0x028e56Cb58F29Af9198E0b446a5014265623360e",
  // "0x6de651861Ffe0C941C4D4368AD02d5840abDbfB0",
  // "0x2330BEF3F3025839Fb3245c3EA3B5F1F26a6d471",
  // "0x30ca6292330d6626b97480d930dc70c3ea400c37",
  // "0x87991bAf68ADA3Edc2Aefb02d9B4fdB9AF9Ac97d",
  // "0x23C783E25D6A409578fFf1FCEbe4F548fe529583",
  // "0x5EB4036941dA9321BF808264A66180d61B2196D6",
  // "0xB32394fda7858C5D377AadC6911E917Fe66B6b8D",
  // "0x64E1B1c3f9FC36Dc1C0C6bEE49506d0a2fB04f5A",
  // "0x3452846e9290E280e44E1Fc63d6cD0E3a8923175",
  // "0xcFAe930F9C59133ef3847721eebE94D3b3E25508",
  // "0x0fb680e7de03F32bfe31e774ec10AdF5bD5a5f6B",
  // "0x9b9FE7f26ef91b89693F58a734c72C24960712D7",
  // "0x5F509C7B017833f38478d1CA52025aB2a334289F",
  // "0xEA94e8832CADd3c2DA4ccbE78C5f889dA2782Ae0",
  // "0x43c9a3cec8927ecfaED1a0a63aB6e17ac7540acE",
  // "0xC0a28EA12fae82FcD693b8aE9cDd552B93608cE7",
  // "0x2EaD2E8677fdf1ce8Be30208bb9eCe0fb5714594",
  // "0xc518122058774be89eb458e4a746afc255cd64f0",
  // "0x52b56B87dAbd3b6DCa06B77420Eef35578044f14",
  // "0xA017279b02E3b92F252Cf7239BDc2a5F7Fe6223e",
  // "0xBf44444493A7cEB238842f4Ad6e9D9aa15df6444",
  // "0xa1B368C248B67FDF190A07DB33E164345837cc6F",
  // "0x000b5c55862743d82b44dF0835E26ce3C0dB8bd2",
  // "0x64Be47b57F75Fd5F7d3430CfB3EC79E585340302",
  // "0xfb34A59731769770069667aD4c806cd282f5968d",
  // "0xfa38Be1fbc23D94B95C695F8610A48e255569005",
  // "0xEC2A5Cab1081EC2714281619F1AD4f21D8D4cFe9",
  // "0x067Eb0A4852D9B91bf9b0b433355DC8Fe7D5260E",
  // "0x4B308AFd2507a95474360e6a31840d97588ceCc8",
  // "0x4036Fb75984A38F891Ff9377CcE17a918F0e0C7D",
  // "0x6A25336f87Ec124Ec9D9A76a34FB05E4823C1CFA",
  // "0xED2aD6ceE180E62d16e55CC6849B98Dc44196F9f",
  // "0x71720D8b631CF7C231eC1A90022275291D9c8030",
  // "0x197B5Ab06217ae29Ed66Af0C105eFDD5a19Be4B1",
  // "0x80fb2A440319b85054ab6047bA2f437053100B4E",
  // "0x58917413b274ea943723ba48bfc4e262584ee444",
  // "0x7aC9C9135de57041095103d2aA8B5Be31B9aa415",
  // "0x2Ded50f1DFc3790738734F1311303e8F721F5F1b",
  // "0xd7BB739060a742dD147168abA4f1B7C304759617",
  // "0xcdc41c0fa6e56eaf0387a71c0b121d3964297062",
  // "0x71885C959da8519d1b6AE0Eb64B4256b59430968",
  // "0x305ebfb40d3c486817ff08f8094139a2dfaf3aaa",
  // "0xc0338Ce3959B7009A80683544339b0cdc8619555",
  // "0x0Af8f7e3A5d5D1C7f1b053E24514DE5DB1B89091",
  // "0x832112922724FDDf6B53647afB563177C722F5dC",
  // "0x125759edAa85103FADD72f7D58657e1c6B419376",
  // "0x593DF06116bE0e403791621B012167db5F6a1293",
  // "0xad7b72f7b302c933695b448f307554da4fb142ef",
  // "0x776aF428c73670A6716f11a9E94e1085936A3993",
  // "0xCcF2479E90335D230401f34cb4e91873c482BE5c",
  // "0x4DdfCC73fF5518a918eAAbBDBBdfe9e3b08b7e9A",
  // "0xC41B7181d9086cb5AeeA0fe220112a62306C0E34",
  // "0xf31c63F9a33d832528Ac9E40a9B51946ED3aCF7C",
  // "0x1D914fDA456C5444cA1700b1569fC8D916030F81",
  // "0x14dA66930305BD35FBC0cb41863478009f5B4fcc",
  // "0x2a584861DA90D254Fab9C4ceF4A385d6582FcebF",
  // "0x5cF2286B8eD3e42D796fE6511ab651681BC74625",
  // "0x831C9fb22D32c1E8CC2e46c47eA6B6D052518B4e",
  // "0xD201383514128dDd1025aaA3be525cf714336033",
  // "0x795B91b1e890830b9A4D5CCa81641D10209e119a",
  // "0x8cb0EFb454e74cE1E2d56C66F7A9d7922BC8750a",
  // "0xf7837730D6C499fe779AD5fDa97A4c84c08568ED",
  // "0xB9541c0e9A8c233BC9fcaE6Ee2FF07A4599c669F",
  // "0x27c410E964297b5af1d595768Dd4773d03b89BA6",
  // "0x3647dc34eBEbA66573217936D1e2DB253968dA6D",
  // "0x9ba85956F24C4Ada71B62eF4cF977661C1ef2609",
  // "0x6231449883cAb1Ae172Ba152359Ab675869B0E74",
  // "0x29a32C0A2815238082E093aC594dfb1D0494608a",
  // "0xde85B3bAf81A4B07DdA9c1d2CCFc2b41CF1211f5",
  // "0x5A4107aB3a84Dac4c77066d59eDBCDaa799376A0",
  // "0x4Bded2cF1aF1c2db118e639e6bc908C1976B2415",
  // "0x943385B95cf5083e9b547C9126AE380a26B4FaBf",
  // "0x679F5652fbC0e51C13BF3Dd0EaB6b03c5051e7E1",
  // "0x96a0beD452eF4105221C03D65FD8A7353b2c7973",
  // "0x1003fDF8947F152819A244f2922C64032d3879A0",
  // "0xfFb434b691194bB287fa292d50F4ac6E5dc8a9E5",
  // "0x9c21b8ad23781fC5EfE2c15Aa83827f1bDB8aa2E",
  // "0x3e83e84F99bb9270885FBfD7780C8526F1C8385D",
  // "0x83AB587862Ebdea493A089b5b879b5f47D1caEFF",
  // "0x8B41ff0C1DaA3575383539481056C5a39Df822Bd",
  // "0x02A4b23211DA35Ec2a315F1E59E82f8147b94006",
  // "0x5a199216a044D40bd4e3edB8C6962d968dBEc4DD",
  // "0xD3c6A5fbee62a02e79C15cf9a8eD772acb346f42",
  // "0xd612e6b85f37b77B39c84d5Bf5004C984245bc82",
  // "0xdc5F1a806029B4BBf134e19FA3972aA2442A1a79",
  // "0xa72EF5Aa2f243eA16Aa755f7f447592551f3EfB9",
  // "0xB0Cf9b5fF7DE98306D7DA654f3a8DB46D5f75BE5",
  // "0x420890A544aCe2a610b4d97FFBC7EAf185947302",
  // "0x5C72C6775DD559B6FC8Cac943E8fD40584B3cf09",
  // "0x3158788375ca3b53b86C68befFC01ADa5C9c467f",
  // "0x3aA1eAbAa6E171EF5511245aB9Dee4c059924916",
  // "0x75b81d6B90293d2cb1B58207B501CAa87FE0b35B",
  // "0x4e2cA23358C287C9B187c25A08814be33DBF270E",
  // "0x6faa9A98536C3FEbaC393F338895139375B1c327",
  // "0x61676776bcFd75568089ec837Ee1B2557a5eF3D5",
  // "0x2873CFe46f944D15a396ec2494367D15077EB884",
  // "0x44CCa6C8b27943F5cc139C95aE2Eb25ecDeF32F8",
  // "0xf3889d87362ed2b49E1f8a28AAC284b1fF44dBDb",
  // "0x570b0108515Ab3ccB2697da3B31144F49263c46B",
  // "0x80b4039dF9A7B3CA9048514d66367C64602D3455",
  // "0x0D1147915E036372EC43ECf3996026533aaFa409",
  // "0xc59c6e75a7253930e9f25e547b3e165c5bf83c3b",
  // "0x9EEAde692d5F6bE8016601D6D2d99651823AB053",
  // "0x410a6c7D7E4bDf6b6E8A63614c8ff30BB24fD72D",
  // "0x09Cac55B2E164992d30ff4725a7ffEf24Fefd7C4",
  // "0x3f61A2F527b92E7f17a3b65063886C12bF1e7935",
  // "0xE010EA3D79C1158e32112Ad77f17b2431502eF8C",
  // "0x6995e61d8914d96b19ca5004992b8d3b8451dbe1",
  // "0xdcdaac73e897f15e92915e147dbd639ff543670a",
  // "0xEBb6A5539D7a84A0BabB410f9C11d712A4eD6c2E",
  // "0x64D3C1594daDfD2e9D995fEe03676B5a2Dba1ae5",
  // "0x064CCB6a3C19A0875A49aA21FC19b13E9bd9a7d7",
  // "0xA95Bb32Db07f597f3e4AebBA0D87dE55c08830a0",
  // "0xB0164be48f0e970Ed25B9A9bd3845c054fA980b8",
  // "0x6053D53f717D82EEb5165853Fe6B25E18e7752Fa",
  // "0x6cB3e775218c9f5C7cF090158F2500B8A845278d",
  // "0x9309Da6077D7c0833aE20631846e00bBac5D0FA4",
  // "0x8f0a47f51a4e3bb1548628dA601a7b8b703Fbb04",
  // "0x1d7A707497feaf016D9e8795D55fD62ca4fca80d",
  // "0x088bbE24eb788c7A5cf420a7Ca698FBe48902784",
  // "0xf7Fb463c7C37eF001049713CD166A4F5bE368Dd8",
  // "0x1c52b92DeAea437d8E5b41C1c4C350Df0313C607",
  // "0x6D47BF4d52421ABf9dE46904c2D9660cB6FaE53E",
  // "0xBe236b156768801CCAF59d3AeE864f51133aeEee",
  // "0xA2DbE4cEc3cc99f5e95A337C62159F278E2D2c8b",
  // "0x4d192F8a84Fee9459C9F93eD407Dbe5Fd958C76e",
  // "0x4Cb369361508B2899Ba41fbD26be26c9D9c2B911",
  // "0x9B126949E111af5b23B58dDfdE1400AA481Fea4A",
  // "0x3794d7dBFEb352e2aFAbBD0d2cC4077Bf7dB41bA",
  // "0xBB648D84Ed73C7a3D277F47d9981206B376d962d",
  // "0x527a5F10F0f73CEC684dFB57721A89D09b231FC1",
  // "0xd215D9E1C4C7Ae3850C1Eae640eD0D2ef9Ba06D6",
  // "0x523Eaa95DCFF98C59e49d1646E2C3f89244103c5",
  // "0x8E8D644379D513f143eaf4D8D2D3bC85e2848686",
  // "0x23c14E77e980e8D90851c72678ec5f4255aF7874",
  // "0x16a3C50F1ec275335CF2FEaf96738De54C6ae9a2",
  // "0x2c4C759511CAceb187A490DA1002662270FdBf40",
  // "0x5b51a6E4f764E8853A28a7088e7f5De6eeE5E867",
  // "0x43aD98a7a79D14691E8B89149Bb1e166Ab45f8E0",
  // "0xE7070e348e1b7e2cAfA7FB8baAdcF3bfb8646402",
  // "0x8c0D2D8858200f09965eD869AeAc6AFDd40688A7",
  // "0xb63e2097770e4bbECf122dC261Dcb25e4b47381B",
  // "0x4848B755b7d4653efe95834165A8De3578A5930F",
  // "0xF0E4f911cE4Ca27e9e53804442BEd1aB9EE4D454",
  // "0xA3B583470A53aeb2848d9b24D0f385Be40CfA127",
  // "0xd911f2307A3C39cdeb6Bf08FaE509B800B18B149",
  // "0xd3532f492A69f33BCd2103478457B4B2E2d767db",
  // "0x35c19d2569BCcFB5E54128E813D6EE9915CB12be",
  // "0x5dFC4364b3955E94ADb6Af65186c1A27294154fc",
  // "0x3aDF8D0937598837b980C2cB9876369f83Ce8456",
  // "0x02A0Ff1EC6cEF01E72fDF2A761225caBd7880CC1",
  // "0xCE67A83e8deF7DEa50bda2A8b39f2Bb45A6B22f9",
  // "0x924c5fF06a3e3d705c72140DB61E669f3749935c",
  // "0x79091dfC120D693Fd208a2d43aAE3A561A09A965",
  // "0x91bc778A15c34bF09f3553d168441dD5EF790F52",
  // "0x0E654f822C651dED15fc155590d1E5D520352336",
  // "0xcf6BE44c5089f13e5D67d88d1fb484523e1f4839",
  // "0x13B65bC0885E7D9F11F6AfFD0Ba44c19Ddc12C41",
  // "0xA64865C88936220ac3cC646C93153636991184f1",
  // "0xEDfA4d7F9a03f280287f171bB514707c95DF46aF",
  // "0x17f11f0B70Eb4Fb9CfA09f1B0A2cc73cD626EE77",
  // "0x26F8de8f82bEfBCf748BD9F6CA997f90d0467830",
  // "0x76dE1e660c5f606f427C2490558f78299c4410Be",
  // "0xA4704E538c2aB3879B7f471B293a490b4BC401e8",
  // "0xf7ce9fb0c99433cc12f08f202a2c87fa94cca602",
  // "0x0cfD7bebb6b68e049dab28b207203a930f6A5fe2",
  // "0xAF50716c1b0e8aa81bE0dD28F96FaBAdff5db452",
  // "0x5456e804B5EA5c590e8b7Ff9d3F6b1F7D3bBAf75",
  // "0x22363a27920cE769E396f59D63BB8744bd677b23",
  // "0x5F481f92d6C6FEB8b84d71e0DE8bdB979B36C7Ca",
  // "0xE06069c19766f0a679969e583974D83C02c1f7A4",
  // "0x4577f57D050B3a2B5bdf921e8ABCBf246F4007AF",
  // "0x6DE4Bda8cC6fA9c254A7F89EDBAE39ecb9AD7Af3",
  // "0x0d33822188b2f166ca4ad5D456Fc0cea25Edfd4D",
  // "0x920C6a0a664dd40C2c3f4542F0a984F4D3FdFeb4",
  // "0xf8b35F1e2fadBCa8e593A00fd7089738F8fBccb2",
  // "0x7445ADBE5D40a65b7A0143775A3c7d0B9a16eD9B",
  // "0x91500bE1491460a8cD28Db6aEB2c8a32b2e0dECC",
  // "0x28963E2d760cf9689F2245f7aC52e10683a3954D",
  // "0xF5435c2cd0Ab5c0C1a5e25Ce5F97D6571De2FFC0",
  // "0x9782E6f287De27B65C3661FeC0BDB27408Ccb12B",
  // "0xEDfA4d7F9a03f280287f171bB514707c95DF46aF",
  // "0xF0E4f911cE4Ca27e9e53804442BEd1aB9EE4D454",
  // "0x52be4309BA5647905Dd1AB7845BC2452D9777b9A",
  // "0xF0E4f911cE4Ca27e9e53804442BEd1aB9EE4D454",
  // "0x47b17b71ab5e139201cC9062C1e8f5bD5f281830",
  // "0x2828d3B8056c5325b6f2744Df1C83e1251825Fc7",
  // "0x95E2Dcc933fFa4b4faB30Ca270bC5DA1223e61F2",
  // "0x243983847e46B0eaAE3c1d42ED2e2a06d6Aa4b2D",
  // "0x3eF03Ce765759FD4Ac0Ee703Ec6f126e01f60A87",
  // "0x375Fba3b99373332B201358bc1030ae98688A7CA",
  // "0xFd15B0Fdc81D266249904C0995075e8A4EA56074",
  // "0xA6365324f2c01e9756914faCe36215d780a1d019",
  // "0xd40195cE8426A9090F2115452c10161305A34d16",
  // "0xcc079F95791684b97D77f91c22272045209bfE82",
  // "0x473E72ada42706B386567525974a799F59e98EcA",
  // "0xC1D998048B802928e43b45f9A3CE84C8E8A724c4",
  // "0x5dD75b9303Ca93eB848b5e8c2C181e008E121127",
  // "0x160Cd5d5764E9f56fA9738c624fAdB0649E6B593",
  // "0x8D6Ef0CDdc616D9b07C5BcE9Cf1feC4340811287",
  // "0xddf9089Fa50Ce1111F29021418a3308aBA2b8ef2",
  // "0xd679aB02275bE0C874909DBE84DF797921513B83",
  // "0x1Fd88142D097A3Da43414dAFFA51C0bEFa50Ca14",
  // "0x65e080Bf68105EcC6D23459Ae4F1c7cA644dd20c",
  // "0x2aEd0Cbd2bf39784D2A840D582FCd5672724FE7e",
  // "0x19BaB0BCD3B016661E39e2997840863Aca64B28e",
  // "0x2AfA9150c3acbED1412cA59cD55C8ec67E5Fd58b",
  // "0x1Ea6d977225Ed3AA81C1750F765C3691322af916",
  // "0x65C7e4fb6899E6c5752770D77E225bF4BC046f30",
  // "0x1ec1E41D58f5CD5193E277aA892FA1Fdf7Ec0170",
  // "0x2cD90Ae618d39AFCDEE1df549dD97A8a62a14056",
  // "0x40AAe886028d8629EA1eAF0929fCd2D917402766",
  // "0xe90cE6f01F6FbFED8A36EB1131816fDF4e54D1c6",
  // "0x269e0f1C82F96f83a89beD38d1B9d2709C15d86D",
  // "0xF39407F3D724Fd6c48b80F9D9E8C3bd400A5d323",
  // "0xA5d9dB4389ecDD4FDCCb66bcdf5634842E0b7014",
  // "0x2e7F64ef3a2F2809EFce65Bf987f1C561d308866",
  // "0x45272d0Ef63fe352bc7b660A6d732851FD4a4d98",
  // "0xAE9EEf9608fDea1c2A8a439DaADD7C663Bc725dC",
  // "0xdA41F045C2DA9Da4903D0f5EBC31Ff2e67037403",
  // "0x61e6F8812198E172a6104f8C956e4B58859BFAb8",
  // "0xabf1145411274A2193174438B11CC27b321B7B35",
  // "0xc06A54834ed7BBFfddB47005aE84a271fc104bD9",
  // "0x94117B3B675024AAE07f0eF864CBaDf044Ff3BFC",
  // "0x21a02E8e912156EEe8E47e866c21f81Cf7D03C3d",
  // "0x3F308554CA2acCfeC4dc27f3df4d7b049bcA5B83",
  // "0x76f7133cb170ba0db01B5db75Ad8c4125D6d1090",
  // "0xF87B03368316E9D534Dbe20b5EC689A3F3e1074F",
  // "0xD96a2659dd2BD77b83FF2acB34B307Fb74694619",
  // "0xe5001329426709E5Cb74F2bDD8e6d11501C230df",
  // "0xF2aCd961454E91F66a76b79445CFe50cfF0548d2",
  // "0xAc2d37A89ac5f9c9FF625b23eEB245DAD65aDB33",
  // "0x197c375f39DfFf41E539d587e0fbB87a838C62FA",
  // "0x464EbF097e28350569e8E770AB4E0c7C953bB77F",
  // "0xb949F0535807911745dF822bD549eD6596c80cd2",
  // "0xf59dC8c790145e30573F14042aACB957a219d17B",
  // "0x67F5fBC831c0379438336d6e0B05bB7261E22216",
  // "0x1a05fB655E330C644dEF97670013C3CC61c0C489",
  // "0x1a05fB655E330C644dEF97670013C3CC61c0C489",
  // "0xB28c0F11a9cdC7B83D8e3fbD574Bc505c1a7fc85",
  // "0x5e1799B00b3CDa39a16Db8bc3b80c59484E68D8A",
  // "0x3434d5911B50baA3DEb2108a5747C335218ECdB4",
  // "0x550F867fE11C02d9559dDDA3e637B05Bd59951Fe",
  // "0x80e967F1828707fFc5c07acC21c263a214156b72",
  // "0x3338ab4f5d32f975ea2c0d1c0ebcdb35cb5c1f4f",
  // "0x216f91Ce3c1CB358E583441d6179c6c19c834A2E",
  // "0xbE54F5063172ce7e9364Df0d8aAAE7babC23a4a5",
  // "0x3C62557683D9688c827fFCA9D1d4b14A0c4073a3",
  // "0x839B90bBA6b25715c9c01434Ab754A9FF445cCFc",
  // "0x4123a4335F314bB170142B0295D395bce281B82B",
  //   "0x21f179c79a159359d20A94F68b99AD88DB44afCa",
  //   "0x9A51c63fa687dcfAfFB90DDf806136A91c3bc864",
  //   "0x6eA4A9c476cdCB5F682dc91444A004346eE0143d",
  //   "0x20799B34E4382AD646bc873C7d96D02aC2F9c202",
  //   "0x8A26C648846D7c59EE7638D977E04e3e5B21f2D2",
  //   "0x656d7908C0E5205dB4adC2e0c8311175a0a33Df0",
  //   "0x3e4181bb55DDcD307d443c1eeda6fB45BAd5B127",
  //   "0xDBf5Af5d5C25CD20390CD9487f3d2Bc8b39fb3cE",
  //   "0xb31C1704819e4f8C8448994521DDCBf5c906964f",
  //   "0x1c52b92DeAea437d8E5b41C1c4C350Df0313C607",
  //   "0x01f1aeDc1230A1445d13119a1fC0BcCA4CC883E0",
  //   "0x7D6fDa15570372317c64AaBf38AFEFA5f42C482D",
  //   "0xD1bfB753c74cb5ef6B08150E9E9869666bb79FC1",
  //   "0xB3A6ca8a6d06BCcC98390aA9e15267c24D0a204A",
  //   "0x74173c9d3F49EaaE7Ec965370B19F60273d06858",
  //   "0xA5C4868804a724c386a077c8f82ED8a7F34c8C97",
  //   "0xd1927c49c76d86a9c24f11603CF940B8436ceB37",
  //   "0xe886b2B6b96292f874d6505b5960bDA86430DF9D",
  //   "0xBD7ef407D8346F898CCbb9D6c49D3CA310A9BC40",
  //   "0x9Ac8D36F31424a2b4D42C13aEDA9e36aF856246b",
  //   "0x11aB4dC681d871A519743dAbE229eDcb2b8b2640",
  //   "0xE9271184fEca114736E43139a4D0953dB48c4669",
  //   "0x2dbCe11373143dD6d6995F7D3f7a943a512BD94a",
  //   "0x08D04cCC772b84D3F47b2D62a979e5A47904c211",
  //   "0xf7860B267da2b3e1fff9f29E5BC824f7778e6499",
  //   "0xEa343ff3C072542733f9A2c749EA06aEcA3317e9",
  //   "0x392B4483DADb59f5d75Db1e8Bdc7dCF4eA4cd800",
  //   "0x8f0a47f51a4e3bb1548628dA601a7b8b703Fbb04",
  //   "0x280d9b1e54aF95B98dA91529C9501Ca2B7794BFB",
  //   "0x70c71C697f07644a6872aa118B062fa4e131C8C4",
  //   "0xF0E4f911cE4Ca27e9e53804442BEd1aB9EE4D454",
  //   "0x1fe0022969fc99a33F1EAcF5f170165656299A23",
  //   "0x71bb6f45fae310e35253b1b914de738cc1b7e926",
  //   "0x98Fe677D7196d5a549035cFBC72189706Eaf7978",
  //   "0xd865426040096f2D1a99cf052ff77E5CBb36Cea9",
  //   "0x12b2522Fb45b95aE9d234Da2106Db66CC5195b9D",
  //   "0x3e304E9Ab1a50a82Da3950790E20c79f1E35d01E",
  //   "0xC41B7181d9086cb5AeeA0fe220112a62306C0E34",
  //   "0x4F3212bbE661995Dd6E6579b51C7C437e022b75A",
  //   "0xc3A621C422508680FA7F7Eceb52EC46FbF15FFd1",
  //   "0xE3eC9AB06cB0F28E79507a36Fb453fA0Aa3eB791",
  // "0xb7192569dD6A9FA047B07Ef3a36B4247038AA5d1",
  // "0x27CB22aaA9110FE5c138539672A0d63380b9285e",
  // "0xe98d8Cf864BF2e64cbD83d2997aC2848097C7639",
  // "0x2B19131423277AF0586548C94b1d894fA9c655f1",
  // "0xB3C7d1Fe30c22d97109a5996DC3575725de87838",
  // "0x97f45cF3FB29304991F2fC8e54493950837ad5AB",
  // "0x32FD13F6F167F4F3d08BfFb044187b4039174Cd4",
  // "0x7Ff176858292fbd7253441CEA2f83AB50Ec0B705",
  // "0x62B6CeFDDb563AAe4e4102563DE430047FFc762D",
  // "0x41d642b2abFDB0E9C4C5fea2924CD3dB9136d333",
  // "0xe3f77b5F56F40F0839aa0e0BC96812fD88b4af44",
  // "0x88D567Da41978eeBE36bD24aAB883D5DDeF74af7",
  // "0xb4eb25F84571eE119136EE508112B5DEFbd8C6fa",
  // "0x574f418AfC3a4224730e4da53D448fb67CEf3C3D",
  // "0x96C022Cc5041A5afc314bCf84A1ce3cEC48F2879",
  // "0xd6F9aF9B4CE5B5b6B82cAB250B65B6C853A71c06",
  // "0x15E0F45114842Ad5b10Ef758217a6a3583B91134",
  // "0xc5a336D91024d5262041436BBABD12eF90D92f01",
  // "0x20E93e8B61aA8f7A8Db095Cc46453C9e4C0767c4",
  // "0x1650F3691D7554518edccCd89A1aD2C5B83f556D",
  // "0x867CCF4C5bCd34280761F25d3Be2543A8B584390",
  // "0x8925BD17A44f65186Ed5B27c3a0DD8adE948b07f",
  // "0xeC140e1A0cb243D43791c707838C47E5d293C12b",
  // "0x4bF66AbF1D09495A4081A2B17E8ea2B0A20D924B",
  // "0xD494980772603EdB44EDA2a477678D0ac0e85416",
  // "0x81F77bd9d6C44dD48d33a9924457239bB6c084B9",
  // "0x3a7A23C4F749CeEd40d22efda905363213EeeD58",
  // "0x56082cef3d774b641edcbb5e4467D3B9aaDd7Fb6",
  // "0xA7E848B00E6da55D3757c4Bf6c5C19d4fc7fa0B3",
  // "0x2A24F358766415491597D5488205A8138dbB3C46",
  // "0x9549Db54a61EFcEcbb701499257B997a923BA489",
  // "0xaedF822f629ec4586ceF06EAA315Fc0527fddF2f",
  // "0x7f3b9D9a450878370323Ad15B2739c1CDbCAA667",
  // "0x6CC632CEDe6B3a182415EC8bb9B0A76015D7a856",
  // "0xE311eF28f3D8f9C01DD64d9b125f57645b384Cfe",
  // "0x8cb5d6F637e0724c6660eaeeD1048C453eCaECbd",
  // "0xfbDB47fEc19c70c9280AD4cFDcF1DCc0790c474e",
  // "0x0831B5238F781e4C0d5855b19a024AC0CC84Fe13",
  // "0x2407fdD5A30fAAA18F2bef3EcEbBE3605d8Bd808",
  // "0xb0B8F235ed73F2738662873Cc3FF2433B9876989",
  // "0xC40415a604471E657173ee98f0BCD75d6539acB4",
  // "0x0f1c9679F98330BDeCC39526B1f98E12aeF22D6C",
  // "0x49B1B704d45CE93d266226Ba2ac4092fd7816504",
  // "0x3db00D1334B5faDd2A897D8A702cDCbb6F159D87",
  // "0x43dd14091D6769DB1a14873506132bBd7f04D384",
  // "0x180b6f2640236C707239256934C9793f51A2960E",
  // "0x27aF1Da0f46b4Ba49777bcd97Df8182109FDd269",
  // "0x646B1D42E049E8fa109B39cA859370ec2A761373",
  // "0x77b9F5185A58e2dFD866CA251A398Dfb68a7680f",
  // "0x2e1D1f53eaC5DD7360002E01906A62bCed61C93c",
  // "0xC3452B9165Ecab32db73F5fE567F58E9BE545c17",
  // "0x1DE69309B6F22e1a752802D3421a17abEf279E61",
  // "0xcBfF76e15367db4Fa554085816A9eF4C54b44B5E",
  // "0xcEB12814E9ae583307242a3BDB3BEE49D9acBB8C",
  // "0x616b42430C01ace6A52c67ceFc508159561876D2",
  // "0x537282a639d6405BB5a3F25AEb2B5AA6d07BAe3B",
  // "0x5b9c3F060A92F080213EaA0BB13FABE4279cFa76",
  // "0x45dbf61c85fE5408Eb45c692658B4D13EbA72d20",
  // "0x1A63a9EdeE4012FE71f013FF106211D0E6DaA1f7",
  // "0x4bDEE749D24FA5eC34Cbff8282E47CAe8a65C69b",
  // "0xf74BBD4D0460a585195BCE31aCd6e587C8Dd0d7b",
  // "0x551384A9366111aAcD5951396DbE3bE3573d087C",
  // "0xF1C07FEa2E2e0968efFaC8887348a9DABE868C36",
  // "0x1e911806feDB2Ec2FF1b124e37685F1Fcc76e24f",
  // "0x087ea83f2343803c2631ACeC0B48c21272e38E86",
  // "0x08E50972aD233740d7359ACA3621AD8198c5Cd03",
  // "0x92F70a1389Db50Cef982ca6D958E0d7541aDB44B",
  // "0x550643b48bd44C555D473A6f2E1F63315B7064c7",
  // "0x490DaDf56A0C122b25FEd6337C9a9FF0A82fE382",
  // "0x348caafd8B5Fcb0bFF717557610ccEe18B793117",
  // "0x3e7d99885De7C0f9673a01F55e5f9313B3645736",
  // "0xb0a0a96cFD27a75584df0D9533AD50EA917744d6",
  // "0xC9dB12AF4D447d717Dc94C5e21158023Da069cc1",
  // "0x11A5DBA3f9571d1519EFbee98F9D0409414Fd7c3",
  // "0xA07aa7C8739593Cf1d7322d2f22366A14b226aBb",
  // "0xB3e1ED931cABf4d6765Ded94C5a000dd4b5266Ea",
  // "0x61E0f8e25D3509FaD1C073f8811127Ad1b1c889A",
  // "0xb892b3698CD337E4fA93EbAf92D8eD9d5Ab75329",
  // "0xF0bBfA99DD14caF8C274d984216AF768C730B9c3",
  // "0x907baa497d35cf6E6366dc4CaF08c77f526165D1",
  // "0xdC83a289C6698bb0a9983358FfA88cA38257738A",
  // "0x5E765d00a966d26D15B1F302B919FE86B58B8bD9",
  // "0xb5a25b78F962D1bb4543C6d8B3344F3a7E723051",
  // "0x6c3780058733E77B0D49f5109bbB8fD9ebaA6F0F",
  // "0xc8F980D238576bB6965d8cb8e07CE3202fe34D57",
  // "0xB37F13e96e3C9367da219CC60C5D28187B1D0d44",
  // "0x77CD9b79aB325F4618A092222c2aBBA95fB227d0",
  // "0xAe10108432672E691AbA622983b49ff5b4dF42F0",
  // "0xe23304D8E671e269b794E0b12939aBfe14e2F5D3",
  // "0x8ec8595cf49091AE012B121aE02270b8D1300623",
  // "0xC4EE617e59c0AFD44243341459Ee87Ccbf0BA1aA",
  // "0xe37897639E5D5E89Af2F25D3EEcF1D0c0fbD27C0",
  // "0x1F14c2F40400471FB4a3AEf1390F6BbBf2AD8F99",
  // "0xCa517Cb74A099b9F39bfe893FEfEDd7F3734e8eD",
  // "0xb74fE58BD60c74FD300989416faDb44C21cE7612",
  // "0x99837F054c7d8c57556c58AA4c64B011fC09D10a",
  // "0x7535397059bc8108A5721e2Ab87DBB89896F979c",
  // "0xA884A2F1A5Ec6C2e499644666a5E6Ef97B988888",
  // "0x468C1bAfc5114C99Bca5C12Dcfb48D1Ee6De9C1A",
  // "0xCf383Ade0bdA439a4ccc5B79829BF1807aE51d3f",
  // "0x726Af899eD442c9F45a49430F44Bf47bfdCCfFCa",
  // "0xA66Ac78CAf3e8252675cD8d4bb021f6A72691A9b",
  // "0xf14a31e1de24a909d68ba05084f87436fe566666",
  // "0xcE25B3f0b4026E0499A71991C9e9c91cee51DC45",
  // "0xa99AE54091726f278144C84C045b794Ec3ABF739",
  // "0xd527c5A510Eb62f2598E8A9E81b976c94B30866d",
  // "0xE9271184fEca114736E43139a4D0953dB48c4669",
  // "0x7881aa6855EE80Fbe68dc7cecc9F78e28cbbF5B9",
  // "0x473B02eECb1Be83DeDDdD03d828c52d636f79206",
  // "0xDe24360c791dB993b40D366e120a858AEEEA0204",
  // "0x77F9176aEcc1BD59722530312A7d88d188a8E123",
  // "0x1aE871632eefAf138893F86c0dAFcb3e1DD6b7fA",
  // "0x826b93A2E1c9A689e53cA4757d6c1Ec26d74053a",
  // "0xe0fda19799b5100192f2bA402CB9150aDfc42501",
  // "0x84acd86Dd2a328b2DAbcf8D9d2539c112d509978",
  // "0x35A7B93f672D480a34F206E8D7bAE9DaFfD2aCCe",
  // "0x4174fd8b77281f3d98fe3dbe41b27e85ae31d57b",
  // "0x7EcE4f0b6F2266072b473B130FA4214f6b8CFA08",
  // "0x0F92ba9D9a374fBF38468e621e673E87d105FB6A",
  // "0x05D443f2BF0c5Db5e0412cA1FC94dfA12417fd50",
  // "0x7a243437D599b5C5C0E5066b802e394A6B6DF38D",
  // "0x349A98b79b0e99ca00e9CAe0BFD7bb640616A730",
  // "0x88Af516037e8e783F41A66822fa99b9DcA1456b4",
  // "0xEdDFAB2150dC3635018f9af3e61fB0C54b9c33d2",
  // "0x190208C093a815a59243D5114dd2C846b565cEcA",
  // "0x26b000D7664de3a02D1Ef441589a499c87e8653F",
  // "0x05e2EFf68a5F2065D40B600CA0e252DEF6475A59",
  // "0xAFf42BCD1d5E52Bc277530E7767404417B4c9aCb",
  // "0x333b057f62171B1BF38D62fD83DD60A892EDE07d",
  // "0xe233cCAa56AB5b5c2e086456a851Fd673A4F2D98",
  // "0xf46032094319BF494f0f7cC3FD19A213f4fFF1D8",
  // "0xED18336Ecdb19aE981dFf9Ff0DA5EdF55485b0Af",
  // "0xf85A32c4520E868C49d751E44d6b2BDE84556830",
  // "0x433e4c5022B311451c3bA67E6e84ce2877e3A9C8",
  // "0x0ccB123E902E0E87F68918dD526ff3666918F340",
  // "0xd1dE88503B98D2c19b018BD30Ba195cbbE0A8E8D",
  // "0x267061Fd6f6E96F93AAd4a146258a79be7bd8B14",
  // "0x4de667aa1c5640D5bd07146aF6fDf8962D8E83EB",
  // "0xEd277493c36DE5ABD94cC0f7f621D6710807F558",
  // "0x505Be4EaEB3b9Aa6A208261E5fF4d79e9944E2cE",
  // "0xa0D8E9D224B1119A4E6fa6F0557748452575Ba23",
  // "0xCaD9796740e699a0Ab7d07Bda7cC5d89Dc9d9095",
  // "0x2DA9bBBb50a0155f86469f27d5485B05b0619c7D",
  // "0x2a3ac5899C88039C53B2929af51A0D109BE18C2e",
  // "0xD4E5E47777DB0a0386a4d64E1382322c0C762Ea7",
  // "0x83F90321cfbcE4236D997e2395375eE0940a45ED",
  // "0x531eF26CAfe1cd65C9F445268D85980A1cC1edaE",
  // "0xaDcAE08BFb341a479314B26829C586c4A0dAfb6F",
  // "0x16d1a490936ff876c7Ae390c627c2bd96448F891",
  // "0x23F2D728411239d79BccFe50070130Bb0Ab77e53",
  // "0xEcD114Ddf7fE684594Ba84edFA0ff86Fe22801b0",
  // "0x371DBbDCcc7bFfc201aF4876f833E2ef766A4eF7",
  // "0xd0a71c90975942e7Bfd5b4B267fa27C806Bc731D",
  // "0x47E4731e9a241837CBfBd2e63491c73382A97EE6",
  // "0xdF61CC382adE291E18d11B0E6bD92dBb0428063f",
  // "0xAE971481ceFDA688094bD02fB25Fc4F59589A357",
  // "0xc5a304d5cDadC93C3430DBB5F65F0D87Cad192BF",
  // "0xC34A5D8AD5e86bdB12d812231c68ed4235AB9743",
  // "0xaa75F2ef7B904344E8c788BAAF374EbABb34d6bF",
  // "0xf39C9A02f32d37d89786F9f6C0B7BC333902b717",
  // "0xD7E460d49351a7B2f6883aC6d29297c0A5d707cf",
  // "0x44448c0A0965932E8dd0e926a88199b354A15d83",
  // "0x11fBF8CBcf56eCCc34Dc54413b46025a62D8aeDF",
  // "0x29Fb93aD5DD0E1Fbe00e4b8FFb3F20BB83feF2BD",
  // "0x5246c4BBd414c2C0A34FB55F3DE51df5Be7F625F",
  // "0xF9Fb7D60911BAf1b40a2353F4306a6C59Cde2977",
  // "0x6166616a20Ed247796FF97C2c056d7ff4EdE4F10",
  // "0x68714E161a7E4BD46903f94c3Dd9621C6Fa32153",
  // "0x919eF375b3B26ff90E963366F8F0ca674f0D9CF9",
  // "0x8828DA373c4c331CFAcd3F3f89ca47D894feC9D9",
  // "0x7EcE4f0b6F2266072b473B130FA4214f6b8CFA08",
  // "0x633BCbb04B34Dcb3E18f0604e250D59712062924",
  // "0x05adD3847820A3026B5bEB3402D377E9ac8eb4E5",
  // "0x343dBC97914a310E1e0c5b6531024863A45c7F97",
  // "0x4Fc4A9F47ecB8AEF1Be1f4D8b95A284c3a526c51",
  // "0xf0Db2D8c1FEDC7Bb9ACC32F1a7f937446110735f",
  // "0xE3b28B0550F9ADd5AA25a4daaF36953895D40D9f",
  // "0xE7a28Bf0C11F9d5b8ef317Ac67BeE7A3cb232604",
  // "0x3430B0f573333e60BA3aFd9ce2a00877E71B374b",
  // "0xe07febb8B49cE72B37B9a1C50d40De5dBA4C62e4",
  // "0x5A7a72a32c8869DeE10C555DF6824978E0e1Bb49",
  // "0x10922518ef0d96d6015c19234D7b2abeCE48bd29",
  // "0x3E560c150EB8d62Dd8C01C10782AC6656813640e",
  // "0x5506207B610765DdB72CB9669a1773c0D03779cE",
  // "0x9F584540C419Ab2c2D6f66e023541e43892CB92F",
  // "0x837DBEEaa177B8A12bcF7FF8BD8ef14aBE743B59",
  // "0x23Aa2a7491B455e71A527d469F466E141eB0F10B",
  // "0x419df6A525E487f78C61f22e2A917862357B2128",
  // "0x9201DE9BD29011b5FF5AB0C36e1035dBef93E64f",
  // "0xDE11A08AaC4D6456DFe380E5E878c2Cd0f6358dC",
  // "0x7392164f23681Ff65ec39A117623D6a1970f2dDD",
  // "0x561261c3Cc3094591F1d5c7e5b613804D2f5B50A",
  // "0x27d3161603fAC11341094185053092FD6Db61e69",
  // "0xE75237DFaBD8b1a2879Cbd7EAa70B3e28821F931",
  // "0x9bE0B78dC7040dDBB8aB8c10d2b53447832D5688",
  // "0x561261c3Cc3094591F1d5c7e5b613804D2f5B50A",
  // "0x91bc778A15c34bF09f3553d168441dD5EF790F52",
  // "0x88902117D492794c19e16785369ccABB65475c1d",
  // "0x25093B1B65EC8ffD1a1f5A97125e6DF8ef3a745c",
  // "0x409C6F4A4d50DBc521aa0a9517C0c1e13Aa456fb",
  // "0xa6cF0e59cf30D54123BAe608818A3D95b9673C37",
  // "0x38CBA7bf5f3BFa94179B7Cb4203409659Fc06B69",
  // "0xDd2AA2dd3b524ab337f8467bd630a2b0eb9fE70c",
  // "0x7b84F7a588bb3d1C5294Aba2b7dDa95E7E985466",
  // "0x7a0000907132Fa775901E8ff466De4925707a55d",
  // "0x9782E6f287De27B65C3661FeC0BDB27408Ccb12B",
  // "0xF0DEAc27b584454a6aE05370f5A23A27A98810A1",
  // "0x5d0F66C4e406a8E6F00BA6D0e3f5C95292CF812f",
  // "0xe9147CD73b2F7cB76F6E9F01778136174befB057",
  // "0x3D7e93ADfBD8202c8C513B8bc030a53c5667fd90",
  // "0x0E654f822C651dED15fc155590d1E5D520352336",
  // "0x429b2Ed4cC636dE502561e9D6CF895ad3c715683",
  // "0x60CD9149Ad31AFb270371d5f8439b75b62663c34",
  // "0x39c9a982CfE5adB77c4B855309Dc87c12d9db4cC",
  // "0x8eAfEB7763cec337CA2Fb28F1e4D5d4907D6cD44",
  // "0x9a72bE378b30D9C5b5bF6e38AFdcA0e7629653b8",
  // "0xAB65458EB1E42c21b2473842749e85C18CFD5815",
  // "0x5BfEA503c85Ed4981Cb13c9cCd4cea92fA2DF102",
  // "0x41B8ED30f7Dd5C81Feb1cb2D17d7b43FCbd14FEC",
  // "0x10eb76932B779856dccF1f2759191CAa6176b943",
  // "0xFBd48FB930568c50fD0F7bB1d2836F28B93c55Ea",
  // "0x10Ec773DBD286D3A4E4F9Dd5ca3fb62115b6960c",
  // "0xeAf37cDc3d32c30F3Dcb35C43c81740cF3BFBAD9",
  "0x68714E161a7E4BD46903f94c3Dd9621C6Fa32153",
  "0x15dc650bfB012E86Bfe2a36bB3caAbe45Bfa0503",
  "0xd24438E558bC61B3D03cEf6ce8D4C86acc90C01c",
  "0x5fB1ED0f0A77c8AB93E6f6788bD9Ac38aC2809bF",
  "0x081cc150eba1d2dcdc169533fd982109edaae49a",
  "0x1A63a9EdeE4012FE71f013FF106211D0E6DaA1f7",
  "0x57a79e923cfa9db5871A27A9A75DD2958FC8f672",
  "0x5fB1ED0f0A77c8AB93E6f6788bD9Ac38aC2809bF",
  "0x4188c2cfb97cf989fcc625315f2A78392fa1F526",
  "0x3Bce71f2c661558e35deF869610fc2F2A737fB38",
  "0xB2E089d495993Ea326df79c4c998D23764cC2F16",
  "0xC0b8976fac03D63b5b08bF3635C14F5EF14EdeF3",
  "0x2029A97Aa3c74294745B0330e4D3FBF11D373C7e",
  "0x43b497841b1DBbF7D63a8635745704dF9c92453C",
  "0x1A05752c9D539f48627aF1308303505d8bAcd78A",
  "0x606Dd42728ceE2627Ff0085a13EdD88628826D74",
  "0x79303109572152700656f8B234dFf97b3dA45ED8",
  "0x4bb1c6638e81E7E806049cF8d74cC9a9F6a1dF1f",
  "0x5fb1bF9D615661530B467177e0eaa67Eb2811c7f",
  "0x51279A44b72a830FbEF84E839aa27F94EE4eEc62",
  "0x155eFdBaF02Ab2e380f49225a2383e0d139D2752",
  "0x34721d144bB4cBcF2d285cC4265ABC3f44F5cA86",
  "0x564bA3A55f68FB7FA66Dca3672161e45d594136a",
  "0x90d98348268E0bA7eaab95F0e15Ed518ab710f2A",
  "0x80d16c799bB46350251A090452C55F9a5e794B27",
  "0x08EFabec6f4e3523bb2c5C75E3e9753BbAAF3E15",
  "0x4BCe666253982D4a9Cab630fE4899CAb4aa984eD",
  "0x0eFE4Ce29f2034940B8dA0e067B3d2E71D6Bb2Fb",
  "0x3cEC285cF33b8ebDb510b625fca60956dc8E0Cfc",
  "0xF9582647d50990B35C539f20E50D0B868c3B3f0F",
  "0xEE17aCD55FFa956ccf164516DDe4c83975064510",
  "0x47d293c36D28AA931Bc01f5C8Cc9074Bc3eDab6C",
  "0xc0B388806D51d20283772E660Cf35B61829ECE87",
  "0x7d3f7D884FeEfF09202AE986491C42fc12E55A31",
  "0x7a295A3cDE0C642b8Db8dd77a65E1D1870d4d0F7",
  "0x3fBb49c8caC7b4679011A3Cf971B6CEcc23563bB",
  "0x94B427E3aEDDEb9d743932C839A5c56ef5894072",
  "0x768fDCea6944656151E9c1EB611A89F58a78466C",
  "0x32f74c5419Cb1Bd04eE703b49d83A9fD477F924A",
  "0x83eF8A7fdcA952460116071e93F10Ce312Dd528D",
  "0x7b4888334088F34044351b8045c4064DaF8B4599",
  "0xC192A469f1AAd40CF41bDff1d6152c74D12c1fd7",
  "0x74Ae5B23a3CE82Cd8319dF2B44b5d7be2160ec47",
  "0xC99FfA18E5BAcF0a588c5A3F7a58890338286E47",
  "0x30c3F3DFA85D3933855b981Dd76724de5F35ED95",
  "0xf46bf5F99EbEB05e244E4238b92eD994F7629baE",
  "0xC8Cd22095688249CF0c6ec73caa2554E13D660cC",
  "0xEC4939700394BB357bdC3cE8e0D305B49Bb57CA8",
  "0x4Caf79a867C2256AAb7C876dcc832E9594960FBc",
  "0xcA0C3C446A63cfcbc2696aC51c4A57DCDDCD7896",
  "0x4FC09a1220aED2B502dBde9e0baE390AA8546Df2",
  "0xfAe3d7613b16bE4755536E279E3eC5e4eA0c7ae0",
  "0xe6263e7f76d9D1B77f7d56407cd947d4d1905520",
  "0x6Ae798153C03Aa41fbD208999B920480bE41Ed5A",
  "0x83c5945F00E046D6A7AB30551f11Bf8Ca994c862",
  "0x67f61d143c703676Bd5eE4603178fbAbaED1cde4",
  "0x1Acbc027925C1bFbcDCeFD4cC291eaD6C18cdDB6",
  "0xa7499836d9daDb32348C5FdC7312Ce94f64C212a",
  "0x4Ca94B4F2531fCE6715356486E9b0b57bD1F2efC",
  "0x72DD9FaB39b3833545924A57CB0461a2FE583702",
  "0x79290F2826df8597109c9fDf19DB29E6a058AEA4",
  "0x7c487036D01B75a4ae026f02A8a5C9676e18148c",
  "0x54dF8ffa1c21cf818281d6d9805d54CC07f49741",
  "0x83c635333a4e6C3325946d58a9813068B3296d9D",
  "0x6703888d9aCBC46D269d4bC2571ED1AB0d82B340",
  "0xDCE59f31D26d49afEE8317586F6FC805925f368B",
  "0x59A5F5b5Fad99A5C32b68d59C48A7b6D1bC2E4C6",
  "0xe0c69568Aa8db76cCeDC39CA6aEdb3bD7B0AAcA7",
  "0x7750fa310E43e7e39592c09fc76233E011023F9A",
  "0x710D85bD63BE24f5562B42C0119A6141Ca0c70FB",
  "0x8cFDBc0B0833984F678e71EAca780aE825956896",
  "0x9a32230B70E7cbEdF4Ea7ed3b98b64c260901cDF",
  "0x7EC2ee2a419097E99c4931d1DE286c6624254bC8",
  "0xB85aBF2BCd8525c193f1C9e788Ca66163A8600f5",
  "0x99867Ce33b6EA968Fcd7E1E7f68bB264D8B95D2a",
  "0xB65FF0a291BE336f34dD98A05c81a8993FD2802e",
  "0xf12B61FC2D67E5A5B2A90F71937DC2Ba910BCC1e",
  "0x945ec9E34C08e8f35F5648f456B47E9F02e051ca",
  "0x79d5f4268De0180d6E9ae156101515638441EdEE",
  "0x809a6216470b3e62274245626F66964155f27a19",
  "0xF0777B0c17Ce83317A664390A69f4Df2C18e6c6C",
  "0x2B19343cc04324530ad1Bd9d10a618CE1bc0eb21",
  "0x6A59358eC6a731F544356BC4a58df719c0C78163",
  "0x5DACB5ab9Af64E605b76f9c3596A1D1445cb2F3A",
  "0x4f9833Ac2128F4411df01DfdA0583c6c645Ccae0",
  "0x09f55Ac4278DD0a2e7A70745079d1F8123dBf74c",
  "0x05B547c04Fb0F4782F91f1a6c51DEf141a47c829",
  "0x070AF633125b6975f22F87C78E12328430761579",
  "0xCbeA8b40fa3E17c2F8e1B7dD07CA1711830aFDf2",
  "0x479e3B56F9579bBF507f1a181a65B6906922898a",
  "0x3086D3E800015DA022F5EA793DD23d017bb20fC1",
  "0x24e65057340DbD98f06f8d075b35DF6DdFe42388",
  "0x8ed32d2f7c10622A2D1731543EC3Ef5092a12C3c",
  "0xbafbcd58D494cea0e4180BEfa802a493febC59a7",
  "0x839176000Fb8F10EDCf88f916e16052eeD338d9B",
  "0xf3d1DD2718ED50a21A014936a4D06Af48D5F292e",
  "0x8753e9B9bfD9D5F1cfeEbE8418E3345B28793A60",
  "0xfDB10c87240FBDcEC3C10C4E37c25c81777a7175",
  "0x22bf3Cf196eEcBF043e3F05211D34Fc8F34D4A70",
  "0xd331c314b4E9a0f0D0Ee7c82fa0d5b6a0bbdD6C5",
  "0x9D6E8A37B0674187bdA23d9e79722F0f9FED6306",
  "0xA2948eEb394F4B68f9234A6d674134386352dB71",
  "0x4Fd805D2dcCfce4952eeAFB1047aCC804cB03Ab3",
  "0x640D934DF7A1fB7F948339Db03A0036dae22B71f",
  "0xC979e4e99cb7F6B07D9472e51Ac149B39BeEd75b",
  "0xeFCF4d42EECA2D6Af9F5aD31b7E138969576AEe2",
  "0x9ECfE34418f771B4eC4178200DEe33c744807C91",
  "0x1309A7f793D0974eA54a199ccd8d11CE4f04332a",
  "0x52D10dF5E8921F21598d1e3dF47a360706a689be",
  "0xcf120Bbb90cdca7439c083a7d554d60E754427d6",
  "0xe61a793e0ffd8b3917f7f04563a10942445d168f",
  "0xc254e9eA06F150531FFD29aB1596cE81E15BBBB9",
  "0xE2EDd8F4B814F872ddF57E948948a87f2d7916Fc",
  "0xC0CDA54703E916682A1dfe74d2f76c072C3fc50b",
  "0x8A26C648846D7c59EE7638D977E04e3e5B21f2D2",
  "0xE2a28e1F88e0CAdEFd5250A124cd1A40B3a3d8Ba",
  "0x21F2066a5aC029BBb8C2e1a817D87531Bba19b12",
  "0xeF3b5Ac56eE06a0D33c5FF8ce8036661FE8cf92B",
  "0x7A0Ea4Aeb66411F76d0D8298BC074e45eBDFE15D",
  "0x27ee28301f455AD1532F78d3C075Dd826f872176",
  "0xD39BaDeDfB66aDCe8222813dFFfC223EcF174a0e",
]

const CHUNK_SIZE = 50

async function main() {
  const airdropContractAddress = "0x0A47304bF71c086b8d97C6eE079b7795c8253E17"
  const airdropContract = await ethers.getContractAt("AirdropMockUNO", airdropContractAddress)
  const mockUNO = "0x53fb43BaE4C13d6AFAD37fB37c3fC49f3Af433F5"
  const from = "0x5569BDF4e02cec3fE459796e3d0e741616029fA4"

  /** validating addresses */
  for (const addr of RECEIVERS) {
    if (ethers.utils.isAddress(addr) !== true) {
      console.log(`Invalid address ${addr} - idx - ${RECEIVERS.indexOf(addr)}`)
      return
    } else {
      console.log(`Address ${addr} is valid address`)
    }
  }
  let callReceivers = []
  let callAmounts = []
  let airdropIdx = 1

  // const r1 = ['0xDEfd29b83702cC5dA21a65Eed1FEC2CEAB768074'];
  const r1 = [...RECEIVERS]
  for (const addr of r1) {
    callReceivers.push(addr)
    callAmounts.push(getBigNumber(10000))
    if (callReceivers.length === CHUNK_SIZE || r1.indexOf(addr) === r1.length - 1) {
      console.log(`Airdrop ${airdropIdx} is mining`)
      const tx = await airdropContract.airdrop(callReceivers, callAmounts, mockUNO, from, {
        gasPrice: ethers.utils.parseUnits("80", "gwei"),
        gasLimit: 4000000,
      })
      await tx.wait()
      console.log("Transaction hash", tx.hash)
      console.log(`Airdrop ${airdropIdx} was mined`)
      callReceivers = []
      callAmounts = []
      airdropIdx++
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
