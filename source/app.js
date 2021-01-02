import './style/style.scss'

console.log('Hello from webpack!')

async function start() {
    return await Promise.resolve('async working')
}

start().then(console.log)