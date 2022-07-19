import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PreloaderSpinnerComponent } from './preloader-spinner.component';

@NgModule({
  declarations: [PreloaderSpinnerComponent],
  imports: [MatProgressSpinnerModule],
  exports: [PreloaderSpinnerComponent],
})
export class PreloaderSpinnerModule {}
