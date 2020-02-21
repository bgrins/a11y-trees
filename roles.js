// Built from https://searchfox.org/mozilla-central/source/accessible/base/RoleMap.h
// Copy in the contents of that file and then
// VSCode: Find with regex ".*" and then alt+enter to select all

let ROLE_MAP = {
  nothing: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  titlebar: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  menubar: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  scrollbar: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  grip: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  sound: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  cursor: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  caret: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  alert: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  window: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "internal frame": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  menupopup: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  menuitem: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  tooltip: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  AXHelpTag: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  application: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  document: {
    render(treeItem, children) {
      let container = document.createElement("h1");
      container.textContent = `${treeItem.name}`;
      return [container, ...children];
    }
  },
  AXWebArea: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  pane: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  chart: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  dialog: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  border: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  grouping: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  separator: {
    render(treeItem, children) {
      let container = document.createElement("hr");
      return [container];
    }
  },
  toolbar: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  statusbar: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  table: {
    render(treeItem, children) {
      let container = document.createElement("table");
      container.append(...children);
      return [container];
    }
  },
  columnheader: {
    render(treeItem, children) {
      let container = document.createElement("th");
      container.append(...children);
      return [container];
    }
  },
  rowheader: {
    render(treeItem, children) {
      let container = document.createElement("th");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  column: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  row: {
    render(treeItem, children) {
      let container = document.createElement("tr");
      container.append(...children);
      return [container];
    }
  },
  cell: {
    render(treeItem, children) {
      let container = document.createElement("td");
      container.append(...children);
      return [container];
    }
  },
  link: {
    render(treeItem, children) {
      let container = document.createElement("a");
      container.href = treeItem.value;
      container.append(...children);
      return [container, " "];
    }
  },
  AXLink: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  helpballoon: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  AXHelpTag: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  character: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  list: {
    render(treeItem, children) {
      let tag = treeItem.attributes.tag == "ol" ? "ol" : "ul";
      let container = document.createElement(tag);
      container.append(...children);
      return [container];
    }
  },
  listitem: {
    render(treeItem, children) {
      let container = document.createElement("li");
      container.append(...children);
      return [container];
    }
  },
  outline: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  outlineitem: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  pagetab: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  propertypage: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  indicator: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  graphic: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  statictext: {
    render(treeItem, children) {
      if (treeItem.name == "") {
        return [];
      }
      return [treeItem.name];
    }
  },
  "text leaf": {
    render(treeItem, children) {
      return [treeItem.name];
      // Leafs will be rendered by parents via name. XXX is that always true?
      // return [];
    }
  },
  pushbutton: {
    render(treeItem, children) {
      let container = document.createElement("button");
      container.append(...children);
      return [container];
    }
  },
  checkbutton: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  radiobutton: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "1": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  combobox: {
    render(treeItem, children) {
      let container = document.createElement("label");
      container.textContent = `${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  droplist: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  progressbar: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  dial: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  hotkeyfield: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  slider: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  spinbutton: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  diagram: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  animation: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  equation: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  buttondropdown: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  buttonmenu: {
    render(treeItem, children) {
      // XXX copy over
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  buttondropdowngrid: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  whitespace: {
    render(treeItem, children) {
      return [treeItem.name];
    }
  },
  pagetablist: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  clock: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  splitbutton: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  ipaddress: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "accel label": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  arrow: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  canvas: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "check menu item": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "color chooser": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "date editor": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "desktop icon": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "desktop frame": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "directory pane": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "file chooser": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "font chooser": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "chrome window": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "glass pane": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "html container": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  icon: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  label: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "layered pane": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "option pane": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "password text": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "popup menu": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "radio menu item": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "root pane": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "scroll pane": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "split pane": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "table column header": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "table row header": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "tear off menu item": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  terminal: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "text container": {
    render(treeItem, children) {
      return [...children];
    }
  },
  "toggle button": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "tree table": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  viewport: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  header: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  footer: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  paragraph: {
    render(treeItem, children) {
      let container = document.createElement("p");
      container.append(...children);
      return [container];
    }
  },
  ruler: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  AXRuler: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  autocomplete: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  editbar: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  entry: {
    render(treeItem, children) {
      // XXX: [relations] is missing from JSON export but would be needed to set up
      // proper labeling on i.e. amazon.com.
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  caption: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "non-native document": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  heading: {
    render(treeItem, children) {
      let tag = treeItem.attributes.tag;
      let container = document.createElement(tag); // XXX: make sure it's an h tag
      container.append(...children);
      return [container];
    }
  },
  AXHeading: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  page: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  section: {
    render(treeItem, children) {
      // XXX: section with only another section child could be ignored
      let container = document.createElement("div");
      container.append(...children);
      return [container];
    }
  },
  "redundant object": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  form: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  ime: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "app root": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "parent menuitem": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  calendar: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "combobox list": {
    render(treeItem, children) {
      let container = document.createElement("select");
      container.append(...children);
      return [container];
    }
  },
  "combobox option": {
    render(treeItem/*, children*/) {
      let container = document.createElement("option");
      container.textContent = `${treeItem.name}`;
      return [container];
    }
  },
  "image map": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "listbox option": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "listbox rich option": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  listbox: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "flat equation": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  gridcell: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "embedded object": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  note: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  figure: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "check rich option": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  definitionlist: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  term: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  definition: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  key: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  switch: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  math: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml identifier": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml number": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml operator": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml text": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml string literal": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml glyph": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml row": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml fraction": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml square root": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml root": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml fenced": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml enclosed": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml style": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml sub": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml sup": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml sub sup": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml under": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml over": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml under over": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml multiscripts": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml table": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml labeled row": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml table row": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml cell": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml action": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml error": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml stack": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml long division": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml stack group": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml stack row": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml stack carries": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml stack carry": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "mathml stack line": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  grouping: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  text: {
    render(treeItem, children) {
      return [...children];
    }
  },
  details: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  summary: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  landmark: {
    render(treeItem, children) {
      let role = treeItem.attributes["xml-roles"];
      // What should we do with this information?
      /*
      role=”banner”
      role=”navigation” (e.g., a menu)
      role=”main” (the main content of the page)
      role=”complementary” (e.g., a sidebar)
      role=”contentinfo” (meta data about the page, e.g., a copyright statement)
      role=”search”
      role=”form”
      role=”application” (a web application with its own keyboard interface)
      */
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${role}`;
      container.append(...children);
      return [container];
    }
  },
  navigation: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  footnote: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  article: {
    render(treeItem, children) {
      let container = document.createElement("article");
      container.append(...children);
      return [container];
    }
  },
  region: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  editcombobox: {
    render(treeItem, children) {
      let container = document.createElement("label");
      container.textContent = `${treeItem.name}`;
      let input = document.createElement("input");
      container.appendChild(input);
      return [container];
    }
  },
  blockquote: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "content deletion": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  "content insertion": {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  form: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  },
  mark: {
    render(treeItem, children) {
      let container = document.createElement("div");
      container.textContent = `${treeItem.role}: ${treeItem.name}`;
      container.append(...children);
      return [container];
    }
  }
};
