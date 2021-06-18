import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CollectionRoutingModule } from './collection-routing.module';
import { MyCollectionsComponent } from './my-collections/my-collections.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MyCollectionsComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CollectionModule {}
