import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes in Angular';
  currentDate = new Date()
  
  students: any={
    Id:'01', Name :'Hanuman', DOB:'1997-02-15',Gender:'Male',
    Fees:'200',
    
  }
  student: any={
    Id:'02', Name :'Ram ji', DOB:'1997-02-15',Gender:'Male',
    Fees:'300', 
  }
  
  
}
 