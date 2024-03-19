import { Controller } from "../vendors/stimulus.js";
import { sendData } from "../webSocketsCli.js";
import { getLang } from "../mixins/miscellaneous.js";

export default class extends Controller {

  allData() {
    let data = {};
    const omitKeys = [
      "action",
      "controller",
      "page",
      "liveviewAction",
      "liveviewFunction"
    ];
    for (const [key, value] of Object.entries(event.currentTarget.dataset)) {
      // Omit omitKeys
      if (!omitKeys.includes(key)) {
        data[key] = value;
      }
    }
    return data;
  }

  changePage(event) {
    event.preventDefault();
    // Variables
    const page = event.currentTarget.dataset.page;
    // Check if the data is defined
    if (page === undefined) {
      console.error("data-page is not defined");
      return;
    }
    // Send the data to the server
    const myData = {action: `${page}->send_page`, data: this.allData()};
    console.debug(myData);
    console.debug(`Change page to ${page}`);
    sendData(myData);
  };

  run(event) {
    event.preventDefault();
    // Variables
    const liveviewAction = event.currentTarget.dataset.liveviewAction;
    const liveviewFunction = event.currentTarget.dataset.liveviewFunction;
    // Check if the data is defined
    if (liveviewAction === undefined || liveviewFunction === undefined) {
      console.error("data-liveview-action or data-liveview-function is not defined");
      return;
    }
    // Send the data to the server
    const myData = {action: `${liveviewAction}->${liveviewFunction}`, data: this.allData()};
    console.debug(myData);
    sendData(myData);
  };
}
