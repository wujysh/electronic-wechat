'use strict';
const {ipcRenderer} = require('electron');

class EscClose {
    static inject($event) {
        if ($event.keyCode === 27) {
            if ($('#userSelectionBox').css('display') != 'none' && !$('#userSelectionBox').is(":hover")) return;
            ipcRenderer.send('close-wechat');
        }
    }
}

module.exports = EscClose;
