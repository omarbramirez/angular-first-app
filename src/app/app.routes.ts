import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductComponent},
    {path: 'products/:color/:productId', component: ProductDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
