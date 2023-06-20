import { NgModule } from "@angular/core";
import { FirstComponent } from "./components/first/first.component";
import { BrowserModule } from "@angular/platform-browser";
import { ExportComponent } from './components/export/export.component';
import { FirstRoutingModule } from "./first-routing.module";

@NgModule({
    declarations: [
        FirstComponent,
        ExportComponent
    ],
    imports:[
        FirstRoutingModule
    ],
    exports: [ExportComponent]
})

export class FirstModule {}