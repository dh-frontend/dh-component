import { configure, setAddon} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';

setAddon(infoAddon);
setOptions({
  name: 'datahunter API',
  url: 'https://github.com/kadirahq/storybook-addon-options',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});
import '../src/index.scss';
import 'antd/dist/antd.css';
import './test.scss';
function loadStories() {
  require('../stories/form/index.js');
  require('../stories/button/index.js');
  require('../stories/list/index.js');
  require('../stories/tooltip/index.js');
  require('../stories/popover/index.js');
  require('../stories/carousel/index.js');
  require('../stories/icon/index.js');
}
configure(loadStories, module);
