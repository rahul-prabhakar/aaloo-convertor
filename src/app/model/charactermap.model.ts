export class CharacterMap {
    id: number;
    unicodeValue: string;
    replaceValue: string;
    editable = false;
    constructor(id: number, unicodeChar: string, fontChar: string) {
        this.id = id;
        this.unicodeValue = unicodeChar;
        this.replaceValue = fontChar;
    }
}
