import { Controller } from "../vendors/stimulus.js";
import { sendData } from "../webSocketsCli.js";
import { getLang } from "../mixins/miscellaneous.js";

export default class extends Controller {

  changePage(event) {
    event.preventDefault();
    // Add all data-* attributes to the data object
    let data = {};
    const omitKeys = ["action", "controller", "page"];
    for (const [key, value] of Object.entries(event.currentTarget.dataset)) {
      // Omit omitKeys
      if (!omitKeys.includes(key)) {
        data[key] = value;
      }
    }
    // Send the data to the server
    sendData({action: `${event.currentTarget.dataset.page}->send_page`, data: data});
  };
}
