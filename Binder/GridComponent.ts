import {Component,Input,Output,EventEmitter} from "@angular/core"

@Component({
    selector: "grid-ui",
    templateUrl : "Grid.html"
})
export class GridComponent {
    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();
    gridData: Array<Object> = new Array<Object>();
    gridColumns: Array<Object> = new Array<Object>();

    @Input("grid-entityname")
    EntityName: string = "";

    @Input("grid-data")
    set gridDataSet(_gridData: Array<Object>) {

        if (_gridData.length > 0) {
            // fill the column names in the grid Columns collection
            if (this.gridColumns.length == 0) {
                var columnames = Object.keys(_gridData[0]);                
                this.gridColumns = new Array<Object>();
                for (var index in columnames) {
                    this.gridColumns.push(columnames[index]);
                }
                
            }
            this.gridData = _gridData;
        }
        
    }
    Select(_selected: Object) {
        this.selected.emit(_selected);
    }

}