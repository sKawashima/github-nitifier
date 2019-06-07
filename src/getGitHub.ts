'use strict'

import * as argv from 'argv'
const target: string = argv.run()['targets'][0]

console.log(target)

import * as Octokit from '@octokit/rest'

const octokit = new Octokit({
  auth: '982f439cbd9ebd51073eee49e31c41f0a4a72fa9'
})

octokit.issues
  .get({
    owner: 'mwed',
    repo: 'mwed-design',
    issue_number: 70
  })
  .then(res => {
    console.log(res)
  })

// import * as notifier from 'node-notifier'
// notifier.notify({
//     title: url,
//     message: 'メッセージ',
// })
// import * as opener from "opener";
// notifier.on('click', function (notifierObject, options) {
//     console.log('click')
//     opener(url)
// })
