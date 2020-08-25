Feature('like');

Scenario('hashtag', (I) => {
    I.amOnPage('/');
    I.fillField('Phone number, username, or email', process.env.USERNAME);
    I.fillField('Password', process.env.PASSWORD);
    I.click('Log In');
    I.waitForText('Search', process.env.TIMEOUT);
    I.amOnPage(`/explore/tags/${process.env.HASHTAG}/`)
    I.waitForElement('.v1Nh3', process.env.TIMEOUT);
    I.click('.v1Nh3');

    let likes = process.env.LIKES;
    while(likes) {
        I.waitForElement({ css: "[placeholder='Add a comment…']" }, process.env.TIMEOUT);
        I.click('Like');
        I.click('Next');
        likes--;
    }
});
