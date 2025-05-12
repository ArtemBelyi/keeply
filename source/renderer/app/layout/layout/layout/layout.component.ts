import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header/header.component";
import { ContentComponent } from "../../content/content/content.component";
import { FooterComponent } from "../../footer/footer/footer.component";
import { SplitAreaComponent, SplitComponent } from "angular-split";

@Component({
    selector: 'app-layout',
    imports: [
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        SplitComponent,
        SplitAreaComponent
    ],
    templateUrl: './layout.component.html',
    standalone: true,
    styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
