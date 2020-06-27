Feature('login');

Scenario('test something', (I) => {
    I.amOnPage('index.html');
    I.click('#signin_button');
    I.fillField('#user_login', 'username');
    I.fillField('#user_password', 'password');
    I.click('.btn-primary');
    I.see("Cash Accounts");
    pause()
});
