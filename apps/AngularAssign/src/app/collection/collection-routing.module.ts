import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCollectionsComponent } from './my-collections/my-collections.component';

const routes: Routes = [
  { path: 'myCollections', component: MyCollectionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionRoutingModule {}
