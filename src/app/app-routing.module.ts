import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { BoxComponent } from './box/box.component';
import { OwoceComponent } from './owoce/owoce.component';
import { PostsComponent } from './posts/posts.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'owoce', component: OwoceComponent},
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'todos', component: ToDoListComponent},
  {path: 'box', component: BoxComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'users', component: UsersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
