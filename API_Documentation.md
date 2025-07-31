# API Documentation

本文档用于记录 lnlink-sdk 中各个方法的入参和返回值。

---

## 方法名称：`lnlinksdk.fee.getFeeRate`

### 描述
获取实时费率

### 入参 (Parameters)

### 返回值 (Return Value)
```json
{
    "fastestFee": 1,
    "halfHourFee": 1,
    "hourFee": 1,
    "economyFee": 1,
    "minimumFee": 1
}

```


---

## 方法名称：`lnlinksdk.litd.getInfo`

### 描述
获取litd的info,是一个综合方法

### 入参 (Parameters)

### 返回值 (Return Value)

```json
{
      "code": 0,
      "data": {
          "pubkey": "03f716ce8c97785ec3889f119f2ea7cd7a8b6dc8e0602745b72d2cb93aad96a13f",
          "name": "jim",
          "status": {
              "state": 4,
              "rgb_state": 4,
              "litd": "Running",
              "tor": "Running",
              "rgb": "Running",
              "is_wallet_initialized": true
          },
          "owner": "npub1q7amuklx0fjw76dtulzzhhjmff8du5lyngw377d89hhrmj49w48ssltn7y",
          "node_addr": "npub156cxm7tuxue7l2juhykpt4jhl3ya24p6aallw8w4z7e8nk6nc6jqpr85sj",
          "balance": {
              "account_balance": {
                  "imported": {
                      "confirmed_balance": "1000",
                      "unconfirmed_balance": "0"
                  },
                  "default": {
                      "confirmed_balance": "48898520",
                      "unconfirmed_balance": "0"
                  }
              },
              "total_balance": "48899520",
              "confirmed_balance": "48899520",
              "unconfirmed_balance": "0",
              "locked_balance": "0",
              "reserved_balance_anchor_chan": "10000"
          },
          "channel_list": {
              "open_channel_list": [
                  {
                      "channel_id": "20382746555777024",
                      "remote_pubkey": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                      "channel_point": "938f5a20846d9418cebd9727be10bb43ca650199cc96c850a6363dd6951d5922:0",
                      "capacity": "1000000",
                      "local_balance": "995530",
                      "remote_balance": "1000",
                      "active": true,
                      "local_chan_reserve_sat": "10000",
                      "remote_chan_reserve_sat": "10000",
                      "commit_fee": "2810",
                      "commitment_type": "ANCHORS",
                      "custom_channel_data": "",
                      "zero_conf": false,
                      "zero_conf_confirmed_scid": "0"
                  },
                  {
                      "channel_id": "20398139718565888",
                      "remote_pubkey": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                      "channel_point": "052324d74aee9d7878a1016159a7763f163644e4be1c4cc238e44b10b7d42d8c:0",
                      "capacity": "100000",
                      "local_balance": "96920",
                      "remote_balance": "0",
                      "active": true,
                      "local_chan_reserve_sat": "1000",
                      "remote_chan_reserve_sat": "1062",
                      "commit_fee": "2750",
                      "commitment_type": "SIMPLE_TAPROOT_OVERLAY",
                      "custom_channel_data": {
                          "assets": [
                              {
                                  "asset_utxo": {
                                      "version": 1,
                                      "asset_genesis": {
                                          "genesis_point": "fe5f7860a90a7e58f72ffb60ec6322247a8b15b92390ec87cc9696702945e384:0",
                                          "name": "USDT",
                                          "meta_hash": "009dc0aa29bd1c320fa9b33e15227169f23b77ab6ca845fabcdab2249b95568c",
                                          "asset_id": "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d"
                                      },
                                      "amount": 80000,
                                      "script_key": "0250aaeb166f4234650d84a2d8a130987aeaf6950206e0905401ee74ff3f8d18e6",
                                      "decimal_display": 2
                                  },
                                  "capacity": 80000,
                                  "local_balance": 80000,
                                  "remote_balance": 0
                              }
                          ]
                      },
                      "zero_conf": false,
                      "zero_conf_confirmed_scid": "0"
                  }
              ],
              "pending_channel_list": {
                  "pending_open_channels": [],
                  "pending_closing_channels": [],
                  "waiting_close_channels": [],
                  "pending_force_closing_channels": []
              },
              "closed_channel_list": []
          },
          "version": "3.0.2",
          "peers": [
              {
                  "pub_key": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                  "alias": "Lnfi",
                  "address": "34.84.66.29:9735"
              }
          ],
          "is_app_run": false,
          "network": "regtest",
          "taproot_assets_enabled": true,
          "taproot_asset_list": [
              {
                  "id": "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                  "asset_name": "USDT",
                  "decimal": 2,
                  "balance": "20000",
                  "balance_details": {
                      "available": "20000",
                      "channel": "80000",
                      "pending": "0",
                      "total": "100000"
                  }
              },
              {
                  "id": "14d56417be7df24578d21c1f29b4b2fe3933bb3ffaae97e5e43c2e5f4c2b28be",
                  "asset_name": "CC02",
                  "decimal": 5,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "3ff52a336723edf22d9661474acde575a230951a96e347aec73ed41caec5f0de",
                  "asset_name": "DAPP",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "aa0044aa2c3c18f4faa27e9e04d093ff818053ec3122a61acb4f82c3d1030d83",
                  "asset_name": "DNF",
                  "decimal": 3,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "9d7020f2a17b0e94c5299ce28563df80db72e28f3a27021d5322156e9d479adb",
                  "asset_name": "Doge",
                  "decimal": 4,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "ced8f334e2d7c2015f78f3826926589e114ef4ad8c38d2bcc0d385331c271d3d",
                  "asset_name": "Doge111",
                  "decimal": 4,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "45fbd9f7558294800acb68e18439865305eeeb60b8fd12180423f1bbeac8c7f8",
                  "asset_name": "HP",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "c16dc3d1a98399da5e22f7776289bee1119e110bb45d112c1a32397169db312f",
                  "asset_name": "KKK11",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "7f383b61fefb2a8a384cf84efe4cf8892568b855d110de3416a693c741e90f64",
                  "asset_name": "QQ1",
                  "decimal": 3,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "3d88827fedb31c889be614a57fa85f15291a14412d7c54f7f70d117cd0e7e7cb",
                  "asset_name": "QQ3",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "e0b5005cd69d331d438dadf2feeb780ae994e0367733e94068286d9287695ab0",
                  "asset_name": "T01",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "e0bca3a6f672607587cabca8b8391327ee5df7586089cdbcff9eece408bf64b2",
                  "asset_name": "TARO",
                  "decimal": 3,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "53f47104d358fa573296fb5e5e961bdbec12a5c070118ecf42389c5e2b5c9128",
                  "asset_name": "TBD",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "b97dae4bc75b8f1d2191bd397a707bc69cc8fa628d49077a015b57b3f9c850e4",
                  "asset_name": "TEST12",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "e83b118d23d8684126ae4c6f658de14090568631377a2c80ab9404bfc2e8c29b",
                  "asset_name": "TREE",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "fb6f8ce309bfe7e8fdda374074f9a644c9f261c4f219436d1bc6a7765201bd50",
                  "asset_name": "TTL",
                  "decimal": 3,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "6f01833a7318bd5b88d8f752d279b8023ea53968ec19216e5e7c3f70410726c8",
                  "asset_name": "VN",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "0151712cc4cb13780c3327a660efac840d51d87dbf56ae46d474f0c8526cc245",
                  "asset_name": "WWWW",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              },
              {
                  "id": "47fa2c110ec05f7b143a4875c1cbc0d636edd45e818776818027087818a65b03",
                  "asset_name": "YK",
                  "decimal": 2,
                  "balance": "0",
                  "balance_details": {
                      "available": "0",
                      "channel": "0",
                      "pending": "0",
                      "total": "0"
                  }
              }
          ],
          "read_only_account_sk": "c87296f88f65ce37568358f97a679e7c99e9003bcb055fa6a833ad6dd8a8d99f"
      },
      "msg": "success"
  }
```

