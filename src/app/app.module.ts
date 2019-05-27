import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Childern } from '../pages/balpan/index';
import { Shasan } from '../pages/shasan/index';

import { YourDonatePoint } from '../pages/yourdonatepoint/index';
import { ExtraPoint } from '../pages/extraPoint/index';
import { WouldWork } from '../pages/wouldWork/index';
import { PublishBook } from '../pages/publishBook/index';
import { PublishMovies } from '../pages/publishMovies/index';
import { Dhangar } from '../pages/dhangar/index';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Childern,
Shasan,YourDonatePoint,ExtraPoint,WouldWork,PublishBook,PublishMovies,Dhangar
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Childern,Shasan,YourDonatePoint,ExtraPoint,WouldWork,PublishBook,PublishMovies,Dhangar
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
