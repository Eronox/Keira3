import { Component } from '@angular/core';

import { MultiRowEditorComponent } from '../../shared/multi-row-editor.component';
import { CreatureHandlerService } from '../../../../services/handlers/creature-handler.service';
import { SpawnsAddon } from '../../../../types/spawns-addon.type';
import { SpawnsAddonService } from '../../../../services/editors/creature/spawns-addon.service';
import { EMOTE } from '../../../../constants/options/emote';

@Component({
  selector: 'app-spawns-addon',
  templateUrl: './spawns-addon.component.html',
  styleUrls: ['./spawns-addon.component.scss']
})
export class SpawnsAddonComponent extends MultiRowEditorComponent<SpawnsAddon> {

  public readonly EMOTE = EMOTE;

  constructor(
    public editorService: SpawnsAddonService,
    public handlerService: CreatureHandlerService,
  ) {
    super(editorService, handlerService);
  }

}
