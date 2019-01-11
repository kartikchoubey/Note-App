console.log("app started");

const fs=require('fs');
const os=require('os');
const notes=require('./notes.js');

const _=require('lodash');
const yarg=require('yargs');

const argv =yarg
.command('add','adding a note',{
	title:{
		describe:'title of note',
		demand:true,
		alias:'t'
	},
	body:{
         describe:'body of note',
         demand:true,
         alias:'b'
	}
})
.command('remove','removing a note',{
	title:{
		describe:'title of note',
		demand:true,
		alias:'t'
	}
})
.command('read','read a note',{
	title:{
		describe:'title of note',
		demand:true,
		alias:'t'
	}
})
.command('list','listing a note')
.help()
.argv;
var command=argv._[0];
console.log('command:', command);


if (command==='add'){
	 var note=notes.addNote(argv.title,argv.body);
	 if(note){
	 	console.log("note is added");
	 }else{
	 	console.log("note is not added");
	 }
}else if (command==='list'){
	var list = notes.listNote();
	console.log(` ${list.length} note`);
      list.forEach((note)=> notes.logNote(note));
}else if (command==='read'){
 var read=notes.readNote(argv.title);
	if(read){
        console.log("Note is readed");
        notes.logNote(read);
	}else{
		console.log(" Note Not readed");
	}
}else if (command==='remove'){
	 var remove=notes.removeNote(argv.title);
	 var mesg=remove ? "note is removed" : "note is not removed";
	 console.log(mesg);
}






