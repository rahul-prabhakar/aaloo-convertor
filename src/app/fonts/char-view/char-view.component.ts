import { Component, OnInit, Input } from '@angular/core';
import { CharacterMap } from '../../model/charactermap.model';
@Component( {
    selector: 'app-char-view',
    templateUrl: './char-view.component.html',
    styleUrls: ['./char-view.component.css']
} )
export class CharViewComponent implements OnInit {

    @Input() charMap: CharacterMap;
    @Input() font: string;
    constructor() { }
    ngOnInit() {
    }

}
