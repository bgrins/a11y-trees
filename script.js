
let ACTIVE_ACC_TREE = null;
let sites = document.querySelector("#sites");
async function fetchSelected() {
  let url = `./json/${sites.value}`;
  let resp = await fetch(url);
  ACTIVE_ACC_TREE = await resp.json();
  buildAccTree(ACTIVE_ACC_TREE);
}

sites.onchange = async function() {
  fetchSelected();
};
fetchSelected();

function isDebug() {
  return debugCheckbox.checked;
}

let debugCheckbox = document.querySelector("#debug");
debugCheckbox.onchange = () => {
  buildAccTree(ACTIVE_ACC_TREE);
};

function renderDebugContainer(treeItem, children) {
  let details = document.createElement("details");
  details.toggleAttribute("open");
  details.setAttribute(
    "title",
    JSON.stringify(
      Object.assign({}, treeItem, { children: undefined }),
      null,
      2
    )
  );
  let summary = document.createElement("summary");
  summary.textContent = `${treeItem.role}: ${treeItem.name}`;
  details.append(summary, ...children);
  return [details];
}

function buildAccTree(accTree) {
  // document.querySelector("#content").textContent = buildAccTreeElement(accTree);
  let content = document.querySelector("#content");
  content.innerHTML = "";
  let element = buildAccTreeElement(accTree);
  content.append(...element);
}

function buildAccTreeElement(accTree) {
  let children = accTree.children
    .map(c => {
      return buildAccTreeElement(c);
    })
    .flat();
  let currentNode = accTree;
  console.log(currentNode.role, children);
  let role = ROLE_MAP[currentNode.role];

  if (!role) {
    throw new Error(`Unknown role: ${currentNode.role}`);
  }

  if (isDebug()) {
    return renderDebugContainer(currentNode, children);
  }

  return role.render(currentNode, children);

  /*
  XXX: move these into roles.js

  if (currentNode.role == "link") {
    let a = document.createElement("a");
    a.href = currentNode.value;
    a.textContent = currentNode.name;
    return a.outerHTML;
  }

  if (currentNode.role == "graphic") {
    if (currentNode.attributes.src) {
      let img = document.createElement("img");
      img.setAttribute("src", currentNode.attributes.src);
      console.log(currentNode.attributes.src);
      return img.outerHTML;
    }
    return "";
  }
  if (currentNode.role == "text leaf") {
    return currentNode.name;
  }
  if (currentNode.role == "document") {
    return `<h2>${accTree["name"]}</h2><div>${children}</div>`;
  }
*/

}
