import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout/layout.component";

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'app-workspace-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-shell';
}
