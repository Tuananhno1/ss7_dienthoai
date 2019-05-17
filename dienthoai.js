let Mobile = function (name, battery) {
    this.name = name;
    this.battery = battery;
    this.saveMessage = [];
    this.inboxMessage = [];
    this.outboxMessage = [];
    this.status = true;
    this.setStatus = function (status) {
        if (this.reduceBattery()) {
            this.status = status;
        }
    };
    this.getStatus = function () {
        if (this.reduceBattery()) {
            return this.status;
        }
    };
    this.chargeBattery = function () {
        if (this.battery < 100) {
            this.battery++;
        }
    };
    this.writeMessage = function (message) {
        if (this.reduceBattery()) {
            this.saveMessage.push(message);
            return message;
        }
    };
    this.receiveMessage = function (message) {
        if (this.reduceBattery()) {
            this.inboxMessage.push(message);
        }
    };
    this.sendMessage = function (message) {
        if (this.reduceBattery()) {
            this.outboxMessage.push(message);
        }
    };
    this.viewInbox = function () {
        if (this.reduceBattery()) {
            return this.inboxMessage;
        }
    };
    this.viewSent = function () {
        if (this.reduceBattery()) {
            return this.outboxMessage;
        }
    };
    this.reduceBattery = function () {
        if (this.battery > 0) {
            this.battery--;
        } else {
            this.status = false;
            console.log(this.name + " het pin roi!");
        }
        return this.status;
    };
};
function script() {
    let iPhone = new Mobile("iPhone", 80);
    let nokia = new Mobile("Nokia", 90);
    let messageFromNokia = nokia.writeMessage('I love you !');
    nokia.sendMessage(messageFromNokia);
    iPhone.receiveMessage(messageFromNokia);
    let iPhoneInboxMessage = iPhone.viewInbox();
    if (iPhoneInboxMessage && iPhoneInboxMessage.length) {
        console.log(iPhoneInboxMessage[iPhoneInboxMessage.length - 1]);
    }
}
script();