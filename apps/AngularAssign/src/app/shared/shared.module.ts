import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoiningPipe } from './joining.pipe';

@NgModule({
  declarations: [JoiningPipe],
  imports: [CommonModule],
  exports: [JoiningPipe],
})
export class SharedModule {}
