import {Component,OnInit} from '@angular/core'
import{Nontraite} from './nontraiter'
import {NontraiterService} from './nontraiter.service'


@Component({
    selector:'app-Nontraiter',
    templateUrl:'./nontraiter.component.html',
    providers: [NontraiterService]

})

export  class NontraiterComponent implements OnInit{
    Nontraiter:Nontraite[]
    constructor(private nontraiterService:NontraiterService ){}

    ngOnInit(){
        this.getNontraites()
    }
    getNontraites():void{
        this.nontraiterService.getNontraites().subscribe(Nontraiter=>(this.Nontraiter=Nontraiter))
 
    }
    delete(nontraite:Nontraite):void{
        this.Nontraiter=this.Nontraiter.filter(h=>h !==nontraite)
        this.nontraiterService.deleteNontraites(nontraite._id).subscribe()
    }

}