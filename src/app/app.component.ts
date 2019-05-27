import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { HomePage } from '../pages/home/home';
import { Childern } from '../pages/balpan/index';
import { Shasan } from '../pages/shasan/index';

import { YourDonatePoint } from '../pages/yourdonatepoint/index';
import { ExtraPoint } from '../pages/extraPoint/index';
import { WouldWork } from '../pages/wouldWork/index';
import { PublishBook } from '../pages/publishBook/index';
import { PublishMovies } from '../pages/publishMovies/index';
import { Dhangar } from '../pages/dhangar/index';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'मुख्यपान', component: HomePage },
      { title: 'बालपण', component: Childern },
      { title: 'शासक', component: Shasan },
      { title: 'त्यांच्याबद्दलची मते', component: YourDonatePoint },
      { title: 'आणखी मते', component: ExtraPoint },
      { title: 'देशभरातील कामे', component: WouldWork },
      { title: 'प्रकाशित पुस्तके', component: PublishBook },
      { title: 'प्रसिद्ध चित्रपट', component: PublishMovies },
      { title: 'हेही पाहा (धनगर)', component: Dhangar }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
