import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { MaterialModule } from '../../material.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CardComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [CardComponent],
  entryComponents: [ConfirmationComponent],
})
export class CardModule {
}
