import { Component } from '@angular/core';
import { Apiservice } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

    name="konankivenkateswarlu"
    
    private person={
      "first":"venky",
      "last":"konanki"
    }
    
    private response:any;
    public data=new Date();

  constructor(private content:Apiservice){
      
  }
  getuser(){
    var that=this;
    this.content.fetchuser().subscribe(function(res){
      that.response=res;
      console.log(res)
    })
  }
}
