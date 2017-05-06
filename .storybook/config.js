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

function loadStories() {
  require('../stories/button');
  require('../stories/list');
  require('../stories/tooltip');
  require('../stories/popover');
  require('../stories/carousel');
}
configure(loadStories, module);
