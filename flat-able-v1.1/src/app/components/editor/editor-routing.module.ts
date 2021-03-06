import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Editor',
      status: false
    },
    children: [
      {
        path: 'froala-edit',
        loadChildren: './froala-edit/froala-edit.module#FroalaEditModule'
      }, {
        path: 'quill-edit',
        loadChildren: './quill-edit/quill-edit.module#QuillEditModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
