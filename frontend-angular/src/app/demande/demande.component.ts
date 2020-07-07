import {Component,OnInit} from '@angular/core'
import{Demande} from './demande'
import {DemandeService} from './demande.service'


@Component({
    selector:'app-Demande',
    templateUrl:'./demande.component.html',
    providers: [DemandeService]

})

export  class DemandeComponent implements OnInit{
    Demande:Demande[]
    constructor(private demandeService:DemandeService ){}

    ngOnInit(){
        this.getDemande()
    }
    getDemande():void{
        this.demandeService.getDemande().subscribe(Demande=>(this.Demande=Demande))
 
    }
    add(teste:string,isolement:string,maladie:string,symptome:string,temps:number){
        teste=teste.trim()
        isolement=isolement.trim()
        maladie=maladie.trim()
        symptome=symptome.trim()
        temps=temps
        const newdemande:Demande={teste,isolement,maladie,symptome,temps} as Demande 
        this.demandeService.addDemande(newdemande).subscribe(Demande=>(this.Demande=Demande))

    }
    
}