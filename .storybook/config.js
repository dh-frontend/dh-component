import { configure, setAddon} from '@kadira/storybook';
// import infoAddon from '@kadira/react-storybook-addon-info';
import '../src/index.scss';
// setAddon(infoAddon)
// // setOptions({
// //   name: 'CUSTOM-OPTIONS',
// //   url: 'https://github.com/kadirahq/storybook-addon-options',
// //   goFullScreen: false,
// //   showLeftPanel: false,
// //   showDownPanel: false,
// //   showSearchBox: false,
// //   downPanelInRight: false,
// //   sortStoriesByKind: false,
// // });
function loadStories() {
  require('../stories/button');
  require('../stories/list');
}
configure(loadStories, module);
