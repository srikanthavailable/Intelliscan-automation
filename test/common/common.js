module.exports = {
    goToHome: function (browser) {
        browser.click('.nav-item.home .home-icon');
        browser.expect.element('.cards-section').to.be.visible;
    },

    getNumberOfRows: function (browser, loc) {

        var numRows;

        return new Promise(function (resolve, reject) {

            browser.elements('css selector', loc, function (response) {

                // Get number of rows in portfolio

                numRows = response.value.length;

            });
            browser.perform(function (browser, done) {
                done();
                resolve(numRows);

            })

        });

    },

    serviceTicketHeader: function (browser) {
        var totalCount, newCount, assignedCount, inProgressCount, requestInfoCount, reviewCount, reopenCount, overdueCount;
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(1) .count').to.be.visible;

        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(2) .count').to.be.visible;
        browser.getText('.service-tickets-summary-header-item-wrapper:nth-child(2) .count', function (res) {
            newCount = parseInt(res.value);
        });
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(3) .count').to.be.visible;
        browser.getText('.service-tickets-summary-header-item-wrapper:nth-child(3) .count', function (res) {
            assignedCount = parseInt(res.value);
        });
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(4) .count').to.be.visible;
        browser.getText('.service-tickets-summary-header-item-wrapper:nth-child(4) .count', function (res) {
            inProgressCount = parseInt(res.value);
        });
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(5) .count').to.be.visible;
        browser.getText('.service-tickets-summary-header-item-wrapper:nth-child(5) .count', function (res) {
            requestInfoCount = parseInt(res.value);
        });
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(6) .count').to.be.visible;
        browser.getText('.service-tickets-summary-header-item-wrapper:nth-child(6) .count', function (res) {
            reviewCount = parseInt(res.value);
        });
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(7) .count').to.be.visible;
        browser.getText('.service-tickets-summary-header-item-wrapper:nth-child(7) .count', function (res) {
            reopenCount = parseInt(res.value);
        });
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(8) .count').to.be.visible;
        browser.getText('.service-tickets-summary-header-item-wrapper:nth-child(8) .count', function (res) {
            overdueCount = parseInt(res.value);
        });
        browser.perform(function (browser, done) {
            totalCount = newCount + assignedCount + inProgressCount + requestInfoCount + reviewCount + reopenCount + overdueCount;
            // browser.assert.containsText('.service-tickets-summary-header-item:nth-child(1) .count',totalCount);
            done();
        })
    },
    serviceTicket: function (browser, locator) {
        var name;
        browser.expect.element(locator).to.be.visible;
        var loc = locator + ' ' + '.name';
        browser.getText(loc, function (res) {
            name = res.value;
            browser.click(locator);
        })
        browser.perform(function (browser, done) {

            var locate = ".service-tickets-summary-content .service-ticket-table tbody tr";

            module.exports.getNumberOfRows(browser, locate).then(function (rows) {

                for (var i = 1; i <= rows; i++) {
                    browser.assert.containsText('.service-tickets-summary-content .service-ticket-table tbody tr:nth-child(' + (i++) + ') td:nth-child(1)', name);
                }
            });
        })

    },
    clickArchive:function(browser,locator){
        module.exports.goToHome(browser);
        browser.click('.nav-items-wrapper .service-ticket-icon');
        browser.expect.element('.service-tickets-summary-header .service-tickets-summary-header-item-wrapper.archived .archive-svg').to.be.visible;
        browser.click('.service-tickets-summary-header .service-tickets-summary-header-item-wrapper.archived .archive-svg');
        browser.expect.element('.service-tickets-summary-header-item-wrapper.active').to.be.visible;
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(2)').to.be.visible;
        browser.expect.element('.service-tickets-summary-header-item-wrapper:nth-child(3)').to.be.visible;
        
    },
    
    serviceTicketStatusCard: function (browser, name) {
        return new Promise(function (resolve, reject) {
            browser.pause(1000);
            var locator = '.service-tickets-summary-header-item-wrapper.active .name';
            browser.expect.element(locator).to.be.visible;
            browser.assert.containsText(locator, name);
            module.exports.goToHome(browser);

            resolve(true);
        })
    },
    serviceIteration: function (browser, loc) {
        return new Promise(function(resolve, reject){
            browser.getText(loc, function (res) {
                name = res.value;
                browser.click(loc);
                module.exports.serviceTicketStatusCard(browser, name).then(function (res) {
                    resolve(res);
                })
            });
        });
    },
    needAttention:function(browser,i){
        return new Promise(function(resolve,reject){
            var locator2 = '.attention-card-box .need-attention-cards-section .need-attention-card-box:nth-child('+(i)+') .emp-details-need-attention .need-att-emp-id';
            browser.expect.element(locator2).to.be.visible;
            browser.getText(locator2, function (res) {
                id = res.value;
                browser.click(locator2);
                browser.expect.element('.section-title.mobile-hide .service-ticket-id').to.be.visible;
                browser.assert.containsText('.section-title.mobile-hide .service-ticket-id', id);
                browser.click('.home-icon');
            })
            resolve(true);
        });
    },

    needAttentionViewAll:function(browser,i){
        var name;
        return new Promise(function(resolve,reject){
            var loc='.need-attention-cards-section .need-attention-card-box:nth-child('+(i)+') .pointer';
            var locator='.need-attention-cards-section .need-attention-card-box:nth-child('+(i)+') .need-att-header-box .need-att-header-text'
            browser.getText(locator,function(res){
                name=res.value;
            });
            browser.perform(function(browser,done){
            if(i==1){
                browser.expect.element(loc).to.be.visible;
                browser.click(loc);
                browser.expect.element('.service-tickets-summary-header-item-wrapper.active').to.be.visible;
                browser.assert.containsText('.service-tickets-summary-header-item-wrapper.active','Total');
            }else{
                browser.expect.element(loc).to.be.visible;
                browser.click(loc);
                browser.expect.element('.service-tickets-summary-header-item-wrapper').to.be.visible;
                browser.assert.containsText('.service-tickets-summary-header-item-wrapper.active',name);
            }
            done();
            resolve(true);
        });
        });
    },

    performanceVerification: function (browser, locator) {
        return new Promise(function(resolve,reject){
                browser.expect.element(locator).to.be.visible;
            browser.getText(locator, function (res) {
                name = res.value;
                browser.click(locator);
                browser.expect.element('.performance-metrics-details-box .performance-metrics-title').to.be.visible;
                browser.assert.containsText('.performance-metrics-details-box .performance-metrics-title', name);
            });
            resolve(true);
        });
    },
    users:function(browser,loc,rows){
        for(var i=1;i<=rows;i++){
        var locate=loc+''+':nth-child('+(i)+')';
        browser.moveToElement(locate,1,1,function(){
            browser.getText(locate+' '+'td:nth-child(1) .customer-details .customer-details-block .customer-id',function(res){
                id=res.value;
            browser.expect.element(locate+' '+'td:nth-child(6) .edit-icon').to.be.visible;
            browser.click(locate+' '+'td:nthchild(6) .edit-icon');
            browser.expect.element('.create-service-request-header').to.be.visible;
            browser.expect.element('.create-service-popup-main-content .customer-id-details').to.be.visible;
            browser.assert.containsText('.create-service-popup-main-content .customer-id-details',id);
        })
        browser.getText(locate+' '+'td:nth-child(1) .customer-details .customer-name',function(res){
            name=res.value;
            browser.click(locate+' '+'td:nth-child(1) .customer-details .customer-name');
            browser.expect.element('.user-details-section .header-list .configuration-hdr').to.be.visible;
            browser.assert.containsText('.user-details-section .header-list .configuration-hdr',name);
        });
    });
    }
},
customers:function(browser,loc,rows){
    for(var i=1;i<rows;i++){
        var locate=loc+''+':nth-child('+(i)+')';
        browser.moveToElement(locate,1,1,function(){
            browser.expect.element(locate+' '+'td:nth-child(6) .edit-icon').to.be.visible;
            browser.click(locate+' '+'td:nth-child(6) .edit-icon');
            browser.expect.element('.add-customer-request-header .add-customer-steps-list').to.be.visible;
        });
    }
},
invoiceTest:function(browser,loc,rows){
    for(var i=1;i<rows;i++){
        var locate=loc+''+':nth-child('+(i)+')';
        browser.moveToElement(locate,1,1,function(){
            browser.expect.element(locate+' '+'td:nth-child(8) .invoice-icon').to.be.visible;
        })
    }
},
cancelTest:function(browser,row,name){
    return new Promise(function(resolve,reject){
        browser.assert.containsText('.service-tickets-container .service-tickets-summary-content table tbody tr:nth-child('+(row)+') td .first-cell .ticket-status',name);
        resolve();
    })
    
},
invoiceOutstanding:function(browser,loc){
    var sum;
    return new Promise(function(resolve,reject){
         browser.getText(loc,function(res){
        sum=res.value;
      
    });
    browser.perform(function(browser,done){
        done();
        resolve(sum);
    })
    
    });  
}
}