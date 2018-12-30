import {Component, OnInit} from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {registerElement} from "nativescript-angular";
import {isIOS} from "tns-core-modules/platform";

registerElement("StatusBar", () => require("nativescript-statusbar").StatusBar);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
    isIos = isIOS;
    constructor(private page: Page) { }

    ngOnInit() {
        if (!isIOS) {
            this.page.backgroundSpanUnderStatusBar = true;
            this.page.actionBarHidden = true;
        }
    }
}
