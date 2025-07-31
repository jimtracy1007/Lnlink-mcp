import { LnlinkSdk } from "../index.js";
import { useRef, useEffect } from "react";
export default function Test() {
  const lnlinkSdkRef = useRef(null);
  useEffect(() => {
    lnlinkSdkRef.current = new LnlinkSdk({
      env: "development",
      singer: window.nostr,
      sendTo: "npub156cxm7tuxue7l2juhykpt4jhl3ya24p6aallw8w4z7e8nk6nc6jqpr85sj",
    });
  }, []);
  return (
    <>
      <div>
        <h2>Lnd test</h2>
        <div
          style={{
            display: "flex",
            width: "500px",
            margin: "0 auto",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/*  getInfo
                  
          */}
          <button onClick={() => lnlinkSdkRef.current.litd.getInfo()}>
            getInfo
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.startLitd()}>
            startLitd
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.stopLitd()}>
            stopLitd
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.restartLitd()}>
            restartLitd
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.getState()}>
            getState
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.genseed()}>
            genseed
          </button>
          {/* 
          ["ability","bracket","actress","tail","siren","critic","mandate","suggest","uphold","outside","airport","perfect","cave","basic","jaguar","strike","fiction","roast","repair","sand","upgrade","alcohol","unique","hedgehog"]
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.initWallet({
                password: "12345678",
                seed: [
                  "ability",
                  "bracket",
                  "actress",
                  "tail",
                  "siren",
                  "critic",
                  "mandate",
                  "suggest",
                  "uphold",
                  "outside",
                  "airport",
                  "perfect",
                  "cave",
                  "basic",
                  "jaguar",
                  "strike",
                  "fiction",
                  "roast",
                  "repair",
                  "sand",
                  "upgrade",
                  "alcohol",
                  "unique",
                  "hedgehog",
                ],
              })
            }
          >
            initWallet
          </button>
          {/* 
           walletBalance
           */}
          <button onClick={() => lnlinkSdkRef.current.litd.walletBalance()}>
            walletBalance
          </button>
          {/* 
           newAddress
           */}
          <button onClick={() => lnlinkSdkRef.current.litd.newAddress()}>
            newAddress
          </button>
          {/* 
           openChannel
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.openChannel({
                host: "regtest.lnfi.network:9735",
                node_pubkey:
                  "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                amount: 1000000,
                push_amount: 0,
                sat_per_vbyte: 3,
              })
            }
          >
            openChannel
          </button>
          {/* 
           listChannels
           {
            "code": 0,
            "data": {
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
            "msg": "success"
        }
           */}
          <button onClick={() => lnlinkSdkRef.current.litd.listChannels()}>
            listChannels
          </button>
          {/* 
           closeChannel
           */}
          <button onClick={() => lnlinkSdkRef.current.litd.closeChannel()}>
            closeChannel
          </button>
          {/* 
           connectPeer
           */}
          <button onClick={() => lnlinkSdkRef.current.litd.connectPeer()}>
            connectPeer
          </button>
          {/* 
           addInvoice
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.addInvoice({
                amt: 1000,
                memo: "test",
              })
            }
          >
            addInvoice
          </button>
          {/* 
           payInvoice
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.payInvoice({
                payment_request:
                  "lnbcrt10u1p5833mkpp59gvp9xp9nxc4z9ghynqqeq7caklgu28tsdmqjlefty9vdwn6l7nqdxvdec82c33wymkzmt4ddk8svrxdfmnwdnyw36kc7n6dp5x5mtxvcuxgaf4d3ukuemhxvmnwepc895xsunddg6rjae58pehxmr5dcmhjhmwwp6kyvfexekhxwtv8paryvnpwsuhxdryvachwangw3kn2atddq6kzvrvwfcxzanewce8ja34d43k56rkweu8jdtcwv68zmrsvdescqzzsxqrrsssp57d9qsyzgmhxwd7d525daxv03rvnjul66snpf7seseky7pr0655wq9qxpqysgqmxrrzl8vstyvqgu23f4ylckp2ecp4tdw2jxa9fxs4u3glq552ef8utrd6ne8rp7f45036ad9txakekqm4f3w0050revew7nmvvj5y2gqcyaxmv",
              })
            }
          >
            payInvoice
          </button>

          {/* 
            taprootassets
          */}
          {/* 
          newTapdAddr
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.newTapdAddr({
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                amt: 1000 * 100,
              })
            }
          >
            newTapdAddr
          </button>
          {/* 
           sendTapdAssets
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.sendTapdAssets({
                tap_addrs: "",
                fee_rate: 4,
              })
            }
          >
            sendTapdAssets
          </button>
          {/* 
           createTapdChannel
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.createTapdChannel({
                asset_amount: 800 * 100,
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                node_pubkey:
                  "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                fee_rate_sat_per_vbyte: 4,
              })
            }
          >
            createTapdChannel
          </button>

          {/* 
           addTapdInvoice
           {
            "accepted_buy_quote": {
                "peer": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                "id": "1f590e34863111bd8d20773ce9162d6892fa58bfaee595c8f737d5ee52b067a6",
                "scid": "17813942070653511590",
                "asset_max_amount": "1000",
                "ask_asset_rate": {
                    "coefficient": "10000000000000",
                    "scale": 6
                },
                "expiry": "1752747360371",
                "min_transportable_units": "35"
            },
            "invoice_result": {
                "r_hash": "3b87d0f614873e967a850fed492573247d69320e79e96a7b8a6775ccfe8f15d8",
                "payment_request": "lnbcrt100u1p583np5pp58wrapas5sulfv759plk5jftny37kjvsw085k57u2va6uel50zhvqdqqcqzzsxqzfvrzjqf7j7xl8rhpycc932pcy382w7f6d664vydks93nuwmtfxh00hft2daeh6hh99vr85cqqqqlgqqqqqqgq2qsp574zwrzuv6tggrua2pz5tre8c3e50tcee8tp007a45cppwqp23cgq9qxpqysgq6hllvm5qxdgz97m43hptylwrs5f0exv8lcv8ur3fx8u5rzu5vrk343x5jh7ufc9qvc5z45500czdjegkzf4dt5ywl069jhqp8yt9s8cq508pmz",
                "add_index": "2",
                "payment_addr": "f544e18b8cd2d081f3aa08a8b1e4f88e68f5e3393ac2f7fbb5a60217002a8e10"
            }
        }
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.addTapdInvoice({
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                asset_amount: 10 * 100,
              })
            }
          >
            addTapdInvoice
          </button>

          {/* 
          decodeAssetPayReq
                {
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
                                "chan_id": "17813942070653511590",
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
                "destination": "03f716ce8c97785ec3889f119f2ea7cd7a8b6dc8e0602745b72d2cb93aad96a13f",
                "payment_hash": "3b87d0f614873e967a850fed492573247d69320e79e96a7b8a6775ccfe8f15d8",
                "num_satoshis": "10000",
                "timestamp": "1752747060",
                "expiry": "300",
                "description": "",
                "description_hash": "",
                "fallback_addr": "",
                "cltv_expiry": "80",
                "payment_addr": "f544e18b8cd2d081f3aa08a8b1e4f88e68f5e3393ac2f7fbb5a60217002a8e10",
                "num_msat": "10000000"
            }
        }

          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.decodeAssetPayReq({
                payment_request:
                  "lnbcrt100u1p583np5pp58wrapas5sulfv759plk5jftny37kjvsw085k57u2va6uel50zhvqdqqcqzzsxqzfvrzjqf7j7xl8rhpycc932pcy382w7f6d664vydks93nuwmtfxh00hft2daeh6hh99vr85cqqqqlgqqqqqqgq2qsp574zwrzuv6tggrua2pz5tre8c3e50tcee8tp007a45cppwqp23cgq9qxpqysgq6hllvm5qxdgz97m43hptylwrs5f0exv8lcv8ur3fx8u5rzu5vrk343x5jh7ufc9qvc5z45500czdjegkzf4dt5ywl069jhqp8yt9s8cq508pmz",
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
              })
            }
          >
            decodeAssetPayReq
          </button>
        </div>
      </div>
      <div>
        <h2>RGB test</h2>
        <div
          style={{
            display: "flex",
            width: "500px",
            margin: "20px auto",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button onClick={() => lnlinkSdkRef.current.fee.getFeeRate()}>
            getFees
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.getState()}>
            getState
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.startRGB()}>
            startRGB
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.stopRGB()}>
            stopRGB
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.restartRGB()}>
            restartRGB
          </button>
          {/* 
          getInfo
          {
          */}
          <button onClick={() => lnlinkSdkRef.current.rgb.getInfo()}>
            getInfo
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.genseed("12345678")}>
            initWallet
          </button>
          {/* unlock */}
          <button onClick={() => lnlinkSdkRef.current.rgb.unlock("12345678")}>
            unlock
          </button>
          {/* walletBalance */}
          <button onClick={() => lnlinkSdkRef.current.rgb.walletBalance()}>
            walletBalance
          </button>
          {/* newAddress */}
          <button onClick={() => lnlinkSdkRef.current.rgb.newAddress()}>
            newAddress
          </button>
          {/* sendCoins */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.sendCoins({
                address:
                  "bcrt1p6vdwg0cj0ft070eavvw9j3thkh04h8x7fq2w0p8le8j6zjt00e2syu9e7h",
                amount: 2000000,
              })
            }
          >
            sendCoins
          </button>

          {/* 
          createUtxos
            {
            "code": 0,
            "data": {},
            "msg": "success"
            }
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.createUtxos({
                num: 10,
                size: 300000,
                fee_rate: 5,
              })
            }
          >
            createUtxos
          </button>
          {/* 
          listUnspents
          */}
          <button onClick={() => lnlinkSdkRef.current.rgb.listUnspents()}>
            listUnspents
          </button>

          {/* 
          createRgbInvoice
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.createRgbInvoice({
                duration_seconds: 60 * 60,
              })
            }
          >
            createRgbInvoice
          </button>
          {/* 
            listPeers
          */}
          <button onClick={() => lnlinkSdkRef.current.rgb.listPeers()}>
            listPeers
          </button>
          {/* 
          connectPeer
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.connectPeer({
                pubkey: "",
                host: "",
              })
            }
          >
            connectPeer
          </button>

          {/* channel */}
          <button onClick={() => lnlinkSdkRef.current.rgb.listChannels()}>
            listChannels
          </button>
          {/* 
            openChannel
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.openChannel({
                asset_id:
                  "rgb:cJ9fWFzO-snphAel-MC_HNrv-bp7s~n7-QqShKI5-LgA8Wys",
                asset_amount: 80000,
                fee_rate_sat_per_vbyte: 4,
              })
            }
          >
            openChannel
          </button>
          {/* 
            createInvoice
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.createInvoice({
                asset_id:
                  "rgb:cJ9fWFzO-snphAel-MC_HNrv-bp7s~n7-QqShKI5-LgA8Wys",
                asset_amount: 100,
              })
            }
          >
            createInvoice
          </button>
          {/* 
            decodeInvoice
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.decodeLnInvoice({
                invoice:
                  "lnbcrt30u1p585phpdqud3jxktt5w46x7unfv9kz6mn0v3jsnp4qdxdezs3dda3xjtqxc8832yd3s09sn65uygrmg8dxg73wm332mjdxpp5eptmrcltkgvl23gnq0khdas2hyn62afeq5kqd89968a23cx7j3wssp55xffrrzksec066wt69yf4aa5dfgpg8vvnswxvqh27gyhk7wyhw6q9qyysgqcqpcxqrrsslz5wfnkywnrfgukv46x0f8j6umwwp5yzetv94x5xh6gfee8vttzwqmhxlnwxuk4zu2ndp95jdfdf3n5zwzh09es7qzryrzjqwm320383zpwfrnfptxswsestjad4p43xx4n8zxv67ptgkcz7pjw7qp47gqqsxqqqsqqqqlgqqqqqqqqfqz044hrg5um2hqxds6mw3q648zn0g4tmc2xsnm6eccmhxlgm0fes9v3e9mnn6r4ff4v86xl2er5psnlftaqqmmkp3c04d8m5rtah2glspytsxe7",
              })
            }
          >
            decodeLnInvoice
          </button>
          {/* 
          payInvoice
         */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.payInvoice({
                invoice: "",
              })
            }
          >
            payInvoice
          </button>

          {/* <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.disconnectPeer({
                peer_pubkey: "",
              })
            }
          >
            disconnectPeer
          </button> */}
        </div>
      </div>
    </>
  );
}
