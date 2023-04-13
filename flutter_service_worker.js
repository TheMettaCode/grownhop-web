'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/config": "cc82ed2690f97131317bd2c14668c3b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7418a823d8ffa5f653dd9a7d8a23bf15",
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
".git/index": "c7c04ba90d5d3ef303d8730046970897",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e508036509484285f69302f1b03e48d",
".git/logs/refs/heads/main": "7e508036509484285f69302f1b03e48d",
".git/logs/refs/remotes/origin/main": "0822cbbbe37bce2444fdd1a5e00db2b9",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/06/4caa0a2bbe635515f8df050a8db5f300a9853e": "eaf5cc749cb5a32cb71ff52a1c81d25d",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/09/41f6f55abaacfea4fadc81e55b6531e722c108": "a98b71b367b3089e3c98d834f1971cd2",
".git/objects/0b/2c251c86b0638faa04acc29a77a78a1f778c64": "6bf43d1ddbf25eca409fa5972f332536",
".git/objects/0c/b72911aabb9582b826787a578c90364817dcc8": "705a322ced47abf6ce48460128babc62",
".git/objects/0e/059157b3929348351ecdf6856b523ace82c27c": "2c388890d78a74734c4b2ccc7c80ac1a",
".git/objects/12/31b6a02a4cf01f4e6c3203dfe23002e22b3603": "9089f0b534f9dfccb1fadd556d88a1ce",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/ec0326c6b2042c53c4d1a499960970fac08726": "2ea45eaab41474b5596afa4d601923b2",
".git/objects/1a/02f429e45c5c83908abcd66db1a6f618e1ef94": "4a4a35e5944f0ca03e24f91bbde11585",
".git/objects/1c/2c5ada56b0222cae1b1b59007e9a9ead6c7978": "1fb837880bcedd21173fdc2e4a3c2708",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/a7933f96eb654ce7bbf215a1529421682876af": "775d23f0ea4326649504b0aa6dfc7335",
".git/objects/26/ea9aee85bdc5f844371890334c65d02e0d5acb": "c972783aa2b5893502c7ec63a48a8423",
".git/objects/2a/733f78b1d85001ae31fed6fe81c013a4703a63": "166269f6aa142f8b199c7a4dbf160153",
".git/objects/2c/37316a8d6282e75c51db949840695d6093ed25": "f8aceb3e99d641a36bd165e17715dc01",
".git/objects/35/1a458f30be8984ac7346ae63425af0df4bc4c0": "8624269e55a4237092495016226f6d3b",
".git/objects/36/1260a30711067123d07ede8057ef9129b154f6": "93228c808689246ece33ab7ec294eec0",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/52483a7ff0bd9a503d0b2d692c01fa672d4816": "2afc45a45ba11113562cfb0456adc6e3",
".git/objects/39/9d5f822745e5d7573b83d8d4f6f559bcb38d42": "42725ee8e77b8d1aadfefb07ad79601e",
".git/objects/3b/2bf17c1c2a89c4655f4ef6a9cd2b611782e267": "4e012e41bb244143356bbaa9c2df9e40",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3c/bfb00c99886687013b07088659df4f872ac295": "69e988059922a7cf511bdea611e8eb4c",
".git/objects/41/03f09544bcaa8a2b0dd053d2abfb55ccafea3b": "816aace708e007f194b404e1efabacd5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b770caa9ae81d7e148312d303200cc035e60c5": "36d3473faf557f89aebce6fad7517a12",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/48/cf72c1f840b22f280bc6e346750b9b42a4c2c0": "2cbf929910b8151f98b0c3de55dea171",
".git/objects/49/5c94af74b21314c1972e8840b7823ff10f6812": "524311d41d1c2aa74f6db47a9f9e2706",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/d0d1c8f0abf82b0876b1d1bc1f0c280307bf51": "b0a86480ca3e4ba325cbc529eddaf570",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/5974a5ae569aa18a450b6bb4a7abbdd8024a71": "2864025d13128bfe71382cd283e9ee58",
".git/objects/50/306319de0632b63af5627b9b4097d8c2b0869c": "051fb8d7ea2f23d63b1a5b7c47499ba0",
".git/objects/53/9aefc193908a32f410a84d8b1209a328d7ab5e": "797bc9ebf097525fea6c2bd0042ca6cc",
".git/objects/54/cadbfbc295041803e3734cbb70bc7d98d5067c": "000b71457b9e3d0f490781ad9423b53a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/e7fb4c00c608fda46e0532aad56e6374bf96a6": "8560b0ba4fc6ba09d06a1851a5b1794b",
".git/objects/57/02f88e6576ce89e4c35b0c1484525c3b1fdc7c": "b379122725eb59860f485a056f1bf2af",
".git/objects/57/7757d4d34e3e8cf51981b299423e6e2db0e6c4": "a37b47995b2189c51c81b9c3e66c3ce6",
".git/objects/57/bf920ac6218af1fabc3201748e06539ca4ce68": "81499ef3feb0d2409fac268a5c592591",
".git/objects/59/1b761d6fd4cf9366ace7ebf1233d5410515abb": "39b479b0de648539ae4519d3bfba8ab2",
".git/objects/5a/2a98c879f66471e5466463d524cf28ea9d5fff": "6acdf389f787cdfd89a5d1247e96bd7d",
".git/objects/5c/20eaddf3de4fd1a5953ac7f75c96f1863f0ba3": "ecfc6a684a2a3d68714853477b170bb1",
".git/objects/5f/28be466368000594dddf8c31b67a68bede1db6": "fdbaf302d7e932533152c7e90eb4ceed",
".git/objects/62/420070826eedaf66334d1cf369766d319143f8": "fdd7d86a3c85892ee52426115be56837",
".git/objects/67/4fb455875633467b8ed06a18e2753ad3644fce": "9b87dc7db4bd5fd2835985e969bc8d0a",
".git/objects/67/7e2874b464b8ad1a220b835ef6299cc9a11a3e": "a9619bce7547ca52b750e245f01c3383",
".git/objects/68/b5aad49454251d22e9553e8aa54da6e1b2196b": "3c25ab8de549f83fdd9dadc6dc8f0b62",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/37d6e6674ae1987afbb4a1ba006cfe417e2193": "9e8a54c30fa0c4fdaf9dc48d1bd49e1d",
".git/objects/6b/7faf69d118b13b2e2a209f8c0eb69fe24bcd43": "65d5b9fc5f723befce7f41a537f6785a",
".git/objects/6c/c10c3c4ea81cee9ddf63372ae0a4d136a03749": "15c549e84a0eaccfbdecc0f98f981a48",
".git/objects/6d/452b501f3a34530e3eddc87f7e6e4fcd3ff292": "2b363d54f159e6d197def90b156f59e6",
".git/objects/6e/d23760a8978fc90246f8b3da939cf1bd378d15": "40499fce337a7e31dd260f50d35f61a4",
".git/objects/6f/e22af2a4ee5997ebe96f8eb35c51e3aafd2b6a": "61b1d0ad069008dc132d387f751328b2",
".git/objects/72/1005380ccd6a57b63eb298f377d91c28166a3a": "0839210e68a50c3e05a0eef0e4051b5b",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/49f95434d5cb48f56b4a15d27f9aae40052a3f": "ed57a63d5a84ef2dc5afc74bc39eb601",
".git/objects/78/d5e3d1c5df6c950a575f945fe3db4d3c7094db": "10ab44ee99be5b6584fdbf83b60d0a9b",
".git/objects/79/1fa491f71da1d4338342d183353dabff4a66ca": "5fc37c131942b18552296e71850c608f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/ad2801a4c142951f937ed3afcaf934faa58ea2": "07a2b1b3d05d09cdd9f2eb79996d0761",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/f63a234a56eb8e460da2ba69c795fc52c13131": "8123e4c575c4b75610538a48b25069f4",
".git/objects/84/24139f9da6964e7f23073b161eff8e6250d6ae": "61586aa547f4ac5514d92edb1e5ccc2f",
".git/objects/85/6253920f806eff3e1bbe006545953492172db8": "27e7c7da9dfa48e6271cb1f62db58575",
".git/objects/85/bfdab6963b5a13aaa47be5f3eff19b28978d92": "907ae26b62f4beb16323dd7a30e48399",
".git/objects/87/9d3aa2e1031045ad79e351089ffe89b47310f2": "b45af5ee9e725fe52b087789a269826f",
".git/objects/87/a91afad977eca111d2fd86c1817e9af0b494d3": "5ccdca2dbfdf5abb490bed4a11a7d362",
".git/objects/88/105188239aaa244ef3dd929d4dd2c8885a25cc": "4d35d25b6cc71ed7418c933a63233018",
".git/objects/8a/30db033e911ef17b20e4f592e91d7e40d3eedd": "241f41207ecb70fe940495c331636812",
".git/objects/8b/79a8b308f98dc347129359597004df6df97f6b": "0f281425f67ffc52c1159676e338dc98",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/92/df67aa3e727613ac1e85558194cb1a050e6587": "4f6ca1c437f028af0e30d62e3d8c5c41",
".git/objects/93/7c37e75a341f65a54ff3508f1b88ed25355a7e": "83e2ea85d5d2c96bdc99ae9442d782a4",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/96/206c79b585064a58ab9a4df1b1a0e2392b11e7": "797e7cff54709e4f4c3144429aeb4ae8",
".git/objects/97/4d29333c46a9ce8252f84eb1b403d66697fe67": "12bed8806fb748399590a5a5e7468af4",
".git/objects/98/9ffab61e9e7f6e14422b6c4c49673468c0593d": "abd1503fb98d482754558aebc286a380",
".git/objects/9c/2f5300c43b060852fde60430049bfc0e63e74d": "f94294f35635aac214e0074141143fff",
".git/objects/9f/b6a951a326c3670c7afd94215b8490267e2483": "3036fdf3f3d069cf1e2591d1b5b752c0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/ed64d47664ae0ded6aea35e201465323281c02": "a86cbfb7edea7cdc279f48ddda32fad6",
".git/objects/a4/dad96cbf266d009177ab89569c32cb34e75540": "00a2b5eca7266d9b91dbf7a9500e85b6",
".git/objects/a6/7484464c55ce42468dda29b71aecc82c37fed4": "1656b0e21bdabeb71d83c49498a3e8a8",
".git/objects/a8/ae1aa9b508e666323c71883a820ce2236987b4": "ad68a22aa0ac4e53dea67328dfb06846",
".git/objects/ab/6b11479e81f5e0b835a019d04793cbbeef98e9": "4ea1a87edf3ca6bfb067c9280ade90b8",
".git/objects/b2/13c5ac3ec14420731f87ad50070c4f90b0c866": "89ccb25285ec4e1b7dfacd07088c8c46",
".git/objects/b2/b6da823c3abc334bda05da11ec02128f9e55e7": "b4fce9f8f2e7dbcd3c48449c8520d9ac",
".git/objects/b4/fe68a176cf92f0849e8795c8d9991a2136db91": "15c6b4cbdd3bf879f9af3dcacf849b52",
".git/objects/b7/e0cf6db6befbeff464654b442fe9ee0710175a": "73d13cecc377c21752c2ee2d65212f44",
".git/objects/b9/133b54ca0a7cc4801c8a692df421f1a91503fd": "044f181c26336e1d262ba357f10808aa",
".git/objects/b9/f3717f6f796de243dabf949ff915ec6cc5e5a1": "081d5f7a7eb8db3cbac75553576d599f",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c1/965c92ef1dcd0fb93e29e888c42a221f402db7": "a471424d6cf45a2cd0ce56039a71a6c4",
".git/objects/c4/88bc0f5afb436461748fdafd938d85f63a5289": "01cb8a1d3cbd6dc694b85e00c2748f12",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/cc/8214dbf040fa87c9544295af3adcd853422808": "a92fa71f2987b42d5e676062d8686e39",
".git/objects/ce/fd5ffebd5b551238ad0a138b9df66e7de45b80": "594716a391136d4a8f8f25d69c972179",
".git/objects/d0/5dd2dfa234720998565e821e8c1ae14afd70c1": "e4697e665a9b00664e30087089fbd8ca",
".git/objects/d0/fb2caf99926567306d1d702c1222bb28c1fcc5": "5c677f7aaac4b03eb15f0f7ec9a2f060",
".git/objects/d1/6b3e192c29ccd8a1484438874d9b643cd894c2": "a6f88b99343d24cbb478fe651e8f8496",
".git/objects/d3/d20055b9ad251d4d7a8c4606cb3ee266e69cc5": "f7b2a53300b1ef50316b558ffb66fd7e",
".git/objects/d6/1ac0474760fd5decfd844ab494ea3f7684c76d": "77fa97e616a21c60bf1148917fb50f10",
".git/objects/d6/5093134e153e1462fdc94bb6639a98b21cadc5": "a333f25f3099dce29cf06f489aa81ac9",
".git/objects/d9/1126d5834613da32f6dd91a681525c97055be9": "e26dbb66f2b2d4276dc318bf164524d9",
".git/objects/da/06f48d260531cd7ca0b548770c17fe506fa18c": "21c781572a4ced9914872c3e5e0a41ce",
".git/objects/da/c26acbe6fea6b51622bbc43189258b569b5665": "9dd40ebd3506155f1930a5bc549e2cd2",
".git/objects/db/a191aa00e25a7161fc2ba662682adca2abf343": "6c889a62576eede906fb2915f9fe186b",
".git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
".git/objects/dc/0f15915a0c2dd8663dc1985d073f9d29a073c5": "0fc1578262f19679656737b46ff77b67",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/e1/13e733867e49b50acd170d079de819536c8d36": "f52a53604b2d60c478ea911011a1041f",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/b5b0a102217241cdc49918a963ffc51c136a17": "9208b90c34f9c39c789e099087cdfe5c",
".git/objects/e9/90de81e19f269357e697039c52daf33c1895fe": "e5f1c85c437ef735998fc940370a8515",
".git/objects/ec/46d1c2e57a86af0c9d3c468c64b3d9ebc59707": "821777c1fa10c7d191ff6fb15125814c",
".git/objects/f2/7b944bf640296fbba574e01aeb1032fe3ef292": "3c6d0c9415ab2ab1f90ba8b7591c7b68",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/objects/f2/8f4f8e4ef0534f09c266bd8bd600a9f0d49478": "51c73887f332978235735d3c0db6894a",
".git/objects/f4/780f04a88eab87b8be24561c4a128811614b6a": "db263020254098b08cf6461c0c8f6b35",
".git/objects/f5/1bb26baf5692e4798ecd9ab4d78ac416c3c504": "45f23f1556b69ae48d18fbff95cc87cd",
".git/objects/f6/0e17ebae5104cdff4240ece6c4b8c32bdd38b3": "721944a08f782cda8b5ef3f8d0180c24",
".git/objects/fa/d9b3e3c9a74367e5108fa93809026a035667b9": "88313c133efb4775fade5404f8090672",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/129af425600f564f5263d34255abbfd74c591e": "23485f32f8c7b9700e0368f58a5252d3",
".git/objects/fd/5c8ba05886248807b64670a8739f73330f8b09": "514fc2f61e61e6e685d754db25703c4f",
".git/objects/ff/18201d08c0ae036a1b8758193823a8ea1f7829": "ab52fc49be8a646c8771d46353b983db",
".git/ORIG_HEAD": "81111c4eca4b084d6b3a7eaf0c92645d",
".git/refs/heads/main": "d94440d444d06007a0b1d523c5e23be5",
".git/refs/remotes/origin/main": "d94440d444d06007a0b1d523c5e23be5",
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
"assets/lib/env/env.g.dart": "3b30288c54cad71aa2f6d67a5b1b1c1a",
"assets/NOTICES": "b8ea1fe50e1c05c5f00bbab9a9d2ed40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "4829927a638b0c7ecbe10a5ab0b013bf",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-icon-144x144.png": "fb1fdf2ba1650fa183381485717437fc",
"icons/android-icon-192x192.png": "154dd4b3412c1ae845ae40c583f8d78d",
"icons/android-icon-36x36.png": "174cc0b13ade666b3602811472d1f4ef",
"icons/android-icon-48x48.png": "48f3a41c43e0c8d5dbe789dc939a15a9",
"icons/android-icon-72x72.png": "5e748dbc42e37c3fd7ac7a5964c26383",
"icons/android-icon-96x96.png": "4829927a638b0c7ecbe10a5ab0b013bf",
"icons/apple-icon-114x114.png": "674b1af6e3437ab7b6ad953ab80b7c5f",
"icons/apple-icon-120x120.png": "7d752e79570fde2536fa62fe15b252a9",
"icons/apple-icon-144x144.png": "fb1fdf2ba1650fa183381485717437fc",
"icons/apple-icon-152x152.png": "1e0a5f1f9fdd4f4391bdbdc3ad40e90a",
"icons/apple-icon-180x180.png": "ad32c30ddc783dc5ed156d29dfeb8629",
"icons/apple-icon-57x57.png": "23cbe80682849246cc292937a0958550",
"icons/apple-icon-60x60.png": "c8fc472e978cbbab54763199ba52d397",
"icons/apple-icon-72x72.png": "5e748dbc42e37c3fd7ac7a5964c26383",
"icons/apple-icon-76x76.png": "6344d620e1f1bc6111ba9254a4084abd",
"icons/apple-icon-precomposed.png": "3412dc1514ed027813798a29e0a68909",
"icons/apple-icon.png": "3412dc1514ed027813798a29e0a68909",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "92b26a4bd8aef8530c913eed1c249696",
"icons/favicon-32x32.png": "3b977e9712fb4de00d6269254126698f",
"icons/favicon-96x96.png": "4829927a638b0c7ecbe10a5ab0b013bf",
"icons/favicon.ico": "cdaa04110a2b371819ecffaf9c782540",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "fb1fdf2ba1650fa183381485717437fc",
"icons/ms-icon-150x150.png": "6ea17c9dd757ee45e50c39350d84c17b",
"icons/ms-icon-310x310.png": "c518c4d5b187e461a42cdd295cf15cc3",
"icons/ms-icon-70x70.png": "73c3b9f92a3dde122432f641683d78a5",
"index.html": "e610ba9a204f4afe68ab28b5e03e1157",
"/": "e610ba9a204f4afe68ab28b5e03e1157",
"LICENSE": "e62637ea8a114355b985fd86c9ffbd6e",
"main.dart.js": "e7902c1592f81b7ff3748dd6c434ffff",
"manifest.json": "2bfef5e596218fe8f9357de1231fbce5",
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
