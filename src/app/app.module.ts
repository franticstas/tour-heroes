import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
import {HeroesComponent} from './heroes/heroes.component'
import {MessagesComponent} from './messages/messages.component'
import {InMemoryDataService} from './in-memory-data.service'
import { HeroSearchComponent } from './hero-search/hero-search.component'
import { StoreModule } from '@ngrx/store'
import { counterReducer } from './store/counter.reducer'
import { MyCounterComponent } from './my-counter/my-counter.component'
import { environment } from 'src/environments/environment'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookListComponent } from './book-list/book-list.component'
import { BookCollectionComponent } from './book-collection/book-collection.component'
import { booksReducer } from './state/books.reducer'
import { collectionReducer } from './state/collection.reducer'


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    StoreModule.forRoot({count: counterReducer, books: booksReducer, collection: collectionReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
