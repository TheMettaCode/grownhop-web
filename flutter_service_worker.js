'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "ab1f0eaab5f29c218fbef33cf779b23e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a37f62a4b01ee2281484c964046e870c",
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
".git/index": "b08082cc5586466ffdb9ce43bbf947a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa256baba266c4c9c156ece31f007cbd",
".git/logs/refs/heads/main": "aa256baba266c4c9c156ece31f007cbd",
".git/logs/refs/remotes/origin/main": "7feeac429d060ed20761b3f47337957b",
".git/objects/00/57c64ede07c7b8ede34645226907fd7cc7dbda": "f4a45ceca7dd9b74082063080d456cb8",
".git/objects/00/75da5e88063468d59ac54aa812fcc79f6e5e6b": "4c1e56f2d6dee7a5e49a495da8453733",
".git/objects/00/ed81755670f09d63126886b80f622d2a4b88a7": "2418f2878e138a10361ef29a96e3d052",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/02/55365e8160cfb06c35158146a8d750ae7dd372": "487199ea506ca5f40572edcaa69fad91",
".git/objects/03/9363e41a720579c277933ab2b4e211846f7a57": "b94663d884be3e9461ba6a8e8a90990c",
".git/objects/03/c8113fbba1577bd05b3e6b2d038a9f9a5f3101": "0800f426f24e69279ba62dddd197aba0",
".git/objects/05/978ceba7d5e53fb403861aec64bda319434fe5": "02e6bd079f7c525d994da9d57a1d519a",
".git/objects/07/356d02274e153629013dbf5b38d4f63c7f34b5": "f64d606ed941f35d968c4332fbec70dc",
".git/objects/09/e2c215bc55724206badc89056f8d26b0c625ab": "f16121a82edb106cf9c01524961537d1",
".git/objects/0c/01a017f9546c941aca05f730ada16b182c59bc": "cd782fc6221d9c1a69dcaab04bb40f5d",
".git/objects/0e/6b78fc987ace9d8c2d21c0fe348e00bdec8191": "401e4bd4170bdd3aea474d613b1bfae7",
".git/objects/14/d39ad67c96862cbf1829bb5b8ad2d92f205e9c": "bdb33ee5c4e6be59fa5a1876ceaa8ab0",
".git/objects/16/59d428ec2e05e6483cb0fc3d0c89b2d971c5ff": "9b33e4493feacba49a1d2ee7392a10e1",
".git/objects/18/b4ada214ad2662fdc4e4c25fded8b51327250b": "3b16d707ecf7292ebc7f47aa652e1cce",
".git/objects/19/6201ab2316f43bdb9c32fca791fb628be1ce8f": "950b8f328231f15e8d9eb89ba6a8ed5c",
".git/objects/19/6c56c80c2945266af2150135ccb0a94767b1c5": "9323ef32a90403da2e2845c19b3e0d8e",
".git/objects/1a/f69d57d364ee28398bcff1095a39896311572d": "3e57feda177d0547a9b02a38082694ef",
".git/objects/20/2850b27293ac4ef11f1c1af015be3d832d3853": "eafc313a85c625b3b25b8f2761849f14",
".git/objects/22/aa3d39f86e60dfb7528c5306d3672f3ea7a6e5": "c99ccc34d9abd1fd593b9938b62ea0f3",
".git/objects/24/8455b62197400a2d4368b613150a6cf0e5f802": "bb901e2be8c86b57da94df55d70107c6",
".git/objects/25/e91690a9a902b0ba40dcd350c7e1d7e4ea1f7b": "457c0805c555e24a688b1d7b97a0b11e",
".git/objects/28/04060764501da7225cbad2dd85a8da29d9e73a": "055c5550491dc2ebbd2f575a76054081",
".git/objects/28/e26a8742c09df3e821db1415f0ebbf7e1fe62e": "6e7c1d5ac53c376b0c11764c85d4afc2",
".git/objects/2b/f78f3feef232a621de4b476fae326ff9b4e87a": "42747411d7b5d8476ad7b373b9a912fb",
".git/objects/31/a16d64b9e690994ed2822154cc5df8df569875": "536dcff3305e77daf87f6dc181b35254",
".git/objects/32/86f64447c1f1986f67fee2145de3189108a36b": "eb5e1b8f9ecc8dc00fa042a5383c04f2",
".git/objects/32/bc5c1cc3dd7d0ba70109d39e55a38fc8c7d986": "4e9140fb66b943f8a5240dd14f71b57a",
".git/objects/38/4e3d8f723bdaefba1c15380df47ae4579d0ab1": "47a5824d39a69654ec431aec9d526878",
".git/objects/38/5cdf127b7e446dee405b0e0d0fe5330354ec26": "0abfd2715622781dfeb0a315ac40aa1b",
".git/objects/3a/d0f5e75ae2759d8585633b4e54db336dc8da96": "eee12e1c4560df05b926e5b79c5e3410",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3c/b5dbef2c1cd46b4e3d9872ddf2cf0264c8c632": "f81b870b3c197433c7774c17e48fa0bb",
".git/objects/3d/2167351f7646987ac4a9733b2e6c8538f827f7": "45cc7f34d6e881726bfa9061db7c499a",
".git/objects/3d/43d8cd402b5aca5807e7a632bc004c81214c79": "4b8be10c36026167c9f2838d500d63e1",
".git/objects/40/77fc71880e4a50a49f19d2aa2337e4d676a60f": "367a1edfb2acddfa062ac06f26b08982",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/2883e519b0f44d83ba12f3776bff0f27079628": "5f8775c3a09fff9fbcf7fd29485b2932",
".git/objects/4c/94c7068ac64d8ffa5e01a4c624f500bd058f5f": "084a7f3dbc801e1b389afe6b7ba2ced5",
".git/objects/4e/4c82f29b453d0ef65da07f805e7a451e077b5f": "20e5193f46976fe282d3a5cae0c4cf60",
".git/objects/4e/ff8fa8f836f268704e71546547278f65e4851b": "b1fdb065829b01145a3a5c445074a54b",
".git/objects/50/bbae850ea30c584b76dde11ee9586770525c18": "ab9b8cd244c3ca3b535c04d5e8ccc670",
".git/objects/52/0ce2287c5c7bdb267d6da946c90da44f90615a": "1baef46719395b5b8d1c04ae255bafbf",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/02f88e6576ce89e4c35b0c1484525c3b1fdc7c": "b379122725eb59860f485a056f1bf2af",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/58/d70dadf7c2e9f9c2cddb5c6c7163b64bf3d9e8": "040949310a8725b79204ebba4e9a4139",
".git/objects/59/37e918adb4f37b1c95964bc8664fc10cea499f": "db2914f018970e6d87a3b227723584df",
".git/objects/59/fa56145431bf10ca1779594707bb11caa95611": "4f2dfa0d85a06b2bca0c493ebb1c03ff",
".git/objects/5f/3dfb663497173dc56788efcfe8c6c7db757848": "69ea7889feee7bba29b9b972ce361f70",
".git/objects/5f/de85cb5ef00f801b5f1962b8b8fbafe41225b4": "3771530dedc2b01fd251a893e4f94882",
".git/objects/60/d2dcf91b3d2653605b4c27d812e23934d081da": "f6cefa86f488766e70c9b26a24a6cb86",
".git/objects/61/1cf9fcd9ab816c4e9c54b0ceffd565887a6b62": "af099b36297e924231748c3582e00b93",
".git/objects/62/23c7f4ae488d3008ecba09185da91036009d29": "6f5a7ee5c4661123122c57bd6db8cede",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/62/fe9214f4661a53192ca27d8c717a07e8071949": "c3e8ee5f7f1eeba897ab36bfa1e6f752",
".git/objects/6c/c41b56e6177826dc0f13f76172926f0aa544c8": "64e4355b364144e48722c9942c63e1e3",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/6e/5030d90d7efcb2f6c453000af2893cc7229a38": "203acedf7a3d7e59a8ef01f0fe2b27bd",
".git/objects/70/019e2edf1df7353d82f996048602f28d80f036": "ccad9f1eb959e7c606fe505e1af4978e",
".git/objects/71/6f6c22e1b8d761b703fd1febcf28ff70aab616": "d41e01582b890684e09460f3df31c9d6",
".git/objects/72/0b1d787f931c3d34413ad04d62e40ed1a31ecb": "01226e8bbcd0168814002e95b5a821d1",
".git/objects/73/25b93eb1fb09b76735cc6446724fffaa2af64c": "21ededff473d82613cc5de70aae04d54",
".git/objects/76/05d8b1fe9d2e70757416d8566b447812c11ab2": "2fbb1f8036d99f280822489ee9c8bd59",
".git/objects/76/bc69c9f40d528781c3a976bde0c130c74943ad": "bdff2390d0b2781881ba235ae11f24b9",
".git/objects/77/078e20c9b30c55f9fd9981a69141204381cc57": "60a5b7d20d0e004469902de7e840324d",
".git/objects/79/f38c6801d8e23f2ca22e0f2ab702741acf4a81": "e68cd9dbbc6e381db5861f8e26693088",
".git/objects/7b/0570a0f8c51d08aad04133ff5c58cdccfbaa32": "67700a964078dee6825dc47d7a85f37a",
".git/objects/80/41bfe3b39c155f3c28f4b39216ce69cf4df397": "b199f7b6edaa403c0d732abb80991e97",
".git/objects/82/7a59a9ceb4f88892ca16c72d07bbbc38c158c1": "097bf6cc6dc969ca48b10db6b4b1988f",
".git/objects/83/4fb40de2899c4f68ff2c7c31dcd2623a972a16": "525777af074ec24e2ad933b6205fbdb2",
".git/objects/86/6ee029f4a3d5cfc2de9824863426d400c73bc8": "480091972dc77fa7994c2889ce244e2e",
".git/objects/87/a91afad977eca111d2fd86c1817e9af0b494d3": "5ccdca2dbfdf5abb490bed4a11a7d362",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/89/c0091372c7d60f9007f5e14c95d02a05c8097b": "526530c33d06b93a4e597796cd3508de",
".git/objects/8b/00cdd3f6a1e6661cd26b1a8f80cba394465c1b": "ff90059ec85e19e6dba8d935f0feeac6",
".git/objects/8b/24b5427118a26335ae8c5aa488065d55dbe878": "eeef3affb0a8c82227c04190d51fefdd",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8b/f5c127c73e207144b4d496c6721c5368dd8a3d": "f7f7c775f1192a41ff29dd733931d711",
".git/objects/8c/63a50dd628834b930624cb8953ff7625c4ff09": "1a2d68c4a8c5ff18db21cc17c6cde1c6",
".git/objects/8c/a26e9cd91a86df64da358d7cecc8a9a54c75ba": "8d03234e0ef72922125b11714820e506",
".git/objects/8d/2f5c28501ea491e36348432e9530599acc311d": "770911129390212bf14a6af369dec291",
".git/objects/90/547bb6e2f7cd09840cefdd63ae369bb8ab7d1c": "bf8df4252345a257d563e7e0639cf585",
".git/objects/90/bcd1e3f9b140a37ba5106d980b1ac2d2ea3a02": "c4c6445734f1556d7b30902a1020c792",
".git/objects/92/79654b6dd76ec0b6865108a3e14fd0512f2abf": "609a73b8f14a5c28b5a2ab225b87e1e5",
".git/objects/93/51e835fcb94360da1d547491fc97f5e2f76a8f": "737aa6b43eb0ee37748a30610faac268",
".git/objects/94/448a67ac6cddbf7070f4e0e39469de0a92cee2": "ba146c029fc7dc55dd13eb5908532618",
".git/objects/9e/5e35c774fa5403bc5596e52ce560e4fb04fb3b": "fa674e75d555a2870ad69dfe5277df10",
".git/objects/a3/9c645083b8691edb9a6cf3824c840b70f63326": "a4b5065314b927b63d1927a31def2122",
".git/objects/a4/50efb7af57af0b304c31d0a1fe39560a00962d": "942ed00ce5efa6a483b7433625d41d06",
".git/objects/a7/25209bc55febbbf125740d7f2556105abff297": "3edfa06f3dcf8775ff340f5fa615440e",
".git/objects/ab/a1047db05cb9779d07e378305c5cdf944aebf9": "c1581f62735c3b14c50f5aebc47a1af3",
".git/objects/ab/e3d11b66fd75a4eb96e43f0539b4e1b3ea501e": "7a4b42b8c59dc216f0662b2fad0348de",
".git/objects/ac/ab529bdd2073b40fc7dcf8594dba2a336d9e19": "ba48bc49caf40e56f44614a8e4f227e2",
".git/objects/b3/e9f376780ad4b9152df5f96bd4d4b6d970e331": "cbc5414760df6c50a4f180fdf8e6f676",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/bb/681fd57bb22553fc5fed97dd3f6d98dc96f3e1": "dd138137e8d805477c11c1ff6bd2dedd",
".git/objects/bb/ae99df6d6bc67ae6a823b59182ff3c5861d5a8": "f040e34b36e295522b6381d27ee13bbd",
".git/objects/bc/487d44faae5298417a57377117b185d5bd0b80": "5cbbd1ebe4be9e9cbf6cf46eb6733a68",
".git/objects/bf/9d300da717d085048ceca58a617a25b3febfb4": "21e7f51b5cb1a23a6b6173d06ca86de7",
".git/objects/bf/ba19867d8e46c77be5c9b95b48abf303072ea1": "69bcd252d7c8d2efb5f98da5dfb80748",
".git/objects/c3/f8e7841ae79def5806ffb9755d0abc0db088b9": "6d3784e11dfe0352e83517f77c30257b",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/b4d4a87d40aa5736393f515715f94381d0e11c": "2a49b77be8d796ee23e7130ce2e119e2",
".git/objects/c7/e6b410832470d3230cdcb25a89deb219da38f2": "7d2ee9f4b13bc55337d5cae8104e9e6b",
".git/objects/c9/225ea324de40aa869b6c23f1621eb126644fd8": "95baf19ae8bee22e6e220ce71cf5c365",
".git/objects/cb/d772c799e3735e42beef325204bd2e1bff8557": "6a5e4872e23b9b934ec33faab7bdf543",
".git/objects/d0/d57867f57ed36eb17b14a60e47974263e3284f": "16857a34d7f809ef4ccc5fe442cc5fb3",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d1/9e85ac8e2aabcef49d39e9805dd6d44d5653f1": "44bbcad83ccc16b72110d1471990460b",
".git/objects/d3/0240e3eb1dddf6a4cecc8fa96f0df4985a9014": "7d8caf1981f2ba2fcc9e6cdbfc1efb53",
".git/objects/d3/c4e722362598cc22d632f9e937012be0e0351e": "f12b4a17af654bdc4acc1a8df464a34a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b071de932d79a07a2e4822db94cce60cee5404": "a738c6612e25e4bd71aba29290efdbc2",
".git/objects/d6/d31f7cb3defacdc7942295451e60a529e2be97": "17801000735c4c7442877d04eadb73b4",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/e8395fc4019083738bbd7c63d90e71be0c306c": "adf11bdda3dca4be2d2b876fa4719c51",
".git/objects/d7/f946cff1df8ad6a307cead865ebcdbcb31f46f": "c46b78a780a2c3501a0f5229dbfe9845",
".git/objects/d8/1e67f355b7efc9b7056c038763b8e0d8fafbfc": "529ab509697be2149481274572f2b247",
".git/objects/d8/71189ed5907d2497075865e1844629b574c29e": "521278323c1c035ea31889328594fdf5",
".git/objects/d9/1126d5834613da32f6dd91a681525c97055be9": "e26dbb66f2b2d4276dc318bf164524d9",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/e1/5e9545bfb539bcd2cb22e68c4b0ce9d443ef26": "16866ef40815031cbb02cb8a0740e155",
".git/objects/e5/0375f09d9e5182a742a0d41cbf8309c3924887": "bf918bcf9744091e71e1053bd95d9d5d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/b99590137416784565c7581defd166b2494ffe": "958a36aa16e066a6a90e4c7c854a5592",
".git/objects/f0/1648ae45cdd2d8e190102717d450e973d84be3": "6bd808a9c1a555c9fe30027412391a12",
".git/objects/f0/fd6395e37b09e8e773251517291d50594cf15f": "7223b6cbadcdd6a59550da1f779ef4a2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/aa949585d67044c29c237059b9aa7e781bb14f": "d864f5c248b00448632f8cf7150fbcee",
".git/objects/f9/170945d44bb6a4dc25ad06110faa9c3291dace": "145bb581eebbb15a12bb8b8ff3290a26",
".git/objects/fb/2f083eb45b93d2292d32ff22cf990e6447fcfe": "8e59474f4e6abf95d10b6df3a590bf0e",
".git/objects/fd/44b23f6488cb779f96edb38e2080c8f38cdc61": "e39d9af3c83d83301b493b9ef525de2e",
".git/objects/fd/53f75746608a2ec5a99e9a25413f93c7e741c6": "072bb084574555f270ac65757163ec75",
".git/objects/ff/18201d08c0ae036a1b8758193823a8ea1f7829": "ab52fc49be8a646c8771d46353b983db",
".git/ORIG_HEAD": "15eeaa5addca6732211cf796b32431b5",
".git/refs/heads/main": "a4a56bf65997a8f06bbceae0eaf0ac9d",
".git/refs/remotes/origin/main": "a4a56bf65997a8f06bbceae0eaf0ac9d",
"assets/AssetManifest.bin": "89131f0705099285ab74bd6c60ffc907",
"assets/AssetManifest.bin.json": "b7a21f181b1ccd64ffd667df433b4f1f",
"assets/AssetManifest.json": "6afb81a505d54baebc91e223c6364cbb",
"assets/assets/android_apk_badge.png": "4e2c8eeda2efaa694b3283175ac9adfc",
"assets/assets/app_icon.png": "2d41682c6cf8cc1649dc21feb97cb1b8",
"assets/assets/artist_profile.png": "e9abbf09fcd7f65a7abbf153a8f7037a",
"assets/assets/bitcoin.png": "8227f2b9f0fcef8b588cecd9b1bcae7a",
"assets/assets/cashapp.png": "42dec4b15db727eedbb9a12c3f5169e2",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/fonts/FREESCPT.TTF": "b6b6c03d8e793abf717f01172b04f7e1",
"assets/assets/gh_icon.png": "230537fc10ca4f0ff715ba863be62a9a",
"assets/assets/google_play_badge.png": "1a9453063dc4ab95fc0cd62b9c1a095e",
"assets/assets/ios_app_store_badge.png": "362c61de9a60dcf6b1f2e9732c5d7205",
"assets/assets/kanga_with_text_icon.png": "0036ce80920c7566fde2d7d9504dce53",
"assets/assets/litecoin.png": "1752b6f6b63f71a75bd472dabad939d6",
"assets/assets/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/lp_icon.png": "aeab522b408c09e0667a2b33929623a6",
"assets/assets/mettacode_application_brand.png": "678f5b20ff1e34d9bc2e7127dd2463f3",
"assets/assets/mettacode_application_brand_slim.png": "d853b4379aa309ca2eeb4bc740a6f684",
"assets/assets/photos/elixr_horizontal.jpg": "a7856f18fb40749930ae5ad22abe8f1e",
"assets/assets/photos/elixr_vertical.jpg": "5128cde62e355fd797ac459e4cf021d6",
"assets/assets/social_media/facebook.png": "3e541fe022037cb156e74270120236d2",
"assets/assets/social_media/instagram.png": "12965f33f5982686f6eb63d51073722b",
"assets/assets/social_media/rumble.png": "ac190ef9e408a63f854a7003ee8775b2",
"assets/assets/social_media/soundcloud.png": "9122303753ad079015ccaf0e0cb3a25a",
"assets/assets/social_media/tiktok.png": "a3352efadc94a5ab0d11173dcaa7d7a5",
"assets/assets/social_media/twitter.png": "69d4bd7aea0945ba7ff5e77d1752a5d1",
"assets/assets/social_media/youtube.png": "2b5270fc7e50270749881e91da72e984",
"assets/assets/splash_logo.png": "c2f95aa0f685684f27af293741d5d244",
"assets/assets/spotify_listen_600.png": "34edd648568473090de94112ded39bdc",
"assets/assets/venmo.png": "bdfa9632d227044c5cbbfcdf8f640f03",
"assets/assets/windows_store_badge.png": "486a0de58c132ee4a9e4b43dc7368857",
"assets/FontManifest.json": "37da8377fff0903ee17e7a762fcf53d8",
"assets/fonts/MaterialIcons-Regular.otf": "a923abf0b7a5bb648cce809fa5dca408",
"assets/lib/env/env.g.dart": "60b125d2e8fa1520153a3c5fea4a9324",
"assets/NOTICES": "e069021f047c5e0ec5dac2abd9648b1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "fb3e5a311087ddf6c54fcc73560ff0a2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "bb607fe8183913a67959c91b9ceac0ea",
"favicon.png": "aeab522b408c09e0667a2b33929623a6",
"firebase-messaging-sw.js": "7735c423cbd0cd7274ea61921b27472c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "30379f5aace3d6843f1b59d5d3f74458",
"icons/android-icon-192x192.png": "305d624469e829cfa825ea32ac147c40",
"icons/android-icon-36x36.png": "163897c7fdc668a0bf9a590026d0e4ef",
"icons/android-icon-48x48.png": "089c2f2e9f37892ff9c64abe1368c3a3",
"icons/android-icon-72x72.png": "c4eacd4ee5fc85247853ae31639046d2",
"icons/android-icon-96x96.png": "de27f1e272ea244209f57d7ebe5f13a7",
"icons/apple-icon-114x114.png": "8cf9550879e796b8b4fb6b7ee63eafaf",
"icons/apple-icon-120x120.png": "1e682eeb21743abdd36ec873fd76201d",
"icons/apple-icon-144x144.png": "30379f5aace3d6843f1b59d5d3f74458",
"icons/apple-icon-152x152.png": "2113876ecc89f9981e17a8f6b804af30",
"icons/apple-icon-180x180.png": "ad9c73249d594263142b2af3f4fce588",
"icons/apple-icon-57x57.png": "41ff095e858dd1317c7b9bd0d8bf5ed6",
"icons/apple-icon-60x60.png": "077ecde00784eb42e17f3ba5b83882d9",
"icons/apple-icon-72x72.png": "c4eacd4ee5fc85247853ae31639046d2",
"icons/apple-icon-76x76.png": "deedf390bf61ed21c42dcd8ab1b479b6",
"icons/apple-icon-precomposed.png": "2594283fda5c800aecdea455cabf39cf",
"icons/apple-icon.png": "2594283fda5c800aecdea455cabf39cf",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "e0fddbd1934b59e59a4c40d2e8f58b65",
"icons/favicon-32x32.png": "b16eb48d7110ec4d2a848da527047939",
"icons/favicon-96x96.png": "de27f1e272ea244209f57d7ebe5f13a7",
"icons/favicon.ico": "b39609d0e0bc1218032a8d5a285e1096",
"icons/Icon-150.png": "b31c54bd299d6cac46c69a2d296be692",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "30379f5aace3d6843f1b59d5d3f74458",
"icons/ms-icon-150x150.png": "b31c54bd299d6cac46c69a2d296be692",
"icons/ms-icon-310x310.png": "7049a44a47e1cd02018830af308ed1f7",
"icons/ms-icon-70x70.png": "66a247cbacc3d8ebb47a928f53d6c517",
"index.html": "976833bac1ef2315590ffb9ea1745bc0",
"/": "976833bac1ef2315590ffb9ea1745bc0",
"main.dart.js": "81c0bf12a0a73fcaaf860d60f9ced37a",
"manifest.json": "df4475918922b4919960d27b9a70c862",
"OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"robots.txt": "b8bfd6acacefecdcbc4e63c63f2ff814",
"splash/img/branding-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/branding-dark-1x.png": "82e1c8d503aea1bcc402598ddde539e3",
"splash/img/branding-dark-2x.png": "38e6a29fee3f18a42c360f36d6c3c055",
"splash/img/branding-dark-3x.png": "defe43e3262aab6d352c70bab4fc18d4",
"splash/img/branding-dark-4x.png": "db9231b604ab4b29af0d25f70e4ed864",
"splash/img/dark-1x.png": "2f15fc97fe67a92ae0aa6804dcf5b0f1",
"splash/img/dark-2x.png": "8c6a15911d0bb3736ca1417990e5a6f8",
"splash/img/dark-3x.png": "d224f620adac312d7143aa0f30592221",
"splash/img/dark-4x.png": "9777a621ced89fefb97f27105c19d970",
"splash/img/light-1x.png": "2f15fc97fe67a92ae0aa6804dcf5b0f1",
"splash/img/light-2x.png": "8c6a15911d0bb3736ca1417990e5a6f8",
"splash/img/light-3x.png": "d224f620adac312d7143aa0f30592221",
"splash/img/light-4x.png": "9777a621ced89fefb97f27105c19d970",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "962873915b7f18af608bfa3f86550405",
"spotify/index.html": "92a2ac8b09943654b8048c2d4a8eedc3",
"sw.js": "13381579d39b1995ef59006a763dbc9b",
"version.json": "c7f37242256273008070948a5af886e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
