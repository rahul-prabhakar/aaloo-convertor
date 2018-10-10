import { NgModule } from '@angular/core';
import {MatGridListModule, MatGridTile, MatGridList, MatInputModule, MatInput,
     MatFormField, MatFormFieldModule, MatButtonModule, MatButton} from '@angular/material';
@NgModule({
imports : [MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule],
exports : [MatGridList, MatGridTile, MatInput, MatFormField, MatButton]
})
export class MaterialModule { }
