import {join} from 'path';

import {SeedConfig} from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Mailman Web Portal';

    // Add third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: "", inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      {src: `${this.APP_SRC}/mixer/mixer.min.css}`, inject: true, vendor: false},
      {src: `${this.APP_SRC}/mixer/mixer.min.js}`, inject: true, vendor: false},
    ];


    /* Add to or override NPM module configurations: */
    //this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
