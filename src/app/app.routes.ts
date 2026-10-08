import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

    {path:"", component: Home},
    {path:"products", component: Products},
    {path:"contact", component: Contact},
    {path:"**", component: NotFound}

];