---

## 方法名称: `lnlinksdk.litd.getState`
### 描述
获取litd的state

### 返回值
```json
{
    "code": 0,
    "data": {
        "state": 4,// 0(节点已存在但是未初始化),1(locked),2(unlocking),3(rpc_active),4(Runing)
        "litd": "Running",//节点状态,"Stopped || Running"
        "tor": "Running"// tor服务状态,"Stopped || Running"
    },
    "msg": "success"
}
```


## 方法名称：`lnlinksdk.litd.startLitd`

### 描述
启动litd服务。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.startLitd 的返回值结构 ...
{
    "code": 0,
    "data": {
        "linkStatus": [
            {
                "service_name": "litd",
                "status": "Running"
            },
            {
                "service_name": "tor",
                "status": "Stopped"
            }
        ],
        "nodeInfo": {
            "name": "link",
            "status": {
                "state": 0,
                "rgb_state": 0,
                "litd": "Running",
                "tor": "Stopped",
                "rgb": "Running"
            },
            "owner": "npub1q7amuklx0fjw76dtulzzhhjmff8du5lyngw377d89hhrmj49w48ssltn7y",
            "node_addr": "npub1hn4wdtlz8q3jzju047c0u9gjrhecfgdgp8fh2xxgnf3qzfe9sp9sgyzq2j",
            "version": "3.0.2",
            "is_app_run": false,
            "network": "regtest",
            "taproot_assets_enabled": false,
            "taproot_asset_list": [],
            "read_only_account_sk": "c87296f88f65ce37568358f97a679e7c99e9003bcb055fa6a833ad6dd8a8d99f"
        }
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.stopLitd`

### 描述
停止litd服务。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.stopLitd 的返回值结构 ...
{
    "code": 0,
    "data": true,
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.restartLitd`

### 描述
重启litd服务。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.restartLitd 的返回值结构 ...
{}
```

---

## 方法名称：`lnlinksdk.litd.unlockWallet`

### 描述
解锁钱包。

### 入参 (Parameters)

- `options` (类型: `object`): 解锁钱包的选项。
  - `password` (类型: `string`): 钱包密码。

### 返回值 (Return Value)

```json
{
    "code": 0,
    "data": {
        "msg": "Unlock success."
    },
    "msg": "success"
}
```



## 方法名称：`lnlinksdk.litd.genseed`

### 描述
生成新的钱包种子。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.genseed 的返回值结构 ...
{
    "code": 0,
    "data": {
        "cipherSeedMnemonic": [
            "abandon",
            "above",
            "stumble",
            "there",
            "denial",
            "clutch",
            "dove",
            "sport",
            "still",
            "top",
            "river",
            "hole",
            "prison",
            "file",
            "kick",
            "correct",
            "toss",
            "mirror",
            "start",
            "stairs",
            "metal",
            "easily",
            "pretty",
            "flash"
        ]
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.initWallet`

### 描述
初始化litd钱包。

### 入参 (Parameters)

- `options` (类型: `object`): 钱包初始化选项。
  - `password` (类型: `string`): 钱包密码。 举例:'12345678'
  - `seed` (类型: `array<string>`): 钱包助记词（24个单词的数组）,依赖于genseed方法的返回值.

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.initWallet 的返回值结构 ...
{
    "code": 0,
    "data": {
        "message": "Init wallet success.",
        "cipherSeedMnemonic": [
            "abandon",
            "above",
            "stumble",
            "there",
            "denial",
            "clutch",
            "dove",
            "sport",
            "still",
            "top",
            "river",
            "hole",
            "prison",
            "file",
            "kick",
            "correct",
            "toss",
            "mirror",
            "start",
            "stairs",
            "metal",
            "easily",
            "pretty",
            "flash"
        ],
        "nodeInfo": {
            "name": "link",
            "status": {
                "state": 2,
                "rgb_state": 0,
                "litd": "Running",
                "tor": "Stopped",
                "rgb": "Running",
                "is_wallet_initialized": true
            },
            "owner": "npub1q7amuklx0fjw76dtulzzhhjmff8du5lyngw377d89hhrmj49w48ssltn7y",
            "node_addr": "npub1hn4wdtlz8q3jzju047c0u9gjrhecfgdgp8fh2xxgnf3qzfe9sp9sgyzq2j",
            "version": "3.0.2",
            "is_app_run": false,
            "network": "regtest",
            "taproot_assets_enabled": false,
            "taproot_asset_list": [],
            "read_only_account_sk": "c87296f88f65ce37568358f97a679e7c99e9003bcb055fa6a833ad6dd8a8d99f"
        }
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.walletBalance`

### 描述
获取litd钱包余额。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.walletBalance 的返回值结构 ...
{
    "code": 0,
    "data": {
        "account_balance": {
            "default": {
                "confirmed_balance": "0",
                "unconfirmed_balance": "0"
            }
        },
        "total_balance": "0",
        "confirmed_balance": "0",
        "unconfirmed_balance": "0",
        "locked_balance": "0",
        "reserved_balance_anchor_chan": "0"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.newAddress`

### 描述
生成新的钱包地址。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.newAddress 的返回值结构 ...
{
    "code": 0,
    "data": {
        "address": "bcrt1pf5jwms2xea4gqjcuw4frlw3x270jlnrpg0ae5k8saynpaj3ltpqqht4phf"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.openChannel`

### 描述
打开一个新的闪电通道。

### 入参 (Parameters)

- `options` (类型: `object`): 打开通道的选项。
  - `host` (类型: `string`): 目标节点的IP地址和端口，例如 `"regtest.lnfi.network:9735"`。调用getInfo可以获取到alias为lnfi的peer,如果没有则提示没有peer
  - `node_pubkey` (类型: `string`): 目标节点的公钥。
  - `amount` (类型: `number`): 通道容量（以satoshi为单位）。
  - `push_amount` (类型: `number`, 可选): 推送到对端的初始金额（以satoshi为单位）。默认为 `0`。
  - `sat_per_vbyte` (类型: `number`, 可选): 每vbyte的费用（以satoshi为单位）。依赖于getFeeRate的结果.上浮1.2倍.

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.openChannel 的返回值结构 ...
{
    "code": 0,
    "data": {
        "output_index": 0,
        "funding_txid_bytes": "50716e1792681aa5fefd5a403fd027382fb2cfd88d0e6ac6a73d20e71e159ed3",
        "funding_txid": "funding_txid_bytes",
        "isConnected": true
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.listChannels`

### 描述
列出所有闪电通道。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.listChannels 的返回值结构 ...
{
    "code": 0,
    "data": {
        "open_channel_list": [
            {
                "channel_id": "22481714253266944",
                "remote_pubkey": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                "channel_point": "ea081d59b8d024f20d381b080bec1ccd76a1605cd2bb3ef7cdfd8a9e3fbc0c49:0",
                "capacity": "1000000",
                "local_balance": "995530",
                "remote_balance": "1000",
                "active": true,
                "local_chan_reserve_sat": "10000",
                "remote_chan_reserve_sat": "10000",
                "commit_fee": "2810",
                "commitment_type": "ANCHORS",
                "custom_channel_data": "",
                "zero_conf": false,
                "zero_conf_confirmed_scid": "0"
            },
            {
                "channel_id": "22498206927618048",
                "remote_pubkey": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                "channel_point": "a946917c9836f151c9183119d1c26a6e77361d4b89aede6e4c63f42ddf851c7b:0",
                "capacity": "100000",
                "local_balance": "96920",
                "remote_balance": "0",
                "active": true,
                "local_chan_reserve_sat": "1000",
                "remote_chan_reserve_sat": "1062",
                "commit_fee": "2750",
                "commitment_type": "SIMPLE_TAPROOT_OVERLAY",
                "custom_channel_data": {
                    "assets": [
                        {
                            "asset_utxo": {
                                "version": 1,
                                "asset_genesis": {
                                    "genesis_point": "fe5f7860a90a7e58f72ffb60ec6322247a8b15b92390ec87cc9696702945e384:0",
                                    "name": "USDT",
                                    "meta_hash": "009dc0aa29bd1c320fa9b33e15227169f23b77ab6ca845fabcdab2249b95568c",
                                    "asset_id": "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d"
                                },
                                "amount": 80000,
                                "script_key": "0250aaeb166f4234650d84a2d8a130987aeaf6950206e0905401ee74ff3f8d18e6",
                                "decimal_display": 2
                            },
                            "capacity": 80000,
                            "local_balance": 80000,
                            "remote_balance": 0
                        }
                    ]
                },
                "zero_conf": false,
                "zero_conf_confirmed_scid": "0"
            }
        ],
        "pending_channel_list": {
            "pending_open_channels": [],
            "pending_closing_channels": [],
            "waiting_close_channels": [],
            "pending_force_closing_channels": []
        },
        "closed_channel_list": [
            {
                "channelId": "22452027439251456",
                "closeTx": "00b58e3f6bade489356897c575228a9f292e16decbb06afe35ffd381a6bfa504",
                "remotePubkey": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                "channelPoint": "50716e1792681aa5fefd5a403fd027382fb2cfd88d0e6ac6a73d20e71e159ed3:0",
                "capacity": "1000000",
                "close_type": "COOPERATIVE_CLOSE",
                "settledBalance": "992500",
                "open_initiator": "INITIATOR_LOCAL",
                "close_initiator": "INITIATOR_LOCAL"
            },
            {
                "channelId": "22467420602105856",
                "closeTx": "a8c8255c47660548e1c29510ad490c0e0930cf29ed5b1da0b8cd4296d942adf6",
                "remotePubkey": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                "channelPoint": "28c0fe4fb81e4323eba900ebf4bf52125c9147128794c68899cdce6cafde75ef:0",
                "capacity": "1000000",
                "close_type": "COOPERATIVE_CLOSE",
                "settledBalance": "992500",
                "open_initiator": "INITIATOR_LOCAL",
                "close_initiator": "INITIATOR_LOCAL"
            }
        ]
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.closeChannel`

### 描述
关闭一个闪电通道。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.closeChannel 的返回值结构 ...
{
    "code": 0,
    "data": {
        "close_instant": {},
        "update": "close_instant"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.connectPeer`

### 描述
连接到闪电网络对等节点。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.connectPeer 的返回值结构 ...
{
    "code": 0,
    "data": {
        "isConnected": true
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.addInvoice`

### 描述
创建一个新的闪电发票。

### 入参 (Parameters)

- `options` (类型: `object`): 创建发票的选项。
  - `amt` (类型: `number`): 发票金额（以satoshi为单位）。
  - `memo` (类型: `string`, 可选): 发票备注。

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.addInvoice 的返回值结构 ...
{
    "code": 0,
    "data": {
        "r_hash": "e4cf2777cb4676a49876d222261fd55a1f7c730cc59885fa659488cadd6a8263",
        "payment_request": "lnbcrt10u1p58mcd8pp5un8jwa7tgem2fxrk6g3zv874tg0hcucvckvgt7n9jjyv4ht2sf3sdq8w3jhxaqcqzzsxqyz5vqsp5k86hqlm2y5gsfctz3h5t0zvagcm0sy9427753wh7wvujm3nc4pps9qxpqysgqwd50dwgx69zv3vrx90rrwxhvvhyglta7y8vajvkuh49adnyzchfrrt2urg5wjmaele0jx9p5n54de5t8k5u7re0gjp32t4jyk0mcr5qqzu2hsh",
        "add_index": "1",
        "payment_addr": "b1f5707f6a251104e1628de8b7899d4636f810b557bd48bafe73392dc678a843"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.payInvoice`

### 描述
支付一个闪电发票。

### 入参 (Parameters)

- `options` (类型: `object`): 支付发票的选项。
  - `payment_request` (类型: `string`): 闪电支付请求字符串。

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.payInvoice 的返回值结构 ...
{
    "code": 0,
    "data": {
        "payment_error": "",
        "payment_preimage": "36ee2e7ce3606be2dfa198f5a3f8695fdf65de67c6df076be0b3b90cfeb00d98",
        "payment_route": {
            "hops": [
                {
                    "custom_records": {},
                    "chan_id": "22481714253266944",
                    "chan_capacity": "1000000",
                    "amt_to_forward": "1000",
                    "fee": "0",
                    "expiry": 20536,
                    "amt_to_forward_msat": "1000000",
                    "fee_msat": "0",
                    "pub_key": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                    "tlv_payload": true,
                    "mpp_record": {
                        "total_amt_msat": "1000000",
                        "payment_addr": "8131703e9aa0796d841942dbbc1b79d5ae25ce4856fe3c2d0a470c4eb2ffdc1d"
                    },
                    "amp_record": null,
                    "metadata": "",
                    "blinding_point": "",
                    "encrypted_data": "",
                    "total_amt_msat": "0"
                }
            ],
            "total_time_lock": 20536,
            "total_fees": "0",
            "total_amt": "1000",
            "total_fees_msat": "0",
            "total_amt_msat": "1000000",
            "first_hop_amount_msat": "1000000",
            "custom_channel_data": ""
        },
        "payment_hash": "61f4957ca2486cf7af4c45529b14403398fff1d35382df4a4101e64c464889c3"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.newTapdAddr`

### 描述
生成新的 Taproot Assets 地址。

### 入参 (Parameters)

- `options` (类型: `object`): 生成 Taproot Assets 地址的选项。
  - `asset_id` (类型: `string`): 资产的ID。从getInfo中获取所有的assets
  - `amt` (类型: `number`): 资产的数量。比如用户输入12,则要根据getInfo中的assets的decimal转换为12*10**decimal

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.newTapdAddr 的返回值结构 ...
{
    "code": 0,
    "data": {
        "encoded": "taprt1qqqszqspqqzzpaavn8evq683z478suqj75xtqs6rw5zuxzwxmp59uy6umpypk85aq5ssxwz9ltzhu3xfyll7uysw85pfwsv8u8ltfty0qgvgx9q8sw7eaf9xqcssy4hgvrljgwtszepdhdgdpzh72w3u8y2wxndpzltrdz8mtrwlrncnpqss9c55xfzhfnseq04mr0644kffwfenv723kyz7waztx27gr65q045ppgzluqqps6sqctmgv9eksmtpd9kr5te0d4skjmrzdauzuar9wfkkjmnpdshxc6t8dp6xu6twvuh8gmmyv9un5dp5xvkr8024",
        "asset_id": "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
        "asset_type": "NORMAL",
        "amount": "100000",
        "group_key": "033845fac57e44c927ffee120e3d02974187e1feb4ac8f021883140783bd9ea4a6",
        "script_key": "0256e860ff2439701642dbb50d08afe53a3c3914e34da117d63688fb58ddf1cf13",
        "internal_key": "02e294324574ce1903ebb1bf55ad9297273367951b105e7744b32bc81ea807d681",
        "tapscript_sibling": "",
        "taproot_output_key": "f7928a898c3d1873de3a52931105a10011635f12ee288b2a9bdf710c19dc63af",
        "proof_courier_addr": "hashmail://mailbox.terminal.lightning.today:443",
        "asset_version": "ASSET_VERSION_V0",
        "address_version": "ADDR_VERSION_V1"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.sendTapdAssets`

### 描述
发送 Taproot Assets。

### 入参 (Parameters)

- `options` (类型: `object`): 发送 Taproot Assets 的选项。
  - `tap_addrs` (类型: `array`): Taproot Assets 地址数组。

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.sendTapdAssets 的返回值结构 ...
{
    "code": 0,
    "data": {
        "transfer": {
            "inputs": [
                {
                    "anchor_point": "bf87b8b79bfb982ebc550fe6bf64f0d2c90f92edaf13cf43a947900df0a47354:1",
                    "asset_id": "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                    "script_key": "0256e860ff2439701642dbb50d08afe53a3c3914e34da117d63688fb58ddf1cf13",
                    "amount": "100000"
                }
            ],
            "outputs": [
                {
                    "anchor": {
                        "outpoint": "74c9d301c2071333e1191ee5d2e7a3703084611a40bdafdc97d378dcfb11db6a:0",
                        "value": "1000",
                        "internal_key": "0391e7a8bd0c8e2acc2e769db49e10fb83a359766fac6b4b41fef852e7c687fa06",
                        "taproot_asset_root": "f5da1746720032a0ef97bda986a2198646c96e315203d3e06417c9be51be9178",
                        "merkle_root": "f5da1746720032a0ef97bda986a2198646c96e315203d3e06417c9be51be9178",
                        "tapscript_sibling": "",
                        "num_passive_assets": 0
                    },
                    "script_key": "023bc62db7c85c1c1c959820d03e892003133eb1182df76763a4f2a6df41643699",
                    "script_key_is_local": true,
                    "amount": "99000",
                    "new_proof_blob": "5441505000040000000002245473a4f00d9047a943cf13afed920fc9d2f064bfe60f55bc2e98fb9bb7b887bf000000010450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000096e88000000000000000006fd0163020000000001025473a4f00d9047a943cf13afed920fc9d2f064bfe60f55bc2e98fb9bb7b887bf010000000000000000fded04f18799d22d4b14948a9a5758cf5753886d3a829214be291b49098f4c5601000000000000000003e8030000000000002251203e6ab1acde64949935ece9e8f1d1194ec57b1c5b714d1553c376f23a8f93372be8030000000000002251207f48a8d94bf93fe07b14beb7b5ca049c31e113c2009e522be99f7ce18219969563abf5050000000022512069543d564cd7b6b5b82e0ee3c4ad0278fc0b5527bb509b61f42f1f9992308853014005a4b5301e1ad43ce6dc6a5113e77710dd42770cac5a70ce61c4ebb3013808f0eec790feb8bf726cc02471415596bac172d2600fed33159a168045853675f0980140e9ac3723a6e9d3eecfd09df1343d428fcf17e505a38cc3cf6aea236931d6a79e95e3d7e2349cb900c6d24ef0f0f5a60bc5d87df758947726c1c9857217bcb586000000000801000afd0180000100024e84e34529709696cc87ec9023b9158b7a242263ec60fb2ff7587e0aa960785ffe000000000455534454009dc0aa29bd1c320fa9b33e15227169f23b77ab6ca845fabcdab2249b95568c00000000000401000605fe000182b80bad01ab01655473a4f00d9047a943cf13afed920fc9d2f064bfe60f55bc2e98fb9bb7b887bf00000001f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d0256e860ff2439701642dbb50d08afe53a3c3914e34da117d63688fb58ddf1cf13034201400bde5d0e9d805937e57c76bb56ffa20bad999de79243762a59b0c4a146bcbef73af8c2d0d82678949c8e8ad23f3d2385edaf7b5ec6b327df847868609381adfc0d28b39e03fd4ea4df0bd9c972d581856aa261e55b51357fbfa6ab49c8078eddaaea00000000000186a00e0200001021023bc62db7c85c1c1c959820d03e892003133eb1182df76763a4f2a6df416436991121033845fac57e44c927ffee120e3d02974187e1feb4ac8f021883140783bd9ea4a60c9f00040000000002210391e7a8bd0c8e2acc2e769db49e10fb83a359766fac6b4b41fef852e7c687fa060374014900010002204f3a1960053f25b6d30cb0e028595d97de27bf6bf54211bc9ef3c46bef0ed13904220000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff022700010202220000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0df802c7000400000001022102315a6f5dcf35e07dd982afdb2139d5dc21948ef00b27612404b63954d209cb0e039c017100010002204f3a1960053f25b6d30cb0e028595d97de27bf6bf54211bc9ef3c46bef0ed139044a0001cd438b95eae8b7cd05f8376593460dda4b177b47123212787cdcd3f3ef8e82ef00000000000003e8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f022700010202220000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2e000400000002022102c69a03d5c51d3f3f860fff10ff3ce3bc389976a9bb894960e0e7e8a108ce281e0503040101160400000000",
                    "split_commit_root_hash": "b39e03fd4ea4df0bd9c972d581856aa261e55b51357fbfa6ab49c8078eddaaea",
                    "output_type": "OUTPUT_TYPE_SPLIT_ROOT",
                    "asset_version": "ASSET_VERSION_V0",
                    "lock_time": "0",
                    "relative_lock_time": "0",
                    "proof_delivery_status": "PROOF_DELIVERY_STATUS_NOT_APPLICABLE"
                },
                {
                    "anchor": {
                        "outpoint": "74c9d301c2071333e1191ee5d2e7a3703084611a40bdafdc97d378dcfb11db6a:1",
                        "value": "1000",
                        "internal_key": "02315a6f5dcf35e07dd982afdb2139d5dc21948ef00b27612404b63954d209cb0e",
                        "taproot_asset_root": "df58b40bfcc8a3f8958a6697df46c22ce5f71e6fc95da3ab66810a0020e317b9",
                        "merkle_root": "df58b40bfcc8a3f8958a6697df46c22ce5f71e6fc95da3ab66810a0020e317b9",
                        "tapscript_sibling": "",
                        "num_passive_assets": 0
                    },
                    "script_key": "0248dee1a228103793faa4d48531c1c05d877e73f0285489a855fa32f98dd49513",
                    "script_key_is_local": false,
                    "amount": "1000",
                    "new_proof_blob": "5441505000040000000002245473a4f00d9047a943cf13afed920fc9d2f064bfe60f55bc2e98fb9bb7b887bf000000010450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000096e88000000000000000006fd0163020000000001025473a4f00d9047a943cf13afed920fc9d2f064bfe60f55bc2e98fb9bb7b887bf010000000000000000fded04f18799d22d4b14948a9a5758cf5753886d3a829214be291b49098f4c5601000000000000000003e8030000000000002251203e6ab1acde64949935ece9e8f1d1194ec57b1c5b714d1553c376f23a8f93372be8030000000000002251207f48a8d94bf93fe07b14beb7b5ca049c31e113c2009e522be99f7ce18219969563abf5050000000022512069543d564cd7b6b5b82e0ee3c4ad0278fc0b5527bb509b61f42f1f9992308853014005a4b5301e1ad43ce6dc6a5113e77710dd42770cac5a70ce61c4ebb3013808f0eec790feb8bf726cc02471415596bac172d2600fed33159a168045853675f0980140e9ac3723a6e9d3eecfd09df1343d428fcf17e505a38cc3cf6aea236931d6a79e95e3d7e2349cb900c6d24ef0f0f5a60bc5d87df758947726c1c9857217bcb586000000000801000afd02e6000100024e84e34529709696cc87ec9023b9158b7a242263ec60fb2ff7587e0aa960785ffe000000000455534454009dc0aa29bd1c320fa9b33e15227169f23b77ab6ca845fabcdab2249b95568c00000000000401000603fd03e80bfd023d01fd02390165000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005fd01ce4a0001a82881c006061e13ab1f0f0d0028fea8234c9586d43f3b2335066ec71763137b00000000000182b8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffd0180000100024e84e34529709696cc87ec9023b9158b7a242263ec60fb2ff7587e0aa960785ffe000000000455534454009dc0aa29bd1c320fa9b33e15227169f23b77ab6ca845fabcdab2249b95568c00000000000401000605fe000182b80bad01ab01655473a4f00d9047a943cf13afed920fc9d2f064bfe60f55bc2e98fb9bb7b887bf00000001f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d0256e860ff2439701642dbb50d08afe53a3c3914e34da117d63688fb58ddf1cf13034201400bde5d0e9d805937e57c76bb56ffa20bad999de79243762a59b0c4a146bcbef73af8c2d0d82678949c8e8ad23f3d2385edaf7b5ec6b327df847868609381adfc0d28b39e03fd4ea4df0bd9c972d581856aa261e55b51357fbfa6ab49c8078eddaaea00000000000186a00e0200001021023bc62db7c85c1c1c959820d03e892003133eb1182df76763a4f2a6df416436991121033845fac57e44c927ffee120e3d02974187e1feb4ac8f021883140783bd9ea4a60e02000010210248dee1a228103793faa4d48531c1c05d877e73f0285489a855fa32f98dd495131121033845fac57e44c927ffee120e3d02974187e1feb4ac8f021883140783bd9ea4a60c9f000400000001022102315a6f5dcf35e07dd982afdb2139d5dc21948ef00b27612404b63954d209cb0e0374014900010002204f3a1960053f25b6d30cb0e028595d97de27bf6bf54211bc9ef3c46bef0ed13904220000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff022700010202220000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0df802c700040000000002210391e7a8bd0c8e2acc2e769db49e10fb83a359766fac6b4b41fef852e7c687fa06039c017100010002204f3a1960053f25b6d30cb0e028595d97de27bf6bf54211bc9ef3c46bef0ed139044a00017acb220f876c30e26c673bc9f64070d7b58b6fab5c42a9057d48ff8f3b9eca3a00000000000182b8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f022700010202220000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2e000400000002022102c69a03d5c51d3f3f860fff10ff3ce3bc389976a9bb894960e0e7e8a108ce281e05030401010f9f00040000000002210391e7a8bd0c8e2acc2e769db49e10fb83a359766fac6b4b41fef852e7c687fa060374014900010002204f3a1960053f25b6d30cb0e028595d97de27bf6bf54211bc9ef3c46bef0ed13904220000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff022700010202220000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff160400000000",
                    "split_commit_root_hash": "",
                    "output_type": "OUTPUT_TYPE_SIMPLE",
                    "asset_version": "ASSET_VERSION_V0",
                    "lock_time": "0",
                    "relative_lock_time": "0",
                    "proof_delivery_status": "PROOF_DELIVERY_STATUS_PENDING"
                }
            ],
            "transfer_timestamp": "1753081059",
            "anchor_tx_hash": "6adb11fbdc78d397dcafbd401a61843070a3e7d2e51e19e1331307c201d3c974",
            "anchor_tx_height_hint": 20460,
            "anchor_tx_chain_fees": "12725",
            "anchor_tx_block_hash": null
        }
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.createTapdChannel`

### 描述
创建一个新的 Taproot Assets 通道。

### 入参 (Parameters)

- `options` (类型: `object`): 创建 Taproot Assets 通道的选项。
  - `asset_amount` (类型: `number`): 资产数量。
  - `asset_id` (类型: `string`): 资产的ID。
  - `node_pubkey` (类型: `string`): 目标节点的公钥。
  - `fee_rate_sat_per_vbyte` (类型: `number`): 每vbyte的费用（以satoshi为单位）。

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.createTapdChannel 的返回值结构 ...
{
    "code": 0,
    "data": {
        "txid": "a946917c9836f151c9183119d1c26a6e77361d4b89aede6e4c63f42ddf851c7b",
        "output_index": 0
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.addTapdInvoice`

### 描述
创建一个新的 Taproot Assets 发票。

### 入参 (Parameters)

- `options` (类型: `object`): 创建 Taproot Assets 发票的选项。
  - `asset_id` (类型: `string`): 资产的ID。
  - `asset_amount` (类型: `number`): 资产的数量(最小单位,用户输入12,则根据getInfo中assets的decimal进行转化)。

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.addTapdInvoice 的返回值结构 ...
{
    "code": 0,
    "data": {
        "accepted_buy_quote": {
            "peer": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
            "id": "29d6346fe364c616684a7a3f70f5e65833ecf8c7801d327ff779c8e7fb36e9d2",
            "scid": "17832505098227870162",
            "asset_max_amount": "1000",
            "ask_asset_rate": {
                "coefficient": "10000000000000",
                "scale": 6
            },
            "expiry": "1753081763725",
            "min_transportable_units": "35"
        },
        "invoice_result": {
            "r_hash": "1d7d12a04a6a1f1b5a6a3ce890e93450847da6422a3b97c29e4e22b8161507d5",
            "payment_request": "lnbcrt100u1p58menhpp5r4739gz2dg03kkn28n5fp6f52zz8mfjz9gae0s57fc3ts9s4ql2sdqqcqzzsxqzfvrzjqf7j7xl8rhpycc932pcy382w7f6d664vydks93nuwmtfxh00hft2dameernlkdhf6gqqqqlgqqqqqqgq2qsp5xq8y585c088kdach99yvuuy76nxyfch35eshdy547an5pmvqs86q9qxpqysgq26ye2u73h8r0qpemhevnwcrzj0yu5a2lx9yx7fxglv6k6sslpau95dpqte0386uae4y3jukgaz5vpx9qvs9y7j47pzxm2vfmc3dk54sq2juj90",
            "add_index": "2",
            "payment_addr": "300e4a1e9879cf66f7172948ce709ed4cc44e2f1a661769295f76740ed8081f4"
        }
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.litd.decodeAssetPayReq`

### 描述
解码 Taproot Assets 支付请求。

### 入参 (Parameters)

- `options` (类型: `object`): 解码 Taproot Assets 支付请求的选项。
  - `payment_request` (类型: `string`): Taproot Assets 支付请求字符串。
  - `asset_id` (类型: `string`): 资产的ID。

### 返回值 (Return Value)

```json
// ... 在这里填写 litd.decodeAssetPayReq 的返回值结构 ...
{
    "code": 0,
    "data": {
        "asset_amount": "1000",
        "decimal_display": {
            "decimal_display": 2
        },
        "asset_group": {
            "raw_group_key": "02e657e387215cbdfc2b93c0fad99457c37f84b1afcf05ee03cc33fe259d34f2ca",
            "tweaked_group_key": "033845fac57e44c927ffee120e3d02974187e1feb4ac8f021883140783bd9ea4a6",
            "asset_witness": "014033578d35c172bb6c51b10b489002651df31eee7006cddf50c4f8baf418fdf2a9a4f23b3e78cbc32d83357692fd1ed8de1bcea618f81d336716433737e88c59a0",
            "tapscript_root": ""
        },
        "genesis_info": {
            "genesis_point": "fe5f7860a90a7e58f72ffb60ec6322247a8b15b92390ec87cc9696702945e384:0",
            "name": "USDT",
            "meta_hash": "009dc0aa29bd1c320fa9b33e15227169f23b77ab6ca845fabcdab2249b95568c",
            "asset_id": "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
            "asset_type": "NORMAL",
            "output_index": 0
        },
        "pay_req": {
            "route_hints": [
                {
                    "hop_hints": [
                        {
                            "node_id": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                            "chan_id": "17832505098227870162",
                            "fee_base_msat": 1000,
                            "fee_proportional_millionths": 1,
                            "cltv_expiry_delta": 80
                        }
                    ]
                }
            ],
            "blinded_paths": [],
            "features": {
                "8": {
                    "name": "tlv-onion",
                    "is_required": true,
                    "is_known": true
                },
                "14": {
                    "name": "payment-addr",
                    "is_required": true,
                    "is_known": true
                },
                "17": {
                    "name": "multi-path-payments",
                    "is_required": false,
                    "is_known": true
                },
                "25": {
                    "name": "route-blinding",
                    "is_required": false,
                    "is_known": true
                }
            },
            "destination": "0367759dc2d4104f67d468d59e2cb696438e79286f17616fe74860b5b3d6872c22",
            "payment_hash": "1d7d12a04a6a1f1b5a6a3ce890e93450847da6422a3b97c29e4e22b8161507d5",
            "num_satoshis": "10000",
            "timestamp": "1753081463",
            "expiry": "300",
            "description": "",
            "description_hash": "",
            "fallback_addr": "",
            "cltv_expiry": "80",
            "payment_addr": "300e4a1e9879cf66f7172948ce709ed4cc44e2f1a661769295f76740ed8081f4",
            "num_msat": "10000000"
        }
    },
    "msg": "success"
}
``` 


## 方法名称：`lnlinksdk.litd.sendTapdPayment`

### 描述
发送 Taproot Asset（TAPD 资产）支付。通过指定资产数量、资产ID和支付请求（invoice）来完成资产的转账。可选指定出款通道ID。

### 入参 (Parameters)

- `options` (类型: `object`): 发送资产支付的参数对象。
  - `asset_id` (类型: `string`): 资产ID。
  - `asset_amount` (类型: `number`): 发送的资产数量,用户输入的数量根据getInfo中的assetlist的decimal转化为最小精度。
  - `payment_request` (类型: `string`): 资产支付请求（invoice）。
  - `outgoing_chan_id` (类型: `string`, 可选): 指定出款通道ID。

### 返回值 (Return Value)
```json
  {
    "code": 0,
    "data": {
        "payment_result": {
            "htlcs": [
                {
                    "status": "SUCCEEDED",
                    "route": {
                        "hops": [
                            {
                                "custom_records": {},
                                "chan_id": "22481714253266944",
                                "chan_capacity": "1000000",
                                "amt_to_forward": "10000",
                                "fee": "0",
                                "expiry": 20554,
                                "amt_to_forward_msat": "10000000",
                                "fee_msat": "0",
                                "pub_key": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                                "tlv_payload": true,
                                "mpp_record": {
                                    "total_amt_msat": "10000000",
                                    "payment_addr": "5865aefc1088f179f7e8d07644dcecec31479d7208449000f3fcffb4dcccf81c"
                                },
                                "amp_record": null,
                                "metadata": "",
                                "blinding_point": "",
                                "encrypted_data": "",
                                "total_amt_msat": "0"
                            }
                        ],
                        "total_time_lock": 20554,
                        "total_fees": "0",
                        "total_amt": "10000",
                        "total_fees_msat": "0",
                        "total_amt_msat": "10000000",
                        "first_hop_amount_msat": "354000",
                        "custom_channel_data": "7b2262616c616e636573223a5b7b2261737365745f6964223a2266376163393966326330363866313135376337383730313266353063623034333433373530356333303963366438363835653133356364383438316231653964222c22616d6f756e74223a313030307d5d2c227266715f6964223a2230303737663366623638383536313961356535303861393932303037333038623433333539333330663561346365663866346135356139356663386266653932227d"
                    },
                    "attempt_time_ns": "1753081901042248062",
                    "resolve_time_ns": "1753081901198817371",
                    "failure": null,
                    "preimage": "5a30f9f33fb6ff550be123640313038b1dbb7438cd6799326d32ab71001d0bc8",
                    "attempt_id": "2"
                }
            ],
            "first_hop_custom_records": {
                "\u0000\u0000\u0001\u0000\u0000\u0000\u0000\u0000": "00",
                "\u0002\u0000\u0001\u0000\u0000\u0000\u0000\u0000": "0077f3fb6885619a5e508a992007308b43359330f5a4cef8f4a55a95fc8bfe92"
            },
            "payment_hash": "e509a2690d3ca1a9a7b8dc63926d07a7b169670674d7ef78168e74922be2f150",
            "value": "10000",
            "creation_date": "1753081901",
            "fee": "0",
            "payment_preimage": "5a30f9f33fb6ff550be123640313038b1dbb7438cd6799326d32ab71001d0bc8",
            "value_sat": "10000",
            "value_msat": "10000000",
            "payment_request": "lnbcrt100u1p58meu7pp5u5y6y6gd8js6nfacm33eymg857ckjecxwnt777qk3e6fy2lz79gqdysf3hxv6fmv9ehxet5f9zr5e3hv93njwtxxf3nqd3cvccnzdfhvvmnsdesxyexvdfsvd3rqdpnxsenwdfsx43nxvpevvmxgwpk8q6k2vfnx43kgwp58qckyvt989jrkctdda6kuap6xycrqvp6cqzzsxqrrssrzjqfs8kgq4q0fel6yxesfkxl6de7j9af4g84437k4ceeuquy2h4ut33akfkxl3kcvatvqqqqlgqqqqqqgq2qsp5tpj6alqs3rchnalg6pmyfh8vasc508tjppzfqq8nlnlmfhxvlqwq9qxpqysgq92kdu4samapq4m97zr3kvf3ny88c3xengtucal6txm7g70hcjcnhpkx0q8gklqphvv2mrfgkeh7e7jajmz24e9z5l6xnycmhmwaklyqqghc7n9",
            "status": "SUCCEEDED",
            "fee_sat": "0",
            "fee_msat": "0",
            "creation_time_ns": "1753081901015431597",
            "payment_index": "2",
            "failure_reason": "FAILURE_REASON_NONE"
        },
        "failure_reason": null,
        "assepted_sell_order": {
            "peer": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
            "id": "0077f3fb6885619a5e508a992007308b43359330f5a4cef8f4a55a95fc8bfe92",
            "scid": "17628595916645334674",
            "asset_amount": "1010",
            "bid_asset_rate": {
                "coefficient": "10000000000000",
                "scale": 6
            },
            "expiry": "1753082200806",
            "min_transportable_msat": "364000"
        }
    },
    "msg": "success"
}
```

--------

## 方法名称：`lnlinksdk.rgb.getState`

### 描述
获取RGB服务的状态。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.getState 的返回值结构 ...
{
    "code": 0,
    "data": {
        "state": 0 // 0: not init, 1: locked ,2 :unlocking,3: syning,4:server_active
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.startRGB`

### 描述
启动RGB服务。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.startRGB 的返回值结构 ...
{
    "code": 0,
    "data": [
        {
            "service_name": "rgb",
            "status": "Running"
        }
    ],
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.stopRGB`

### 描述
停止RGB服务。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.stopRGB 的返回值结构 ...
{}
```

---

## 方法名称：`lnlinksdk.rgb.restartRGB`

### 描述
重启RGB服务。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.restartRGB 的返回值结构 ...
{}
```

---

## 方法名称：`lnlinksdk.rgb.getInfo`

### 描述
获取RGB服务的综合信息。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.getInfo 的返回值结构 ...
{
    "code": 0,
    "data": {
        "pubkey": null,
        "rgb_assets_enabled": true,
        "name": "link",
        "status": {
            "state": 0,
            "rgb": "Running"
        },
        "owner": "npub1q7amuklx0fjw76dtulzzhhjmff8du5lyngw377d89hhrmj49w48ssltn7y",
        "node_addr": "npub1hn4wdtlz8q3jzju047c0u9gjrhecfgdgp8fh2xxgnf3qzfe9sp9sgyzq2j",
        "balance": {
            "colored": {
                "settled": 0,
                "spendable": 0,
                "future": 0
            },
            "vanilla": {
                "settled": 0,
                "spendable": 0,
                "future": 0
            }
        },
        "peers": [],
        "channel_list": [],
        "version": "3.0.2",
        "rgb_assets_list": [],
        "read_only_account_sk": "c87296f88f65ce37568358f97a679e7c99e9003bcb055fa6a833ad6dd8a8d99f"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.genseed`

### 描述
初始化RGB钱包。

### 入参 (Parameters)

- `password` (类型: `string`): 钱包密码。调用前确保rbg的状态是Running,从getInfo中可以获取节点状态status,如果不是,提示用户startRGB

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.genseed 的返回值结构 ...
{
    "code": 0,
    "data": {
        "mnemonic": "pencil layer capital plunge stick oxygen view remember bulk nominee like ivory"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.unlock`

### 描述
解锁RGB钱包。

### 入参 (Parameters)

- `password` (类型: `string`): 钱包密码。

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.unlock 的返回值结构 ...
{
    "code": 0,
    "data": {},// unlock成功api返回了{},正常现象
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.walletBalance`

### 描述
获取RGB钱包余额。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.walletBalance 的返回值结构 ...
{
    "code": 0,
    "data": {
        "vanilla": {
            "settled": 0,
            "future": 100000000,
            "spendable": 100000000
        },
        "colored": {
            "settled": 0,
            "future": 0,
            "spendable": 0
        }
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.newAddress`

### 描述
生成新的RGB钱包地址。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.newAddress 的返回值结构 ...
{
    "code": 0,
    "data": {
        "address": "bcrt1pkwt6c0lk3euhn807j32d7veekfwy95978y8v7rrmysu8gendvmxqjcj67n"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.sendCoins`

### 描述
发送比特币（BTC）到指定地址。

### 入参 (Parameters)

- `options` (类型: `object`): 发送比特币的选项。
  - `address` (类型: `string`): 目标比特币地址。
  - `amount` (类型: `number`): 发送数量（以satoshi为单位）。

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.sendCoins 的返回值结构 ...
{
    "code": 0,
    "data": {
        "txid": "cfd54c37797b5dba6cfb578fd039c40353de6805337905ddec6403ba3db3387d"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.createUtxos`

### 描述
创建未花费的交易输出（UTXOs）。

### 入参 (Parameters)

- `options` (类型: `object`): 创建UTXOs的选项。
  - `num` (类型: `number`): 要创建的UTXOs数量。
  - `size` (类型: `number`): 每个UTXO的大小（以satoshi为单位）。
  - `fee_rate` (类型: `number`): 交易费用率。

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.createUtxos 的返回值结构 ...
{
    "code": 0,
    "data": {},//也没有返回值,不报错就是成功
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.listUnspents`

### 描述
列出所有未花费的交易输出（UTXOs）。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.listUnspents 的返回值结构 ...
{
    "code": 0,
    "data": {
        "unspents": [
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:4",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:9",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:6",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:1",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:7",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:5",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:10",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:2",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:3",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:0",
                    "btc_amount": 300000,
                    "colorable": true
                },
                "rgb_allocations": []
            },
            {
                "utxo": {
                    "outpoint": "0bc713d39c0bd2b3e519e01655716940674caae5ea3a45d3994d68e3378958f6:8",
                    "btc_amount": 96796521,
                    "colorable": false
                },
                "rgb_allocations": []
            }
        ]
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.createRgbInvoice`

### 描述
创建RGB发票。

### 入参 (Parameters)

- `options` (类型: `object`): 创建RGB发票的选项。
  - `duration_seconds` (类型: `number`): 发票有效期（秒）。
  -  `asset_id` (类型: `string` 可选): 资产id,如果是第一次接收某个资产的发票,这里不填asset_id(一定不能填),其它情况为可选.

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.createRgbInvoice 的返回值结构 ...
{
    "code": 0,
    "data": {
        "recipient_id": "bcrt:utxob:9UBQ8tkJ-u7ln3Rl-W7p0CKW-WyDY3Go-Cheq5G1-IRS6laJ-bXV3o",
        "invoice": "rgb:~/~/~/bcrt:utxob:9UBQ8tkJ-u7ln3Rl-W7p0CKW-WyDY3Go-Cheq5G1-IRS6laJ-bXV3o?expiry=1753091869&endpoints=rpc://regtest.lnfi.network:5000/json-rpc",
        "expiration_timestamp": 1753091869,
        "batch_transfer_idx": 1
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.listPeers`

### 描述
列出所有已连接的RGB对等节点。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.listPeers 的返回值结构 ...
{
    "code": 0,
    "data": {
        "peers": [
            {
                "pubkey": "03b7153e278882e48e690acd0743305cbada86b131ab3388ccd782b45b02f064ef",
                "address": "34.84.66.29:9736"
            }
        ]
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.connectPeer`

### 描述
连接到RGB对等节点。

### 入参 (Parameters)

- `options` (类型: `object`): 连接对等节点的选项。
  - `pubkey` (类型: `string`): 目标节点的公钥。
  - `host` (类型: `string`): 目标节点的IP地址和端口。

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.connectPeer 的返回值结构 ...
{
    "code": 0,
    "data": {},//成功返回{}
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.listChannels`

### 描述
列出所有RGB通道。

### 入参 (Parameters)
无

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.listChannels 的返回值结构 ...
{
    "code": 0,
    "data": {
        "channels": [
            {
                "channel_id": "b3b59585b7e77524b55341e84d75c3c97367e58796a9b8b65bea61655a501804",
                "funding_txid": "0518505a6561ea5bb6b8a99687e56773c9c3754de84153b52475e7b78595b5b3",
                "peer_pubkey": "03b7153e278882e48e690acd0743305cbada86b131ab3388ccd782b45b02f064ef",
                "peer_alias": "rgb-bob-node",
                "short_channel_id": 22558680067145730,
                "status": "Opening",
                "ready": false,
                "capacity_sat": 300000,
                "local_balance_sat": 149013,
                "outbound_balance_msat": 147000000,
                "inbound_balance_msat": 147000000,
                "next_outbound_htlc_limit_msat": 30000000,
                "next_outbound_htlc_minimum_msat": 1,
                "is_usable": false,
                "public": true,
                "asset_id": "rgb:cJ9fWFzO-snphAel-MC_HNrv-bp7s~n7-QqShKI5-LgA8Wys",
                "asset_local_amount": 80000,
                "asset_remote_amount": 0
            }
        ]
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.openChannel`

### 描述
打开一个新的RGB通道。要从getInfo中获取资产对应的余额,检查是否足够openChannel

### 入参 (Parameters)

- `options` (类型: `object`): 打开RGB通道的选项。
- 如果是rgbasset的通道,需要传以下参数
  - `asset_id` (类型: `string`): 资产的ID。
  - `asset_amount` (类型: `number`): 资产数量最小单位,用户输入值要根据getInfo中的rgb_assets_list字段转换为最小单位.
  - `fee_rate_sat_per_vbyte` (类型: `number`): 每vbyte的费用（以satoshi为单位）。从getFeeRate获取,上浮120%.
- 如果是btc的通道,需要传以下参数
  - `capacity_sat` (类型: `number`): btc通道的容量

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.openChannel 的返回值结构 ...
{
    "code": 0,
    "data": {
        "temporary_channel_id": "301d511ce32f8c34529bdf3f707879e02374ade3249d4029362e0d88d6f9444c"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.createInvoice`

### 描述
创建RGB资产闪电发票。需要channel可用时才可以使用

### 入参 (Parameters)

- `options` (类型: `object`): 创建RGB资产发票的选项。
  - `asset_id` (类型: `string`): 资产的ID。
  - `asset_amount` (类型: `number`): 资产数量。

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.createInvoice 的返回值结构 ...
{
    "code": 0,
    "data": {
        "invoice": "lnbcrt30u1p58uptmdqud3jxktt5w46x7unfv9kz6mn0v3jsnp4qd5fk3a0xasy5ly4vaerehu74yh3sjjssx4e9mznj4u3gnkme7tkqpp5u2w205m9j0pcszqxyq53uyttgc0p5vh8wr55cg6v70t78c5t3c0ssp5gf6hq58g9sh05k8gtjqr93m4k2f00s0tm524e5jckxxxkek460hs9qyysgqcqpcxqrrsslz5wfnkywnrfgukv46x0f8j6umwwp5yzetv94x5xh6gfee8vttzwqmhxlnwxuk4zu2ndp95jdfdf3n5zwzh09es7qzrygj7zs4wry3ucv5pkxcr62yp68xd79l24xqhkwma25f93jslqxa85kqg6khvncskm3jpgrjga66naxcl5mpuxygrjkvjl27j9ejkyy6gqytmq8n"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.decodeLnInvoice`

### 描述
解码闪电网络发票（用于RGB）。

### 入参 (Parameters)

- `options` (类型: `object`): 解码发票的选项。
  - `invoice` (类型: `string`): 闪电网络发票字符串。

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.decodeLnInvoice 的返回值结构 ...
{
    "code": 0,
    "data": {
        "amt_msat": 3000000,
        "expiry_sec": 3600,
        "timestamp": 1753089312,
        "asset_id": "rgb:cJ9fWFzO-snphAel-MC_HNrv-bp7s~n7-QqShKI5-LgA8Wys",
        "asset_amount": 5000,
        "payment_hash": "97120586bbc86ffebb9ec296fdfcd531d8fdc5bf2a3074093498b37d46c415ec",
        "payment_secret": "b59481a4a9c27e11612a525af8ec586e204df545b7653f7ed6daa1a4ac3a2a6f",
        "payee_pubkey": "03b7153e278882e48e690acd0743305cbada86b131ab3388ccd782b45b02f064ef",
        "network": "Regtest"
    },
    "msg": "success"
}
```

---

## 方法名称：`lnlinksdk.rgb.payInvoice`

### 描述
支付RGB相关发票。

### 入参 (Parameters)

- `options` (类型: `object`): 支付发票的选项。
  - `invoice` (类型: `string`): RGB发票字符串。

### 返回值 (Return Value)

```json
// ... 在这里填写 rgb.payInvoice 的返回值结构 ...
{
    "code": 0,
    "data": {
        "payment_id": "97120586bbc86ffebb9ec296fdfcd531d8fdc5bf2a3074093498b37d46c415ec",
        "payment_hash": "97120586bbc86ffebb9ec296fdfcd531d8fdc5bf2a3074093498b37d46c415ec",
        "payment_secret": "b59481a4a9c27e11612a525af8ec586e204df545b7653f7ed6daa1a4ac3a2a6f",
        "status": "Pending"
    },
    "msg": "success"
}
``` 