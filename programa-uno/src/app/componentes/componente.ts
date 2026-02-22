import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-componentes',
    standalone: true,
    templateUrl: './componente.html',
    styleUrl: './componente.css'
})

//export class AddComponent implements OnInit{

    //constructor(){
    //    console.log("creandose desde el constructor")
    //}
    
    //ngOnInit(): void {
    //    console.log("creandose desde ng on init")
    //}

//}

export class AddComponent implements OnDestroy{

    ngOnDestroy(): void {
        console.log("componete desctuido")
    }

}
