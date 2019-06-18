import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';

import { FlagsSelectorModalComponent } from './flags-selector-modal.component';
import { BaseSelectorBtnComponent } from '../base-selector/base-selector-btn.component';

@Component({
  selector: 'app-flags-selector-btn',
  templateUrl: '../base-selector/base-selector-btn.component.html',
  styleUrls: ['../base-selector/base-selector-btn.component.scss']
})
export class FlagsSelectorBtnComponent extends BaseSelectorBtnComponent {

  constructor(
    modalService: BsModalService,
  ) {
    super(
      FlagsSelectorModalComponent,
      modalService,
    );
  }
}