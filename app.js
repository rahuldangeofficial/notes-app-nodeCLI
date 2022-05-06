const chalk = require('chalk');
const yargs = require('yargs');
const notes =require('./notes.js');


const command = process.argv[2];

if(command==='add'){
    console.log('adding...');
}else if(command==='remove'){
    console.log('removing...');
}

debugger

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list notes',
    handler:function(){
        console.log('listing notes')
    }
})

yargs.command({
    command:'read',
    describe:'read notes',
    handler:function(){
        console.log('reading notes')
    }
})

yargs.parse()
//console.log(yargs.argv);