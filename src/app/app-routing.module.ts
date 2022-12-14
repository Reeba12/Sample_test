import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from './sign-up/sign-up.component';

const routes:Routes=[
    {
        path: "login", component: LoginComponent
    },
    {
        path: "", component: SignUpComponent
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,SignUpComponent]