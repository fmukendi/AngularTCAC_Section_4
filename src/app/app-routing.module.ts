import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { ProductListComponent } from './products/index';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFiteringComponent } from './event-fitering/event-fitering.component';
import { BananaBindingComponent } from './banana-binding/banana-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'propertyBinding',
        component: PropertyBindingComponent
    },
    {
        path: 'attributeBinding',
        component: AttributeBindingComponent
    },
    {
        path: 'classBinding',
        component: ClassBindingComponent
    },
    {
        path: 'styleBinding',
        component: StyleBindingComponent
    },
    {
        path: 'eventBinding',
        component: EventBindingComponent
    },
    {
        path: 'eventFiltering',
        component: EventFiteringComponent
    },
    {
        path: 'templateVariable',
        component: TemplateVariableComponent
    },
    {
        path: 'bananaBinding',
        component: BananaBindingComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
    {
        path: 'customPipes',
        component: CustomPipesComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, ProductListComponent];