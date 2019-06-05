import * as argv from 'argv'
import * as opener from 'opener'

const target: string = argv.run()['targets'][0]

console.log(target)

import * as notifier from 'node-notifier'

notifier.notify({
    title: target,
    message: 'メッセージ',
})

notifier.on('click', function (notifierObject, options) {
    console.log('click')
    opener('https://github.com/mwed/mwed-design/issues/70')
})
