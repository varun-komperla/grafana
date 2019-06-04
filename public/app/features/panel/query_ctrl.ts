import _ from 'lodash';
import { ExploreMode } from 'app/types';

export class QueryCtrl {
  target: any;
  datasource: any;
  panelCtrl: any;
  panel: any;
  hasRawMode: boolean;
  error: string;
  isLastQuery: boolean;
  mode: ExploreMode;

  constructor(public $scope, public $injector) {
    this.panel = this.panelCtrl.panel;
    this.isLastQuery = _.indexOf(this.panel.targets, this.target) === this.panel.targets.length - 1;

    if (!this.mode) {
      this.mode = ExploreMode.Metrics;
    }
  }

  refresh() {
    this.panelCtrl.refresh();
  }
}
