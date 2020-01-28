    import {Component, Output, EventEmitter} from '@angular/core';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    // styles:[`
    // *, html {
    //     margin:0;
    //     padding:0;  
    // }`]
})


export class HeaderComponent{
    @Output()featureSelected = new EventEmitter<String>();
    collapsed = true;
    header='Recipe Book';

    onSelect(feature:string){
        this.featureSelected.emit(feature);
        this.header = "Recipe Book - " + feature;

    }

}