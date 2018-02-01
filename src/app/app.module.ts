import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MomentModule } from 'angular2-moment/moment.module';
import {CalendarComponent} from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { FullCalendarModule } from 'ng-fullcalendar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule , MatButtonModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFiteringComponent } from './event-fitering/event-fitering.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { BananaBindingComponent } from './banana-binding/banana-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        FlexLayoutModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MomentModule ,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        PropertyBindingComponent,
        AttributeBindingComponent,
        ClassBindingComponent,
        StyleBindingComponent,
        EventBindingComponent,
        EventFiteringComponent,
        TemplateVariableComponent,
        BananaBindingComponent,
        PipeComponent,
        CustomPipesComponent,
        SummaryPipe
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
