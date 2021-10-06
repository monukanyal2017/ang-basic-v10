import { NgModule } from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// require both
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatDialogModule} from '@angular/material/dialog';

const data = [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
    ]
@NgModule({
    imports: data,
    exports: data, 
    providers: [  
        MatDatepickerModule,
        MatNativeDateModule  
    ],
})

export class MaterialModule {}