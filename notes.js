console.log('notes.js Started');
const fs=require('fs');
var fetchNode=()=>{
	try{
   	var notesString=fs.readFileSync("note-write.json");
      return JSON.parse(notesString);
   }catch(e){
   	return [];
}
};
var insertNode=(notes)=>{
 fs.writeFileSync("note-write.json",JSON.stringify(notes));
   };

var addNote= (title,body)=>{
   var notes=fetchNode();
   var note={
   	  title,
   	  body                 //title:title
   };
// var duplicatvaraible=notes.filter((note)=>{
// 	return note.title===title;
// }); also writen as in ES6
var duplicatvaraible=notes.filter((note)=> note.title===title && note.body===body);//this filter method return
//true if the condition writen inside is true and stored the value in notes array then in 
//duplicatevaraible its array method 
if(duplicatvaraible.length ===0){
        notes.push(note);
        insertNode(notes);	
        return note;
	}     
};
var listNote=()=>{
	  return fetchNode();
};

var readNote=(title)=>{
var notes=fetchNode();
   var readNode=notes.filter((note)=>note.title === title);
   return readNode[0];
};

var removeNote=(title)=>{
var notes=fetchNode();
var noteExist=notes.filter((note)=> note.title !== title);
insertNode(noteExist) ;
return notes.length !== noteExist.length;
};

var logNote=(note)=>{
	console.log("---------");
	console.log(`title:${note.title}`);
	console.log(`Body:${note.body}`);
}

module.exports={
	   addNote,          //also we written as <=  es6 addNote:addNote
        listNote,
        readNote,
        removeNote,logNote
 };







// module.exports.add=function(a,b){
// 	this.first=a;
// 	this.second=b;
// 	return this.first+this.second;
// }

// //same things can be donein another way
// module.exports.add=(a,b)=>{
//  return a+b;
// }
