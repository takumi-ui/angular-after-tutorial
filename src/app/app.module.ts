
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListItemComponent } from './user/user-list-item/user-list-item.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserListFilterComponent } from './user/user-list-filter/user-list-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import { TemplateDirective } from './directive/template.directive';
import { MaskPipe } from './pipe/mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UserListComponent,
    UserListFilterComponent,
    UserDetailPageComponent,
    TemplateDirective,
    MaskPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
