import{Directive, HostListener, HostBinding}from '@angular/core';
@Directive({
    selector:'[appDropdown]',
    exportAs:'appDropDown'
})
export class DropDownDirective{
    @HostBinding('class.toggle') isOpen = false;
   @HostListener('click') toggleOpen(){
       this.isOpen = !this.isOpen;

   }
}