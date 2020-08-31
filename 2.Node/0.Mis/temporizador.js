const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 2', function (){
    console.log('Executando tarefa1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('cancelando a tarefa1')
}, 20000)