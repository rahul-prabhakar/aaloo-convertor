import {CharacterMap} from './charactermap.model';
export class Font {
	id: number;
	
	replacements: CharacterMap[];
	constructor(public name:string) {
		this.name = name;
		this.id = 0;
		this.replacements = [];
	}
}