import { NeynarAPIClient } from '@neynar/nodejs-sdk';

const client = new NeynarAPIClient('');

// tradao fid: 250205
// PokerFace fid: 658010

// client.fetchBulkUsersByEthereumAddress(['']).then((res) => {
//     console.log(`res--- ${JSON.stringify(res)}`)
// })

// client.fetchBulkUsers([658010]).then((res) => {
//     console.log(`res--- ${JSON.stringify(res)}`)
// })

// client.lookUpCastByHashOrWarpcastUrl('0xa5972171848adc7f7d71ab9e4243ae4750a7bde2', "hash").then((res) => {
//     console.log(`res0--- ${JSON.stringify(res)}`)
// })

// client.fetchUserFollowingFeed(658010).then((res) => {
//     console.log(`res1--- ${JSON.stringify(res)}`)
//     // console.log(`res11--- ${res.casts.length}`)
// })

// client.fetchRepliesAndRecastsForUser(658010).then((res) => {
//     console.log(`res--- ${JSON.stringify(res)}`)
// })


// do not work
// client.fetchUserLikesAndRecasts(658010).then((res) => {
//     console.log(`res--- ${JSON.stringify(res)}`)
//     // console.log(`res--- ${res.casts.length}`)
// })

// fid: 250205
