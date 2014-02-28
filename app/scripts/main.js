/* global DataSet, ChartView, AccountsView, Accounts, AddAccountView, SettingsView */

var dataset = new Accounts();
dataset.add({ name: 'First Financial', rate: 5 });
dataset.add({ name: 'Secondary Savings', rate: 4.5 });

var chartView = new ChartView({ collection: dataset });
chartView.render();

var accountsView = new AccountsView({ collection: dataset });
accountsView.render();

var addAccountsView = new AddAccountView({ collection: dataset });
addAccountsView.render();

var settingsView = new SettingsView({ collection: dataset });
settingsView.render();