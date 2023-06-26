import { NgModule } from "@angular/core";
import { SecondComponent } from "./components/second/second.component";
import { FirstModule } from "../first/first.module";
import { FirstRoutingModule } from "../first/first-routing.module";
import { SecondRoutingModule } from "./second-routing.module";

@NgModule({
    declarations: [SecondComponent],
    imports: [
        FirstModule,
        SecondRoutingModule
    ],
    exports: [
        SecondComponent
    ]
})

export class SecondModule {}