import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
} from '@angular/core';

import { SPACE, ENTER } from '../../free/utils/keyboard-navigation';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mdb-tree',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdbTreeComponent implements OnInit {
  @HostBinding('class.mdb-tree')
  @Output()
  checked = new EventEmitter();
  @Output() checkedKeys = new EventEmitter();
  @Output() nodesChanged = new EventEmitter();
  @Input() nodes: any;
  @Input() textField: string;
  @Input() childrenField: string;
  @Input() checkboxesField: string;

  @Input() set expandAll(v: BooleanInput) {
    const value = coerceBooleanProperty(v);

    if (this.nodes && this.nodes.entries()) {
      this._expandAll = value;
      this.toggleExpandAll();
    }
  }

  @Input()
  get checkboxes(): boolean {
    return this._checkboxes;
  }
  set checkboxes(value: BooleanInput) {
    this._checkboxes = coerceBooleanProperty(value);
  }
  private _checkboxes = false;

  @Input()
  get toggleOnTitleClick(): boolean {
    return this._toggleOnTitleClick;
  }
  set toggleOnTitleClick(value: BooleanInput) {
    this._toggleOnTitleClick = coerceBooleanProperty(value);
  }
  private _toggleOnTitleClick = false;

  private _expandAll = false;
  checkedValues: string[] = [];
  toggle: any = {};

  constructor(private _cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.nodes && this.nodes.entries()) {
      this._setInitialCheckedKeys();
    }
  }

  toggleExpandAll() {
    if (this._expandAll) {
      this.expandAllNodes();
    } else if (!this._expandAll) {
      this.closeAllNodes();
    }
  }

  expandAllNodes() {
    for (const [index, node] of this.nodes.entries()) {
      const idx = index;
      this.toggle[idx] = true;
      if (node[this.childrenField] && node[this.childrenField].length > 0) {
        this._expandAllChildren(node, idx);
      }
    }
  }

  closeAllNodes() {
    for (const [index, node] of this.nodes.entries()) {
      const idx = index;
      this.toggle[idx] = false;
      if (node[this.childrenField] && node[this.childrenField].length > 0) {
        this._closeAllChildren(node, idx);
      }
    }
  }

  private _expandAllChildren(node: any, idx: string) {
    for (const [childIndex, childNode] of node[this.childrenField].entries()) {
      const childIdx = idx + '_' + childIndex;
      this.toggle[childIdx] = true;
      if (childNode[this.childrenField] && childNode[this.childrenField].length > 0) {
        this._expandAllChildren(childNode, childIdx);
      }
    }
  }

  private _closeAllChildren(node: any, idx: string) {
    for (const [childIndex, childNode] of node[this.childrenField].entries()) {
      const childIdx = idx + '_' + childIndex;
      this.toggle[childIdx] = false;
      if (childNode[this.childrenField] && childNode[this.childrenField].length > 0) {
        this._closeAllChildren(childNode, childIdx);
      }
    }
  }

  private _setInitialCheckedKeys() {
    for (const [index, node] of this.nodes.entries()) {
      if (node[this.checkboxesField]) {
        const idx = index;
        this.checkedValues.push(idx);
        if (node[this.childrenField] && node[this.childrenField].length > 0) {
          this._hasInitialCheckedKeysChildren(node[this.childrenField], idx);
        }
      }
    }
  }

  private _hasInitialCheckedKeysChildren(childrenNode: any, i: string) {
    for (const [childrenIdx, node] of childrenNode.entries()) {
      const idx = childrenIdx + '_' + i;

      if (node[this.checkboxesField]) {
        this.checkedValues.push(idx);
      }
      if (node[this.childrenField] && node[this.childrenField].length > 0) {
        this._hasInitialCheckedKeysChildren(node[this.childrenField], idx);
      }
    }
  }

  toggleByNode(i: string) {
    for (const [index, node] of this.nodes.entries()) {
      if (node[this.childrenField] && node[this.childrenField].length > 0) {
        const idx = index;
        const toggleIdx = i;
        if (idx === toggleIdx) {
          this.toggle[idx] = !this.toggle[idx];
          this._cdRef.markForCheck();
        } else {
          this._childrenToggleByNode(node, idx, toggleIdx);
        }
      }
    }
  }

  private _childrenToggleByNode(node: any, i: string, toggleIdx: string) {
    for (const [childIndex, childNode] of node[this.childrenField].entries()) {
      const nodeHasChildren =
        childNode[this.childrenField] && childNode[this.childrenField].length > 0;
      if (nodeHasChildren) {
        const idx = i + '_' + childIndex;
        if (idx === toggleIdx) {
          this.toggle[idx] = !this.toggle[idx];
          this._cdRef.markForCheck();
        } else {
          this._childrenToggleByNode(childNode, idx, toggleIdx);
        }
      } else {
        return;
      }
    }
  }

  onKeydownCheckbox(e: KeyboardEvent, node: any, i: any) {
    if (e.keyCode === SPACE || e.keyCode === ENTER) {
      e.preventDefault();
      this.checkNodes(node);
      this.updateNodesCheckedValues(node, i);
    }
  }

  onKeydown(e: KeyboardEvent, i: any) {
    if (e.keyCode === SPACE || e.keyCode === ENTER) {
      e.preventDefault();
      this.toggle[i] = !this.toggle[i];
    }
  }

  checkNodes(node: any) {
    setTimeout(() => {
      node[this.checkboxesField] = !node[this.checkboxesField];
      this.checked.emit(node);
      this.nodesChanged.emit(this.nodes);
    }, 0);
    const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
    if (nodeHasChildren) {
      this._checkChildNodes(node[this.childrenField], !node[this.checkboxesField]);
    }
    this._cdRef.markForCheck();
  }

  private _checkChildNodes(children: any, checked: boolean) {
    children.forEach((childNode: any) => {
      if (childNode[this.checkboxesField] !== undefined) {
        childNode[this.checkboxesField] = checked;
        const nodeHasChildren =
          childNode[this.childrenField] && childNode[this.childrenField].length > 0;
        if (nodeHasChildren) {
          this._checkChildNodes(childNode[this.childrenField], checked);
        }
      }
    });
  }

  updateNodesCheckedValues(node: any, idx: any) {
    setTimeout(() => {
      if (node[this.checkboxesField] && !this.checkedValues.includes(idx)) {
        this.checkedValues.push(idx);
      } else if (!node[this.checkboxesField] && this.checkedValues.includes(idx)) {
        const removeIndex = this.checkedValues.findIndex((e) => e === idx);

        if (removeIndex !== -1) {
          this.checkedValues.splice(removeIndex, 1);
        }
      }
      const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
      if (nodeHasChildren) {
        this._updateChildNodesCheckedValues(node[this.childrenField], idx);
      }
      this.checkedKeys.emit(this.checkedValues);
    }, 0);
  }

  private _updateChildNodesCheckedValues(childrenNode: any, childrenIdx: string) {
    for (const [index, node] of childrenNode.entries()) {
      const idx = childrenIdx + '_' + index;

      if (node[this.checkboxesField] && !this.checkedValues.includes(idx)) {
        this.checkedValues.push(idx);
      } else if (!node[this.checkboxesField] && this.checkedValues.includes(idx)) {
        const removeIndex = this.checkedValues.findIndex((e) => e === idx);
        if (removeIndex !== -1) {
          this.checkedValues.splice(removeIndex, 1);
        }
      }
      const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
      if (nodeHasChildren) {
        this._updateChildNodesCheckedValues(node[this.childrenField], idx);
      }
    }
  }
}
