import { Component } from '@angular/core';
import { UserDetailGuard } from "./user/user-detail.guard";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: [`
    .active {
        color: red;
    }
    `
    ]
})
export class AppComponent {
}
