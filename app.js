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





//---------------------------------------
// var command=process.argv[2];
// console.log('command :', command);
//console.log(process.argv);
//var command=process.argv[2];
// console.log('command :',command);
// if(command==='list'){
// 	console.log('listing all notes');
// }else if(command==='add'){
// 	console.log('addding all notes');
// }else if(command==="read"){
// 	console.log("reading all notes");
// }else{
// 	console.log('nothing selected');
// }---------------------------------------


// console.log(_.isString(12));
// console.log(_.isString('kartik'));


// var notRepeated=_.uniq([1,2,1,'kartik','kartik']);
// console.log(notRepeated);


//var user=os.userInfo();
// var add=notes.add(2,-5);
// console.log(add);,

// fs.appendFile('first.txt',`Hello ${user.username}!`,function(err){
// if(err){
// 	console.log("unable to write");
// }

// });
