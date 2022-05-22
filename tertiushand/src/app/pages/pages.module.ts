import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicModule } from './public/public.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicModule,
    UserModule
  ]
})
export class PagesModule { }
