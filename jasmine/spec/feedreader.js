/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* test suite about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* tests that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URL', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* tests that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });

    });


    /* test suite "The menu" */
    describe('the menu', function() {

        /* Test that ensures the menu element is
         * hidden by default
         */
        it('is hidden by default', function() {
            expect(document.body.className).toBe('menu-hidden');
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when icon is clicked', function() {
            var x = $('.menu-icon-link');
            x.click();
            expect(document.body.className).not.toBe('menu-hidden');
            x.click();
            expect(document.body.className).toBe('menu-hidden');
        });

    });

    /* test suite "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        var entries;
        beforeEach(function(done) {
            loadFeed(0, function() {
                entries = document.getElementsByClassName('entry');
                done();
            });
        });

        it('has entry', function(done) {
            expect(entries.length).not.toBe(0);
            done();
        });
    });

    /* test suite "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var entries;
        var entries2;
        beforeEach(function(done) {
            loadFeed(0, function() {
                entries = document.getElementsByClassName('entry')[0].innerText;
                done();
            });
        });

        it('changes content', function(done) {
            loadFeed(1, function() {
                entries2 = document.getElementsByClassName('entry');
                expect(entries).not.toEqual(entries2[0].innerText);
                done();
            });
        });
    });

}());