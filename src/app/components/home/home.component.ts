import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare var webkitSpeechRecognition: any;
declare var webkitSpeechGrammarList:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
voicevalue = 'Test'
speechRecognition = webkitSpeechRecognition
speechGrammarList = webkitSpeechGrammarList
recognition
speechRecognitionGrammarList
grammar = '#JSGF V1.0;';
recorderForm: FormGroup;
    

  constructor() { }

  ngOnInit() {
       
    this.recorderForm = new FormGroup({
      voiceoutput: new FormControl('')
    })
  
  }

  startVoiceRecognition(){
    console.log("Recorder Form: ",this.recorderForm)
// console.log(this.voicevalue)
this.recognition = new this.speechRecognition()
// this.speechRecognitionGrammarList = new this.speechGrammarList()
// this.voicevalue = "Test"


// this.speechRecognitionGrammarList.addFromString(this.grammar,1)

// this.recognition.grammars = this.speechRecognitionGrammarList
this.recognition.lang = 'en-US';
this.recognition.continuous = false
//Wether we want interim results when user is speaking or only after user has spoken
this.recognition.interimResults = false
this.recognition.start()
this.recognition.onresult = (event)=> {
  console.log("Recorder Form: ",this.recorderForm)
  var last = event.results.length - 1;
  var command = event.results[0][0].transcript;
  this.recognition.stop()
  // this.voicevalue = command
  
  this.recorderForm.controls['voiceoutput'].setValue(command)
  console.log("COmmand is: ",event)
  
  // message.textContent = 'Voice Input: ' + command + '.';

     
};

// this.recognition.onspeechend = function() {
//   this.recognition.stop();
// };

this.recognition.onerror = function(event:any) {
  console.log("Error: ",event.error)
}     

    
console.log("Heree")
  }

}
