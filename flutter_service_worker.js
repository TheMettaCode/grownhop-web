'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "cc82ed2690f97131317bd2c14668c3b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ac8e26191e715d682ab8ed1a1963a1d3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e9f327944f1ac12d03f63ecb35a78d05",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "745844cdf7a6f2b158f01a2211cc7075",
".git/logs/refs/heads/main": "745844cdf7a6f2b158f01a2211cc7075",
".git/logs/refs/remotes/origin/main": "1041520f73eba4643afce122114f5783",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/01/40784fdd7798c72e64ddd631fa6781ddd41be4": "1c79654f91a44c440d0e31bcf208aaea",
".git/objects/03/d0a6b677b50bbbf8252fb80902f77d348fe651": "75e3de27998e7bcb1dd4ea8698a1ce3f",
".git/objects/04/81edc185e1eba3b5e7fcc48289cdc4eff25995": "544bb6593f4df269604c244079c10341",
".git/objects/06/1e90d85ad600bd87aee353adfdbf4c5c14b574": "1f2961ffadcf8a769565a316c17351ed",
".git/objects/06/244efa437f0b38ed3763880c16af66da8c6ca4": "0202d25a1e57a946c88ee516b39cf3f5",
".git/objects/06/4caa0a2bbe635515f8df050a8db5f300a9853e": "eaf5cc749cb5a32cb71ff52a1c81d25d",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/602766b84302296582959269aca829b03247bf": "1cd5813b6a791749ce1d5fa0c334ba04",
".git/objects/07/ab6a3e61e692628dc0ab498e95949ad9c56cc2": "ce31330fdc0eb3764c727ba06b2d0a0d",
".git/objects/08/4ead8826d1994b59c7dfeeb6bc3d619b465313": "b8a00f49cf0364e2c4c3124f8841d442",
".git/objects/08/bd17595049499995ecfa18f525014d2c0842c0": "2432f26b25df356c663122111b5dbcb8",
".git/objects/08/dd7be17892c3ce560873c2adbfe8ebedfbfc8f": "98d0c070086450621cd91ef54a33a4b5",
".git/objects/09/41f6f55abaacfea4fadc81e55b6531e722c108": "a98b71b367b3089e3c98d834f1971cd2",
".git/objects/09/aa4b4194f0eac768691e79ac9eee87bb348a17": "ee8066140304d6c545fade1416dbbefb",
".git/objects/0a/6fdee50a26f07abdbd1180b65fe948f9f2801d": "639301aaa4f359fc4b1f0e2e341a3c81",
".git/objects/0b/2c251c86b0638faa04acc29a77a78a1f778c64": "6bf43d1ddbf25eca409fa5972f332536",
".git/objects/0b/cd4b257e8ff36e10cbdbc962665fc28aea764b": "e1fc9208830911712a8b667ce45dee59",
".git/objects/0b/d275d39d0649871835db816e4c43ab05c58a7b": "3c88e2d909356baa630e8ca1765691d5",
".git/objects/0c/3749ae4c50e7d95e35f44e651bff4af1c1b195": "ee6d1895bf8329e568c4958e2655654d",
".git/objects/0c/b72911aabb9582b826787a578c90364817dcc8": "705a322ced47abf6ce48460128babc62",
".git/objects/0e/059157b3929348351ecdf6856b523ace82c27c": "2c388890d78a74734c4b2ccc7c80ac1a",
".git/objects/0e/60cf8f1677c4d68ff2551a27998ead9ddd0d89": "8c338c591a6f9034e9aeae8c04a9dbc5",
".git/objects/0e/fdf85d81fcab38637b4a1d4ceddfbf650e67fe": "7abd6f7cb2ca5fffcf00dde93379a682",
".git/objects/0f/569f41ceefd7b5bc564bb3c36e0455d958157e": "53bc494de5246786791c2eb14836a08c",
".git/objects/10/7456b5f51ed6122ea3f1770b5eaa85954c19bc": "4a0e1b3c6e47c4d0c944bb7abe7cab95",
".git/objects/10/cf7011a4fb4168dd356b86ae4950117f91af8a": "a74f54d375f087910da7bde8195cca88",
".git/objects/11/efb3f6db57bde49c3a8c944e1367a1e9bc5392": "96817071c61e8c837cba8129b2a8ee1f",
".git/objects/12/31b6a02a4cf01f4e6c3203dfe23002e22b3603": "9089f0b534f9dfccb1fadd556d88a1ce",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/c47f8dcf756bb7a500b7794e1d9e8035395a42": "651aaef824fe684b1fc051c38ef801fc",
".git/objects/15/08441a183d733c28ca621ac31e356cbf59f533": "e0e362bc0510cd6ac9bb1b0df6824fcb",
".git/objects/15/dbf47087e6de7f438dd9e3bf15b8be38f04dec": "61c565dec3edcf1c3a685dd6ac1f2045",
".git/objects/16/ec0326c6b2042c53c4d1a499960970fac08726": "2ea45eaab41474b5596afa4d601923b2",
".git/objects/17/a34265b59787bae3726aae2daaea1048787f0a": "01cd6cf1f45388a464994f3242e18c6b",
".git/objects/19/44a294ac302950bf5efb561b42abf66a3acdaf": "491060b2d0120f55e82b69aff936d6fd",
".git/objects/19/a2b14af7c773885be8b97ee27f49685607fdbb": "2fd748c1f882a28435cb571eaa8b8000",
".git/objects/1a/02f429e45c5c83908abcd66db1a6f618e1ef94": "4a4a35e5944f0ca03e24f91bbde11585",
".git/objects/1c/2c5ada56b0222cae1b1b59007e9a9ead6c7978": "1fb837880bcedd21173fdc2e4a3c2708",
".git/objects/1d/028b590ae265b5b2acce0b46294bae4232d5e2": "4beeafe8c8f17670ea96b757491b5964",
".git/objects/21/1cb2001b1dec4cd08c1f86494d9cd14ff60a0c": "23d63ec9224fe77b572c26faf7d39296",
".git/objects/22/cd521e1385b1d9767be4386d84f31d9eb0e9ce": "d7d623288fcc03b9126612c53faa235a",
".git/objects/23/32a335ac80a55a6d9fe738199b6433cfb64fff": "7be0a14aeacf51df5e8742a50985171f",
".git/objects/23/4b39b1e7e0215116fa3665cfeb481c4fba370a": "e85c60b22b232e383fdb06719efbbb86",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/fe9a57715e4a213511dbd2384085246b0e189f": "515a13b9298d72505def74fda3f4a147",
".git/objects/24/547c133289dcec18e1e656c23d251855d1160e": "5a80d972da50e48bc222098619d2d29d",
".git/objects/25/02cbcc3a5370e3e7fa09c41d95d6ec62ae0e06": "618fb85744ac9254c7d36a933f40431d",
".git/objects/25/a7933f96eb654ce7bbf215a1529421682876af": "775d23f0ea4326649504b0aa6dfc7335",
".git/objects/26/ea9aee85bdc5f844371890334c65d02e0d5acb": "c972783aa2b5893502c7ec63a48a8423",
".git/objects/27/04f561d7897e60dd5945fd9dd38a1a860bcec2": "e0ee1898814d19c1a599f2c877c6afbf",
".git/objects/27/d3a09a4e9c1a5ab3fb92725895214ecd857b06": "849ea41ef67ae3185f6335dbc8709213",
".git/objects/28/c9e9277f0d7344d8e5e6914d8f2c59526856b0": "3660804db9a50099f0a29910dfc813dd",
".git/objects/29/e87f743d2005220333ec93f7bb1306ce99f806": "42e829937fdf2ede65b2e5575fa0a531",
".git/objects/29/f036a653944c7c2285f808842687b63d54821c": "d3db8519e600adf6d1164dc858db215e",
".git/objects/2a/075daf27dfea08f7c6ca48fc8977393bdeaa46": "63f7a8aa1afdb8a35a4ae0e7414f9f08",
".git/objects/2a/733f78b1d85001ae31fed6fe81c013a4703a63": "166269f6aa142f8b199c7a4dbf160153",
".git/objects/2b/0c4bba96db32ca8b522820a655f00dfaf76997": "995907556bcc032cdc05fa2a46bb2255",
".git/objects/2c/37316a8d6282e75c51db949840695d6093ed25": "f8aceb3e99d641a36bd165e17715dc01",
".git/objects/2c/5a128ace8bb791cb1866626b3a6973f4560711": "8b4ff59c748525712ef77480597e3711",
".git/objects/2d/675286fa2fedb7ec717ecc476606e0b18b8b25": "a39a6bb37dca6d04898740fa7c4ffe07",
".git/objects/2f/70377be5a550cfb571e4c633300d11e7a6f5c3": "30bbd736917e067c149abb3322fdf197",
".git/objects/32/b639836af56888a4d183cb6a725002f5794462": "90fc9ea2ee91e01cdfc38526e8b161d8",
".git/objects/33/3d62beb4efec4c0b95b9d232a483ce7c0f340a": "5913ae3d1c5dc1b6d607ca6560f9d4b6",
".git/objects/33/ba622bc40af575a127b57fa15efb3e00c4e887": "3b284e4790bbb198a6c3dd70c8a6c8a6",
".git/objects/35/1a458f30be8984ac7346ae63425af0df4bc4c0": "8624269e55a4237092495016226f6d3b",
".git/objects/35/587fdbc189048ada2aa1eff7eeb33cb060e70b": "b79576db097b4964f14c18dbba9dafd4",
".git/objects/36/1260a30711067123d07ede8057ef9129b154f6": "93228c808689246ece33ab7ec294eec0",
".git/objects/36/35a94fb5508712ecac30b1998c34d1c3336919": "906e4b790e0f97d195e8b68ac63a508d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/bdfcce02847189eed767d3b768c946a23f8be6": "0848590c9f75330895a2208b25123feb",
".git/objects/38/b994127ecd145dec0ceeb5c6cab572eb12599c": "6ba112253a69a8c4eea0f3a23d0aa1a8",
".git/objects/39/52483a7ff0bd9a503d0b2d692c01fa672d4816": "2afc45a45ba11113562cfb0456adc6e3",
".git/objects/39/61924c453ca99d509b82fb0cbc5e1adf7b5a17": "59e68726affa2611c4d214785883f7de",
".git/objects/39/9d5f822745e5d7573b83d8d4f6f559bcb38d42": "42725ee8e77b8d1aadfefb07ad79601e",
".git/objects/3b/2bf17c1c2a89c4655f4ef6a9cd2b611782e267": "4e012e41bb244143356bbaa9c2df9e40",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/7a405a4cbc42364b0d2681f91f7ee5f316030a": "b8e9948293d35766186295d3680cf554",
".git/objects/3b/d41a5063f166ae49c52b68e668aa40a7c34ce8": "24b74582bd41c87697ba457df4e8932d",
".git/objects/3b/e2526ef2518353cb63f3c76b0d64a9d9246b1f": "6ae78dbb0b107426595d7d7971384495",
".git/objects/3c/bfb00c99886687013b07088659df4f872ac295": "69e988059922a7cf511bdea611e8eb4c",
".git/objects/3d/be366c8517e5c483eaa46b90611c78f872901c": "9d3983d30b30ca44b3dec05429d069d0",
".git/objects/3e/64282acba14cb90be0c502de095b8f28958c9a": "08d8d358bd23e1f8044bf888297c65ac",
".git/objects/3e/e18d7d3483dc35c07f903bc4714ea282a5ed1f": "62f24101430206053c6471b3f4c569eb",
".git/objects/3f/206648f5f88d5ee606e1620ba805b95fba8f04": "e148127a3704f913d4ca25a70b488f64",
".git/objects/40/f18dcbef6ef48a2805cb6ee511cd36a3816920": "d211fa405b3e00afbece64072698356e",
".git/objects/41/03f09544bcaa8a2b0dd053d2abfb55ccafea3b": "816aace708e007f194b404e1efabacd5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b770caa9ae81d7e148312d303200cc035e60c5": "36d3473faf557f89aebce6fad7517a12",
".git/objects/41/ff418379e9c43ecc135cac499ed42ce95b1075": "7900ecdf25371e36a14c074cf865dba6",
".git/objects/42/9823014dbca57788f74cce595f110e3115682f": "259135097d473fec2073d3cdd2675691",
".git/objects/43/0d6a5e45d7e5e30d669e4c508e677e764e3bf1": "1565d99a8e3ae0572bcf20d68c8e528c",
".git/objects/44/13b8b71d1dc44645cecac4de13c88ca9828890": "ec430c2f979746fe2754857c5179eb01",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/44/a056a09e72bb35047f78b803a02947b71ade4a": "4caddb3a03a0838318094e2a47ddd637",
".git/objects/47/44a9ab7b7724e2b250c992fa26cfaa2635abf2": "6022e00540c5ca5f3074b171b6eb5e6d",
".git/objects/48/2b0f3f789bdbf3dbb966961c708f1de16ac36b": "17a0e425c4fa8b58b97f284308889ae3",
".git/objects/48/6429a5f851f8da2bee01d1437998e4d5268a74": "e84c180bd99ad16329fb21408e242290",
".git/objects/48/cf72c1f840b22f280bc6e346750b9b42a4c2c0": "2cbf929910b8151f98b0c3de55dea171",
".git/objects/49/5c94af74b21314c1972e8840b7823ff10f6812": "524311d41d1c2aa74f6db47a9f9e2706",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/9e60afeabacb639796a9bba60bf3b1e313456f": "5cf7bbe55b93dd52e6bd8c4ce18e6c27",
".git/objects/4a/d0d1c8f0abf82b0876b1d1bc1f0c280307bf51": "b0a86480ca3e4ba325cbc529eddaf570",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/f0d9d4f4e9a875afb3390643b8f15a1b412921": "b5a0ca62b6db8fbb4de70165518bc035",
".git/objects/4c/52bfc78aa7a4b773016ddc5839837cde7a00da": "09ccd0aa95773ca73697ab4c4c1f2172",
".git/objects/4c/da8b853c9ef7cbe9297fbcf16398f80ef764bf": "477fe49a11b24debc62a5bc8a7a5be23",
".git/objects/4c/e70ddef6d59afe1f5b36fae9e89f3eac8721e2": "267f25aae102bd9dcd072e5fc44f9f38",
".git/objects/4d/5974a5ae569aa18a450b6bb4a7abbdd8024a71": "2864025d13128bfe71382cd283e9ee58",
".git/objects/4e/0d80445cb131e09d38cb8767c0a36e0e72f5f1": "4f00be2a7b85a4d7309cd5a3659dc66e",
".git/objects/4e/79d81db7bc50cf0c1fcb80ae9bf3d96384fb96": "47587c9e866d9aff9fbc92d5d4d52fed",
".git/objects/50/306319de0632b63af5627b9b4097d8c2b0869c": "051fb8d7ea2f23d63b1a5b7c47499ba0",
".git/objects/51/c15340bfcd845033486a64c3d2527c7fd5db5a": "c3392af64be762d49b90b396af65cd5c",
".git/objects/51/d0996e9df9cd364cc1ad131871108d1feaae14": "6a1692abc45eeac0ef9e90dd72b277f4",
".git/objects/52/530017223678c784882c53903548551632a4e7": "17450345260cbe7a40843c03a78195c6",
".git/objects/53/730c8d55b4b16946044711b905c9c624f24d63": "ce46c537b699553bec41a96dd7ab1ef8",
".git/objects/53/9aefc193908a32f410a84d8b1209a328d7ab5e": "797bc9ebf097525fea6c2bd0042ca6cc",
".git/objects/54/cadbfbc295041803e3734cbb70bc7d98d5067c": "000b71457b9e3d0f490781ad9423b53a",
".git/objects/54/d9bc9e99f0dd0be32e87164fdd5bd99b2be08b": "d68009c8ccf1f864afb6a0dd637531b1",
".git/objects/55/25ed829709d801ab54ffa4a7b4a6285cfec875": "45e2b31b1a14d0a7f2fbe42f4fe07f45",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/e7fb4c00c608fda46e0532aad56e6374bf96a6": "8560b0ba4fc6ba09d06a1851a5b1794b",
".git/objects/57/02f88e6576ce89e4c35b0c1484525c3b1fdc7c": "b379122725eb59860f485a056f1bf2af",
".git/objects/57/7757d4d34e3e8cf51981b299423e6e2db0e6c4": "a37b47995b2189c51c81b9c3e66c3ce6",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/59/1b761d6fd4cf9366ace7ebf1233d5410515abb": "39b479b0de648539ae4519d3bfba8ab2",
".git/objects/5a/2a98c879f66471e5466463d524cf28ea9d5fff": "6acdf389f787cdfd89a5d1247e96bd7d",
".git/objects/5c/20eaddf3de4fd1a5953ac7f75c96f1863f0ba3": "ecfc6a684a2a3d68714853477b170bb1",
".git/objects/5e/112bb2591c6cb625b25acaf1ec93b1382f6d4b": "29403dd2db46bb60d5146906aff4d48c",
".git/objects/5e/c85ce1448c387cb5d569dea1c464653a941d30": "729263395516a40aa889290a985ac03c",
".git/objects/5f/28be466368000594dddf8c31b67a68bede1db6": "fdbaf302d7e932533152c7e90eb4ceed",
".git/objects/5f/6e5d0c8c1ee32d04d4fb87972eaf28259c0510": "89e8ba0a19ab15a995454df352cf97bc",
".git/objects/5f/f205b11f63b55999458774a3c407c694f9c40b": "830f12bc2341695c28fccbbbb16132ff",
".git/objects/60/b9cced79bebfb44695f56e93718b98e4b9bab2": "19335dd5d4e44ce8407e97b0d3c4fd05",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/62/489cd68d4b570ea08a9f1b0a69738315a5cbd6": "ce7f6d4e32a4dbe24cbebe957b06dbd7",
".git/objects/64/9a7ef181857a00757a686280613b881d62ad26": "e60f249c2ef9e5eb6a19075427ec2ecb",
".git/objects/64/e5788b81a622d7649681c09f8edb265bcbf0d5": "ae2260d73fee94fbc70f9807f27d1be4",
".git/objects/66/f348369ca3d8a92aee31a62353853b6d0a4938": "0aaabc04a0813d64c4b66a6e242dd5e6",
".git/objects/67/4fb455875633467b8ed06a18e2753ad3644fce": "9b87dc7db4bd5fd2835985e969bc8d0a",
".git/objects/67/7e2874b464b8ad1a220b835ef6299cc9a11a3e": "a9619bce7547ca52b750e245f01c3383",
".git/objects/68/b5aad49454251d22e9553e8aa54da6e1b2196b": "3c25ab8de549f83fdd9dadc6dc8f0b62",
".git/objects/69/eef958f705f752bfd05502689c10c5a84a2807": "83503504140a0ad434fe56d30cd1a074",
".git/objects/6a/4842ca456472bf5b6dcce4ff1d8fd803a2a843": "ff5f0c7ce936fb6c87cd829bd46c6975",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/8169e0399a07b953cb87a520102918256e31b6": "33a81e32d9a5b1998cc02ec918e80f17",
".git/objects/6b/37d6e6674ae1987afbb4a1ba006cfe417e2193": "9e8a54c30fa0c4fdaf9dc48d1bd49e1d",
".git/objects/6b/7faf69d118b13b2e2a209f8c0eb69fe24bcd43": "65d5b9fc5f723befce7f41a537f6785a",
".git/objects/6c/c10c3c4ea81cee9ddf63372ae0a4d136a03749": "15c549e84a0eaccfbdecc0f98f981a48",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/6e/d23760a8978fc90246f8b3da939cf1bd378d15": "40499fce337a7e31dd260f50d35f61a4",
".git/objects/6f/28d2ee957aed3b34f62992338105e0d70e7827": "2fbeeef5ae3a3e467aec97768aecdfdd",
".git/objects/6f/65fec73c4bc107ee08f6b92085022665af41ca": "c8bde8c6a1a990863d166ddcb5dc1e36",
".git/objects/6f/e22af2a4ee5997ebe96f8eb35c51e3aafd2b6a": "61b1d0ad069008dc132d387f751328b2",
".git/objects/6f/ff03c30c1ab10716f917cc4edd8f95eb638e1d": "393f1d3f070998c3d7bb1077107aea6d",
".git/objects/71/99c7b23946aba63e3c1e56b12ab83f97859354": "4382fc6072b589a3632ee11cfb7b522c",
".git/objects/72/1005380ccd6a57b63eb298f377d91c28166a3a": "0839210e68a50c3e05a0eef0e4051b5b",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/e2ac82f1ea659140f182b19478c99d5f0558f8": "246a8a6480a99777b5561234f6cac0b9",
".git/objects/76/47525deec5d4533e9ca1a1b011cd28cf17638a": "fd94f282f83007c42df81edfe8d3ee25",
".git/objects/76/49f95434d5cb48f56b4a15d27f9aae40052a3f": "ed57a63d5a84ef2dc5afc74bc39eb601",
".git/objects/77/efe98c69e56434646b81964009596b4b270a28": "88c996f5804abd36a71d617433d4d0af",
".git/objects/78/a3a5dcaafb22487a526638eec77d49818322fc": "974f27806d9247573a12c0ab176cb097",
".git/objects/78/d5e3d1c5df6c950a575f945fe3db4d3c7094db": "10ab44ee99be5b6584fdbf83b60d0a9b",
".git/objects/79/09f4f5693e86ecd0c8174c1ff9dade23a4f598": "6584c23b067638c3f2fe479211bad013",
".git/objects/79/1fa491f71da1d4338342d183353dabff4a66ca": "5fc37c131942b18552296e71850c608f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/290a884190b182bd285b2da1a8819981cf8564": "52fbee83c7f455220b228cd61da8dfd6",
".git/objects/7a/ad2801a4c142951f937ed3afcaf934faa58ea2": "07a2b1b3d05d09cdd9f2eb79996d0761",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/f63a234a56eb8e460da2ba69c795fc52c13131": "8123e4c575c4b75610538a48b25069f4",
".git/objects/7d/d494d473aa8532fa415ca0464c21395b0526e0": "d3caba25dd309a5b8b6e2480492c4ffb",
".git/objects/7f/5bc9e94a020c4705cf8115462fa21443546c2e": "dcb96fc70141b89eb097a0cec739eced",
".git/objects/81/0db4cb3dc6e3114228489bbe2a77a738081a15": "eeacd8bd326e848ae76cd6f53458789c",
".git/objects/81/99eebbfcbea166e20209e103f731c26db3ceb2": "17f619d6b1d0f81597db8177ca517284",
".git/objects/82/110bd30ad62d0b55264420b73587a321910d3d": "47c85c301af93307989ed2af5ca0fce8",
".git/objects/84/24139f9da6964e7f23073b161eff8e6250d6ae": "61586aa547f4ac5514d92edb1e5ccc2f",
".git/objects/84/6b9af4d2137b245cd7ff1b53d4d00e4279caf9": "a05d219bc0011bce49478130c1e827a6",
".git/objects/85/3d94a9be12dea0aa98fe5ccedad64db98fa656": "4ce2dbae293890e037f8e316de677660",
".git/objects/85/6253920f806eff3e1bbe006545953492172db8": "27e7c7da9dfa48e6271cb1f62db58575",
".git/objects/85/bfdab6963b5a13aaa47be5f3eff19b28978d92": "907ae26b62f4beb16323dd7a30e48399",
".git/objects/85/c9a9011f733b9273c2e49a01c1cec28b98ec3d": "7ac2c69e0a4f17d06039e04d6f9401d5",
".git/objects/86/706685721e53068d1cd3d4a030ff3656430d54": "e206e50ad4f50f2229263002353a0c2b",
".git/objects/87/9d3aa2e1031045ad79e351089ffe89b47310f2": "b45af5ee9e725fe52b087789a269826f",
".git/objects/87/a91afad977eca111d2fd86c1817e9af0b494d3": "5ccdca2dbfdf5abb490bed4a11a7d362",
".git/objects/88/105188239aaa244ef3dd929d4dd2c8885a25cc": "4d35d25b6cc71ed7418c933a63233018",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/30db033e911ef17b20e4f592e91d7e40d3eedd": "241f41207ecb70fe940495c331636812",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/38fb8384ecc2749e336ef2031253731b8222c6": "148735451d89ca8237acd306b5dd64df",
".git/objects/8d/84176c977d7e7442e68a775e10236e2a2d67cf": "1d5e1aae0796fa1fa78f4983769dfd5f",
".git/objects/8e/08ba481cfe8943657a5ee146a8917a03e7c561": "ebfd0d62275453d3ff57a89c94a476e7",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/dc64b6427bc1592a3fe3c4956a9ea9b687074e": "ac018e211aac3416d4dc4126de3ad6c1",
".git/objects/91/ed438e7eb58dccfe422158fcc5ac01c4eee441": "ff9b6589db6c7f418c81a72258b3e768",
".git/objects/91/eda26bc267e3be34418e8a712a40941c5fd2bb": "688c4e294af2e7ddec31d14249313119",
".git/objects/92/0abbd0c4230b6bb1ca9a028af96d2daeee53c4": "a92d7fa22a7b848f12951e25681b6700",
".git/objects/92/4e12370b3da99102a7f8cb4a94b0df0f6d15ff": "06609f2abc2883e8f1a9733a755633a6",
".git/objects/92/d13c3918003b77cfe73ea6509af30ab56be35a": "e44259ee375926c75f30b8feb03b590c",
".git/objects/92/df67aa3e727613ac1e85558194cb1a050e6587": "4f6ca1c437f028af0e30d62e3d8c5c41",
".git/objects/93/7c37e75a341f65a54ff3508f1b88ed25355a7e": "83e2ea85d5d2c96bdc99ae9442d782a4",
".git/objects/94/0d341f5fe0d3e582897c4a3926f449f77e95d2": "fc1005632e16c51d67ea1871ff8be68c",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/499eb76db6e08325372cc067f6a68dcc339865": "3e900d4f0443b7236f3cdc4da83f4609",
".git/objects/96/0e360c3efe622c85961c122e8dcb0eb72d0be9": "752e009c3e5075a0a79ca31769e3d802",
".git/objects/96/206c79b585064a58ab9a4df1b1a0e2392b11e7": "797e7cff54709e4f4c3144429aeb4ae8",
".git/objects/96/277a4eb836fba38f345ebec1c57086fa213d28": "6342150ca0aab881655cb983e6e08ee6",
".git/objects/97/4d29333c46a9ce8252f84eb1b403d66697fe67": "12bed8806fb748399590a5a5e7468af4",
".git/objects/98/13c4cb8353e706443b9843ce1c11b00e8bbf9c": "5e6c754c173c97e21d2f59aa5c909a52",
".git/objects/98/9ffab61e9e7f6e14422b6c4c49673468c0593d": "abd1503fb98d482754558aebc286a380",
".git/objects/9a/10b0cdc0fb04a3b37a237c04927a94289c73bb": "ea939f415b398649a52055c4651cca13",
".git/objects/9a/5e27ad2ddf6fd4eed6cfd9a6dc9c4f2a552275": "79fed00ab53fed95b4459916dd93d7da",
".git/objects/9a/9e4d9b6ba7b5feb1b326f8796efd068b6689cd": "60a5dd6a580aa84408dedc471f24f465",
".git/objects/9b/d26a6db4e52e53dfea834480328d9620c26909": "78fb58d5afd344e2250fe55ebdb1688b",
".git/objects/9c/2f5300c43b060852fde60430049bfc0e63e74d": "f94294f35635aac214e0074141143fff",
".git/objects/9d/e9be00d8322d5fd37855fc9537c0b2b205a479": "7d6479b861c474bf4b966302ff425a80",
".git/objects/9f/76a6cb9ee4de7b9c46bcaae28baa1ec492b8c2": "279ab389c41ef605c6cc6d775655f9a4",
".git/objects/9f/b6a951a326c3670c7afd94215b8490267e2483": "3036fdf3f3d069cf1e2591d1b5b752c0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ca70f374f9cf065497fda1b0ab0a4c19b0f307": "9c065473767f952f25c426a2a277df8c",
".git/objects/a1/f2891bb22096c9dce88ef6cb18e637e4bcea53": "8e7daf956086f6c1d9a0e7c6d6bcc3a7",
".git/objects/a2/43d849ea3345bc52dd025df2f9d92d121759c5": "cd7b80cf247e9427a6caaff4572cd129",
".git/objects/a2/eb03a0da6b818c06861444418eafc87f5a615d": "eaf233364565c10961d9209a3b47b528",
".git/objects/a2/ed64d47664ae0ded6aea35e201465323281c02": "a86cbfb7edea7cdc279f48ddda32fad6",
".git/objects/a4/6e6bdb7ede758eb03252dff51ff03618050fb4": "c4e1f0fc83c9c98489c0b62987ba4dce",
".git/objects/a4/bd0e39b5d286e01e1994436a837cbe4ef3cc00": "5fd68319b72d2f67569a81d54da2319f",
".git/objects/a4/dad96cbf266d009177ab89569c32cb34e75540": "00a2b5eca7266d9b91dbf7a9500e85b6",
".git/objects/a6/6d724bc27a874b0743a50d61b68fee6f285cba": "cb7a142bbb3f5e8768222c178721679b",
".git/objects/a6/7484464c55ce42468dda29b71aecc82c37fed4": "1656b0e21bdabeb71d83c49498a3e8a8",
".git/objects/a7/f0229201eeaf4f242108a86dcec9f2d8cf942d": "06d2086a81d8fb85b2e907bd388d4b84",
".git/objects/a8/ae1aa9b508e666323c71883a820ce2236987b4": "ad68a22aa0ac4e53dea67328dfb06846",
".git/objects/a9/5bc8f2358c8830820cd69f14c46d691e2e450b": "18b4435507b5ef9b9704df457c65f683",
".git/objects/ab/6b11479e81f5e0b835a019d04793cbbeef98e9": "4ea1a87edf3ca6bfb067c9280ade90b8",
".git/objects/ac/76c953e8ceb2235e80a1bf9db63a25d93ad3a9": "a76300f160440105346c00bccb759adc",
".git/objects/b0/533c381318e0b5eaa52797e474229825dae411": "19df2b9998cbe9ef3b33815a51cbbf36",
".git/objects/b0/6f6a68d403b39597b184510ba7e8bb08cb133a": "f04a13b437e08b5bdb9389230baa428a",
".git/objects/b1/9711ae07477efcfffecda5726118172e88dd12": "b04819ff587a592f4d75bf106d3aa941",
".git/objects/b2/13c5ac3ec14420731f87ad50070c4f90b0c866": "89ccb25285ec4e1b7dfacd07088c8c46",
".git/objects/b2/28dab5d31faabe5e415569e5e0f6e41085f4e9": "574ab2ccd21f3eac837285153b2957d8",
".git/objects/b2/b27d4d0e08dfe2b4ed2a93198e3aba590d0615": "faecdc1caea6509f25aff325a66b26c7",
".git/objects/b2/b6da823c3abc334bda05da11ec02128f9e55e7": "b4fce9f8f2e7dbcd3c48449c8520d9ac",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b5/84a9e8cdd3809b3f0acb237c19ca484cebb5b8": "67abaa9ceab6c9ab0cc0e8ea166277f6",
".git/objects/b5/cc1016cb1a316d4e720c6bb92d8bf92d06e0b1": "0dfec2a19d37fed671080f858490de8f",
".git/objects/b5/d95f1e226367ac4dec398c86713c57f6d69a1f": "c1f58fb7d16545649de78f43cca25c8d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e0cf6db6befbeff464654b442fe9ee0710175a": "73d13cecc377c21752c2ee2d65212f44",
".git/objects/b7/ea76e3c2664df59b9b173700de8aea661bf726": "a956e01b5042334b539cd90887819152",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/61e6eb50d609b41178bab4fdf7002edb3f3af7": "4441391029900ad6f8cf8354f26fa5c2",
".git/objects/b9/d00765990fb7848868ea5923b2989243c7e201": "d81ea11ba5bd7e1cabf05816adcedf5f",
".git/objects/b9/f3717f6f796de243dabf949ff915ec6cc5e5a1": "081d5f7a7eb8db3cbac75553576d599f",
".git/objects/ba/5ef5eab968e02830916bc04549ca1d92d72d2a": "6cccfe42c7d4b6aaf330c5674708a737",
".git/objects/bb/eb9477b55a4650ab487cbeb81f9093ed40840a": "f9f07b217d6c9f26da833f0c871fa331",
".git/objects/bd/4e7c9bbbe24ee727de15713a792ff1190fa99c": "a9942bff7c15af8bf34cad73b404dbc3",
".git/objects/bd/64688e725e357ee99e970e272367865e3e0d2d": "0d0c352a30274277aa5bcaaca2fe0946",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c1/0ee4a4a9090ba0e7ca2b77f4250140eda0db67": "502e6fdb790fa7942e65089bbfbf171a",
".git/objects/c1/965c92ef1dcd0fb93e29e888c42a221f402db7": "a471424d6cf45a2cd0ce56039a71a6c4",
".git/objects/c2/5abd7eeab66b57083081d0d7bbe5d470ccf288": "8b09898779ff62f1fe3921be6ccb1082",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/c72abef05c4957aceb52add9920f509513e320": "355197def92b11e033e2f6da9d14282a",
".git/objects/c6/d935b483d31be15a7a9d1a9e400e5c0b904368": "89f1345fa86f6a1daef97be545f6c347",
".git/objects/c7/fa53f4c6ad73a46c51cc85aaccee4ca15bd220": "654f89a3f720073acf61049ed1d5c6e5",
".git/objects/ca/a0a3c589872b771182de80122d74c6f37d52c8": "56e20374b437f601fa2b414f31d9fd7e",
".git/objects/cb/b98223ca2a3b9dce67b4a30b075b159e1a1669": "25af7f8042f8c6fdf61030c6a308c926",
".git/objects/cc/3cb95314fae568be0463edbdd4037d3ae5a973": "f0a6b6e9de9b50d9907e2a2e7ec36310",
".git/objects/cc/8214dbf040fa87c9544295af3adcd853422808": "a92fa71f2987b42d5e676062d8686e39",
".git/objects/cc/f9c905889fc06c4f82bb2c9e36bc877bbfdfa7": "072e0863baf516e082fcd4b3e88fbc9d",
".git/objects/ce/19938e8ba24bedb2b472b89505ff8d7c1244d0": "3b52ee3580e856fd50bb6dc3222a5840",
".git/objects/ce/5eea6f44f6de02f4cbdb0e48cb01129351fc0c": "19e1e704f156ecffa425a76af7fc0984",
".git/objects/ce/deb743f9db3cc13f276cd1a7f6cd82e02ec190": "48c8cfcb15a7fe1b58005e3f4dcb25a6",
".git/objects/ce/fd5ffebd5b551238ad0a138b9df66e7de45b80": "594716a391136d4a8f8f25d69c972179",
".git/objects/cf/ee785644c3497a7fadef9782f10ced25ddd894": "ef6060569025dd1bcd979e916ba26c90",
".git/objects/d0/5dd2dfa234720998565e821e8c1ae14afd70c1": "e4697e665a9b00664e30087089fbd8ca",
".git/objects/d0/665dae356cd2433eed340a12a28e567941ceaf": "7b4c737ee5cf994de5fe3c74578fa6cf",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d2/0a320e002ff6a5dc170419e59a941b8b87d352": "52ed0b4ceeb0c5a8bb77c49cb5fa5751",
".git/objects/d2/bfdddc1540d640bcbd75944882c7bb3d26f3e1": "dbc73dbfd66e53cfedd44a515308a300",
".git/objects/d3/bc380a7cf18e1d5bb1f8c7cf4a8b6bf384da4c": "2195986919e52608673a18570d6c3762",
".git/objects/d3/d20055b9ad251d4d7a8c4606cb3ee266e69cc5": "f7b2a53300b1ef50316b558ffb66fd7e",
".git/objects/d5/2afe9d0429d122ea5865bbf7f576d46ed3de9c": "b1671afb0ea77654f9e42a294aa75486",
".git/objects/d5/703c009713f4ab94595c0ac9f75205b629e7a9": "d256ca6896e8ae76f8a1111bc5d2dad5",
".git/objects/d6/1ac0474760fd5decfd844ab494ea3f7684c76d": "77fa97e616a21c60bf1148917fb50f10",
".git/objects/d6/4f6ddb78c9bdf283f0b76c34be26bf0d151420": "f587e0f8550eca9a83112f0ec71279a6",
".git/objects/d6/5093134e153e1462fdc94bb6639a98b21cadc5": "a333f25f3099dce29cf06f489aa81ac9",
".git/objects/d6/99c1cadb8758141f7227f34433dbba8d104322": "4077e75497d3e5c0d28d423238efe098",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/33ed6c2b54841765d8547c6f78346ac12323bc": "f0f3d5db021d29b3efc4c3cc5811f956",
".git/objects/d8/904d6d3cd365aa605556c7c2f5127aa6133154": "b6f1bfd91fb69964c373f1149bdc64c0",
".git/objects/d9/1126d5834613da32f6dd91a681525c97055be9": "e26dbb66f2b2d4276dc318bf164524d9",
".git/objects/da/06f48d260531cd7ca0b548770c17fe506fa18c": "21c781572a4ced9914872c3e5e0a41ce",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/db/a191aa00e25a7161fc2ba662682adca2abf343": "6c889a62576eede906fb2915f9fe186b",
".git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
".git/objects/dc/0f15915a0c2dd8663dc1985d073f9d29a073c5": "0fc1578262f19679656737b46ff77b67",
".git/objects/dc/760d7ce915450664a2bdfae475612d580b1d12": "ca0189c150078918c20f4cae858d953f",
".git/objects/dc/d6d0e8c36f2250e1376006ff21ac13bd2e5932": "3f6219a95b76847679ac7205031f7ad0",
".git/objects/de/964c1c35e1879ee9ed62d3fd797d3eee167229": "43f8a693c40fc0eda64d5e25afb38a9a",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/e0/04b2ea505a879bc0a8fa6ba56d698695f88386": "17b75e01bf87a79525f86cf47e2277ae",
".git/objects/e0/1ba0e2c8d8f4baabb1b300bfd02999bf171106": "32bbe04a8b0518cf45b730f041d2da19",
".git/objects/e1/13e733867e49b50acd170d079de819536c8d36": "f52a53604b2d60c478ea911011a1041f",
".git/objects/e1/a52e56d6dae88fbef1c4e666b315a234f5c5d5": "f7ab606abe886b8ac13b8a5f26119982",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e4/383b018ac4a5b27e3e95e16ef331c2961cd456": "03eb2d9939f6a50db765b6b9de0599a2",
".git/objects/e4/ba642fec97daf3a3369eecbb4c799c698fed49": "ac2a38242b6b63431bfbb82278a0f9e2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/37d8c4d4fe01d935125a201f130bec9d032f77": "11c6f2df3d74bf01d2830d2b46e94a70",
".git/objects/e8/b5b0a102217241cdc49918a963ffc51c136a17": "9208b90c34f9c39c789e099087cdfe5c",
".git/objects/e9/90de81e19f269357e697039c52daf33c1895fe": "e5f1c85c437ef735998fc940370a8515",
".git/objects/ea/7033e65b284df031c36627552e60c196e98582": "be8ec093d6b7c8b4d1fff422e52864dd",
".git/objects/eb/6f503418dda48e6b0ce1c6657332056129a0fa": "3d8b279eac593c1fd398c0430d147ea7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1d56ee0ffd8ae5376c1b237fb3084b7145de23": "de655c11ab2a5b5393e463ad0b04c9c8",
".git/objects/ec/46d1c2e57a86af0c9d3c468c64b3d9ebc59707": "821777c1fa10c7d191ff6fb15125814c",
".git/objects/ec/adf01ccb70fb82abd3a82fee996d784fb0598a": "c6700d61874ef4fd4b0b5af2d6c943b0",
".git/objects/ed/52566de831c5151b38c6b2ccafd8c78c93c9b6": "cdd4d276a210ce7c5a295c919eab373a",
".git/objects/ed/d7904d768e19dd82952fd4ca564daa38911013": "7aa450e5464e2890bf17a485804c778c",
".git/objects/ef/1dfc0dfb856a456b3a55b013f5867a5ba8f783": "e833ca121d2f4ba45da4567a382f8a82",
".git/objects/ef/8ec5ab73ca023cf571a14f15850f577c07eb8d": "bb2961df6e60f832044f48f0e4d8d5bb",
".git/objects/f2/7b944bf640296fbba574e01aeb1032fe3ef292": "3c6d0c9415ab2ab1f90ba8b7591c7b68",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/objects/f2/8f4f8e4ef0534f09c266bd8bd600a9f0d49478": "51c73887f332978235735d3c0db6894a",
".git/objects/f3/8d79eef7041388d0d4882614d854b767e63d5b": "bca604af59a073c469e55dd8a6a68046",
".git/objects/f3/97f9095b5acdea34691399da2f79adc1746b10": "2b518a1a56605c0b9f42168a95c0fec8",
".git/objects/f3/d19b3ec4b911e0da413cd36f5907bcd42a2c3e": "d6ed83ba3bb7fed4b8ef0c16e2c4da52",
".git/objects/f4/780f04a88eab87b8be24561c4a128811614b6a": "db263020254098b08cf6461c0c8f6b35",
".git/objects/f5/1bb26baf5692e4798ecd9ab4d78ac416c3c504": "45f23f1556b69ae48d18fbff95cc87cd",
".git/objects/f5/abc3cca59381d37ff6b4dc40c713b51553105b": "315e1d8cb84dfd3365528ff36b4bd22f",
".git/objects/f5/f4c38349557c6efe0d7a29695d1601d46600a2": "b865b2e340119c8fe5199f9df1230684",
".git/objects/f6/0e17ebae5104cdff4240ece6c4b8c32bdd38b3": "721944a08f782cda8b5ef3f8d0180c24",
".git/objects/f8/4f5a70155e0452cda3319d96c746d26f1bcfff": "10e0cab2495a50c505c7f3c5d3657092",
".git/objects/f8/9afa1b27c9237bdebbfb7a1bb11e5b8476193f": "c391770cd8c6f8abcdfb15db834939ca",
".git/objects/fa/d9b3e3c9a74367e5108fa93809026a035667b9": "88313c133efb4775fade5404f8090672",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/129af425600f564f5263d34255abbfd74c591e": "23485f32f8c7b9700e0368f58a5252d3",
".git/objects/fd/44b23f6488cb779f96edb38e2080c8f38cdc61": "e39d9af3c83d83301b493b9ef525de2e",
".git/objects/fd/5c8ba05886248807b64670a8739f73330f8b09": "514fc2f61e61e6e685d754db25703c4f",
".git/objects/ff/18201d08c0ae036a1b8758193823a8ea1f7829": "ab52fc49be8a646c8771d46353b983db",
".git/objects/ff/32bc3537ba215746a384a92875a96f4d3fc525": "00a613b7202f0ecee05a271ea98eefe1",
".git/ORIG_HEAD": "51f402ffe14713515067621815606af1",
".git/refs/heads/main": "3549695cee87a6fdb8259c7a6ceff8f4",
".git/refs/remotes/origin/main": "3549695cee87a6fdb8259c7a6ceff8f4",
"assets/AssetManifest.json": "9b01a6e43c05c9e6f15a340992b863f0",
"assets/assets/android_apk_badge.png": "4e2c8eeda2efaa694b3283175ac9adfc",
"assets/assets/app_icon.png": "1c66d486ed39bc3771e6792d0ab144a3",
"assets/assets/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/google_play_badge.png": "1a9453063dc4ab95fc0cd62b9c1a095e",
"assets/assets/ios_app_store_badge.png": "362c61de9a60dcf6b1f2e9732c5d7205",
"assets/assets/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/mettacode_application_brand.png": "678f5b20ff1e34d9bc2e7127dd2463f3",
"assets/assets/twitter.png": "401933ef36430ac6d3fdf0e100d5dd71",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/env/env.g.dart": "7592ff0a4593a8deb3354a20fe09169e",
"assets/NOTICES": "d2ac6e1826dcdb031629cf1ca30e14be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "4b50fb9eb008b31285fff1ca216de560",
"favicon.png": "1c66d486ed39bc3771e6792d0ab144a3",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-icon-144x144.png": "442dbd95dde16083d67c00d28ae5f63a",
"icons/android-icon-192x192.png": "f41e109d15ea8dee6bb2f892ca73bc3a",
"icons/android-icon-36x36.png": "f173833efd149acfdcdcc57815c8732c",
"icons/android-icon-48x48.png": "6fb3783918bfac9fce9bff2a904290d0",
"icons/android-icon-72x72.png": "50cd1a8122d012eabdbdf8dce966e54d",
"icons/android-icon-96x96.png": "243f835abb7875c81492ad70b0e0838d",
"icons/apple-icon-114x114.png": "8092a722e518b78aba9e7085dffea85a",
"icons/apple-icon-120x120.png": "daf2ddc58ac2e4413c1804ee5ed32a99",
"icons/apple-icon-144x144.png": "442dbd95dde16083d67c00d28ae5f63a",
"icons/apple-icon-152x152.png": "f615c31a4d84ef3dbfefd66082183c63",
"icons/apple-icon-180x180.png": "48b52db0f282463e8480f2db81a844d0",
"icons/apple-icon-57x57.png": "d54d3d8ae1742a1962a87a951fcf06b1",
"icons/apple-icon-60x60.png": "d7ba253c1396d7bc6c2d9792baf888f6",
"icons/apple-icon-72x72.png": "50cd1a8122d012eabdbdf8dce966e54d",
"icons/apple-icon-76x76.png": "b7b222a46c6bc145139086bc88330153",
"icons/apple-icon-precomposed.png": "533ad57e600a57dbcaf0306c608e8b86",
"icons/apple-icon.png": "533ad57e600a57dbcaf0306c608e8b86",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "ba719fe933736c67991ed7704c862d74",
"icons/favicon-32x32.png": "7b852cea0f199e89cb330c8795a9efcc",
"icons/favicon-96x96.png": "243f835abb7875c81492ad70b0e0838d",
"icons/favicon.ico": "3f6dac77ef5eeabdb174620173793e36",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "442dbd95dde16083d67c00d28ae5f63a",
"icons/ms-icon-150x150.png": "53d491fc2ccbbcefcb351d820c7e9b5d",
"icons/ms-icon-310x310.png": "71fb439d45dcc78036e674c87c7c1941",
"icons/ms-icon-70x70.png": "6fcb61c4a24aa4c28ea4d1ebbd4cce1f",
"index.html": "87ebef572d99bd08a9d306448d33ac24",
"/": "87ebef572d99bd08a9d306448d33ac24",
"LICENSE": "e62637ea8a114355b985fd86c9ffbd6e",
"main.dart.js": "da91c8528866857167429c021f31fc82",
"manifest.json": "d876712699b425c0e13e0c3e8a895b4c",
"README.md": "b9a0c72b5d22d1493f95c68477a52236",
"splash/img/branding-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-dark-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-dark-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "0152e01bab6e36ce361ece78cad3bc14",
"splash/img/dark-2x.png": "0784f26c252dc1e707fd0764179587a5",
"splash/img/dark-3x.png": "02f04facdfd891e52ff479d32af6ed57",
"splash/img/dark-4x.png": "c5f0a6074028f081d0421a6ae5af3ffd",
"splash/img/light-1x.png": "0152e01bab6e36ce361ece78cad3bc14",
"splash/img/light-2x.png": "0784f26c252dc1e707fd0764179587a5",
"splash/img/light-3x.png": "02f04facdfd891e52ff479d32af6ed57",
"splash/img/light-4x.png": "c5f0a6074028f081d0421a6ae5af3ffd",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "962873915b7f18af608bfa3f86550405",
"version.json": "e8c8ac6dc2a93ccc73ca9509c108e7b6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
