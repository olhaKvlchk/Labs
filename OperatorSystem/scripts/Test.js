let manager = new Manager();
var tariff1 = new Tariff('Simple Tariff', ['short'], 30);

var tariff2 = new Tariff('All inclusive', ['short', 'middle', 'large', 'extra large'], 100);
var user1 = new User('097654', 568);
var user2 = new User('089', 8945);
var mess1 = new Message('097654', '089', 'mess1');
var mess2 = new Message('097654', '089', 'mesjhkhs1');
var mess3 = new Message('097654', '089', 'meshbmbhs1');

var mess4 = new Message('089', '097654', 'bodykjfffffffffffffffffsfdsfsfsfdffggddddddddgfdddddddddddgfdfgfkjkjkjmess2');



manager.addTariff(tariff2);
manager.addTariff(tariff1);
manager.addUser(user1);
manager.addUser(user2);
manager.setUserTariff('097654', 'Simple Tariff');
manager.setUserTariff('089', 'All inclusive');
manager.withdrawPayOfTariff('097654', manager.notifyAboutWithdraw);
//manager.withdrawPayOfTariff('089', manager.notifyAboutWithdraw);
//manager.sendMessagesAsync(mess1, mess2, mess3);
//manager.addUser(user2);
//manager.addMessage(mess1);
// manager.sendMessageAsync(mess2)
// manager.sendMessageAsync(mess3)
// manager.sendMessageAsync(mess1)
// manager.sendMessageAsync(mess4)
// manager.sendMessageAsync(mess3)

//manager.addMessage(mess1);