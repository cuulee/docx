import { XmlComponent } from "../xml-components";

export class RunProperties extends XmlComponent {

    constructor() {
        super("w:rPr");
    }

    public push(item: XmlComponent): void {
        this.root.push(item);
    }
}
