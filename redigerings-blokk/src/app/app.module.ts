import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';
import { InfoComponent } from './components/info/info.component';
import { InfoItemComponent } from './components/info-item/info-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    InfoComponent,
    InfoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorModule
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
