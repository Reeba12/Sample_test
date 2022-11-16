import { Component, OnInit } from '@angular/core';
import { skills,Skill } from "./skill";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  searchText: string ="";
    filterarray: Skill[] =[];
    newSkill: Skill[]=[]
    search():void{
        if(this.searchText==""){
            this.filterarray = []
            return;
        };
this.filterarray = skills.filter(items=> items.name.toUpperCase().includes(this.searchText.toUpperCase()))
    };
    selectSkill(seletedskill:Skill):void{
        this.newSkill.push(seletedskill)
        this.filterarray=[];
        this.searchText="";
    }
    remove(removeskill:Skill):void{
        this.newSkill=this.newSkill.filter(items=> items.id != removeskill.id)
    }

  ngOnInit(): void {
  }

}
