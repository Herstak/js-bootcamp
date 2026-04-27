import * as api from "./api.js";
import * as ui from './ui.js';

ui.myButton.addEventListener('click', function(){
  ui.addUserName();
});

ui.myLoadButton.addEventListener('click', async function() {
  const newUsers = await api.getUsersData();
  if (newUsers.length > 0) {
    ui.users.push(...newUsers);
    ui.renderUsers();
  }
});