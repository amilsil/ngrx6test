import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { counterReducer } from './counter/counter.reducer';
import { environment } from '../environments/environment';
import { OrgEffects } from './orgs/org.effects';
import { OrgService } from './orgs/org.service';
import { orgReducer } from './orgs/orgs.reducer';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ count: counterReducer, orgs: orgReducer }),
        EffectsModule.forRoot([OrgEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
    ],
    providers: [OrgService],
    bootstrap: [AppComponent],
})
export class AppModule {}
