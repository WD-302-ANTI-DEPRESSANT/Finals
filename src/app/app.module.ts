import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

//Step 3 - Import the components recently generated
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { SupportComponent } from './support/support.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

//Step 4 - use Routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'support', component: SupportComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    ResourceComponent,
    SupportComponent,
    BlogComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
