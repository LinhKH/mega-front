import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CartComponent } from "./components/cart/cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ProductComponent } from "./components/product/product.component";
import { ThankyouComponent } from "./components/thankyou/thankyou.component";
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryDetailComponent } from './components/categories/category-detail/category-detail.component';
import { StoresComponent } from './components/stores/stores.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'stores', component: StoresComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'product/:id', component: ProductComponent
    },
    {
        path: 'categories', component: CategoriesComponent
    },
    {
        path: 'category/:catName', component: CategoryDetailComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'checkout', component: CheckoutComponent
    },
    {
        path: 'thankyou', component: ThankyouComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
