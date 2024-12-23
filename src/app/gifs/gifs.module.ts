import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        HomePageComponent,
        SearchComponent,
        CardListComponent,
        CardComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class GifsModule { }
