import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { OwoceComponent } from './owoce/owoce.component';
import { PostsComponent } from './posts/posts.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {path: 'owoce', component: OwoceComponent},
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'todos', component: ToDoListComponent},
  {path: 'box', component: BoxComponent},
  {path: 'posts', component: PostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
