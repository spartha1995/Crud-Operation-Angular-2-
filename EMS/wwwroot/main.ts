import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'rxjs/Rx';

platformBrowserDynamic().bootstrapModule(AppModule);