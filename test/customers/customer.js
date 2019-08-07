var commonFun = require('../common/common.js');
describe('Customer test',function(browser){
var rows;
it('To check if the Intelliscan admin can log in', function (browser) {
    browser.init();
    browser.expect.element('.login-form-section').to.be.visible;
    browser.expect.element('.float-input:nth-child(1)').to.be.visible;
    browser.setValue('.float-input:nth-child(1)', ['asif@divami.com', browser.Keys.TAB]);
    browser.expect.element('.form-group:nth-child(2) .float-input').to.be.visible;
    browser.setValue('.form-group:nth-child(2) .float-input', 'Divami@123');
    browser.expect.element('.login-button').to.be.visible;
    browser.click('.login-button');
    browser.pause(1000);
    browser.expect.element('.dashboard-container').to.be.visible;
});

it('Check if the page is launched', function (browser) {
    browser.expect.element('.dashboard-container').to.be.visible;
    browser.expect.element('.cards-section').to.be.visible;
});
it('Click on customers icon in dashboard',function(browser){

    browser.expect.element('.side-nav-container .nav-items-wrapper .nav-item.invoice').to.be.visible;
    browser.click('.side-nav-container .nav-items-wrapper .nav-item.user');
    // browser.expect.element('.invoice-banks-section.customers-banks-section').to.be.visible;

 });

it('Click on add customer button',function(browser){
    browser.maximizeWindow();
    browser.expect.element('#headerBox .right-block ul.header-right-block .add-user-img-full ').to.be.visible;
    browser.click('#headerBox .right-block ul.header-right-block .add-user-img-full ');
    browser.pause(1000);
    // browser.expect.element('.form-popup-header').to.be.visible;
 });

it('Add customer details in the add customer page',function(browser){

    browser.pause(1000);
    browser.setValue('.company-details-section .infosys-logo-and-rounded-block #imageUplaod', require('path').resolve('C:/Users/Public/Pictures/srikanth.jpg'));
        
    browser.pause(1000);
    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) .ui-float-label #companyName').to.be.visible;
    browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) .ui-float-label #companyName','L&T');
    
    browser.pause(1000);
    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-inputtext').to.be.visible;
    browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-inputtext','S/W');
    
    browser.pause(1000);
    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input').to.be.visible;
    browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input','123');
    
    browser.pause(1000);
    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #pan').to.be.visible;
    browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #pan','MYPAN1234Z');
   
    browser.pause(3000);
    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(1) .ui-float-label .ui-inputtext ').to.be.visible;
    browser.click('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(1) .ui-float-label .ui-inputtext');
    browser.pause(3000);

    browser.expect.element('.ui-datepicker .ui-datepicker-calendar tbody tr td').to.be.visible;
    browser.click('.ui-datepicker .ui-datepicker-calendar tbody tr:nth-child(4) td:nth-child(2)');
    browser.pause(1000);

    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(2) .ui-float-label .ui-inputtext').to.be.visible;
    browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(2) .ui-float-label .ui-inputtext','29MYPAN1234Z9Z9');
    
    browser.pause(3000);
    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(4) .upload-attachment .upload-attachment-label').to.be.visible;
    browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(4) .upload-attachment .upload-attachment-label #fileUplaod', require('path').resolve('C:/Users/Public/Documents/camera.png'))
       
    browser.pause(4000);
    browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input').to.be.visible;
    browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input','KKD');

    browser.pause(3000);
    browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) #float-input').to.be.visible;
    browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) #float-input','532312');

    browser.pause(3000);
    browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) .ui-inputtext').to.be.visible;
    browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) .ui-inputtext','Chandigarh');

    browser.pause(3000);
    browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .ui-inputtext').to.be.visible;
    browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .ui-inputtext','Atawa');
    

    browser.pause(3000);
    browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(3) .form-groups #float-input').to.be.visible;
    browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(3) .form-groups #float-input','23323322');

    browser.pause(3000);
    browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input').to.be.visible;
    browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input','Hari');

    browser.pause(3000);
    browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-float-label .ui-inputtext').to.be.visible;
    browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-float-label .ui-inputtext','Krishna');

    browser.pause(3000);
    browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input').to.be.visible;
    browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input','hari@gmail.com');

    browser.pause(3000);
    browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #float-input').to.be.visible;
    browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #float-input','9372211333');

    // // browser.pause(3000);
    // // browser.expect.element('.main-content-text .contact-details-section .form-row .form-col-mid-6:nth-child(3) .form-groups .ui-inputtext').to.be.visible;
    // // browser.setValue('.main-content-text .contact-details-section .form-row .form-col-mid-6:nth-child(3) .form-groups .ui-inputtext','UX Engineer');


    browser.pause(3000);
    browser.expect.element('.main-content-text .main-content-form .cancel-and-next-button .next-cancel-group .next-button').to.be.visible;
    browser.click('.main-content-text .main-content-form .cancel-and-next-button .next-cancel-group .next-button');

    browser.pause(8000);
//     browser.expect.element('.add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header .add-customer-steps-list .active .add-customer-step-label').to.be.visible;
//     browser.assert.containsText('.add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header .add-customer-steps-list .active .add-customer-step-label','Service Details');

});

// it.skip('Add service details in add customer form',function(browser){
//     browser.expect.element('.add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header .add-customer-steps-list .active .add-customer-step-label').to.be.visible;
//    browser.expect.element('.main-content-text form .form-group .form-group .form-group:nth-child(3)  .property-block .form-group table tbody tr td:nth-child(6) .form-group .status .select-all-status .select-checkbox .radio-checkmark').to.be.visible;
//    browser.click('.main-content-text form .form-group .form-group .form-group:nth-child(3)  .property-block .form-group table tbody tr td:nth-child(6) .form-group .status .select-all-status .select-checkbox .radio-checkmark');
//    browser.expect.element('.main-content-text form .cancel-and-submit-button .next-cancel-group .submit-button').to.be.visible;
//    browser.click('.main-content-text form .cancel-and-submit-button .next-cancel-group .submit-button');
//    browser.assert.containsText('.invoice-banks-block table tbody tr td:nth-child(2) .customer-cell-block .customer-details .customer-name','Hari');

// });
// it.skip('To check if the details are added in the customers list',function(browser){
//     browser.expect.element('.invoice-banks-block table tbody tr td:nth-child(2) .customer-cell-block .customer-details .customer-name').to.be.visible;
//     browser.assert.containsText('.invoice-banks-block table tbody tr td:nth-child(2) .customer-cell-block .customer-details .customer-name','Hari');
  
// })
// it.skip('Submit form with empty fields',function(browser){

//     browser.expect.element('.invoice-banks-section.customers-banks-section').to.be.visible;
//     browser.expect.element('.header-box .header-container-box .header-container .header-right-block .add-user-img-full .add-user-text').to.be.visible;
//     browser.click('.header-box .header-container-box .header-container .header-right-block .add-user-img-full .add-user-text');
//     browser.expect.element('app-add-customer .add-customer-request-header').to.be.visible;

//     browser.pause(2000);
//     browser.expect.element('.main-content-text .main-content-form .cancel-and-next-button .next-cancel-group .next-button').to.be.visible;
//     browser.click('.main-content-text .main-content-form .cancel-and-next-button .next-cancel-group .next-button');

//    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) .error-message').to.be.visible;
     
//    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .error-message').to.be.visible;
    
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) .error-message').to.be.visible;
    
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .error-message').to.be.visible;
   
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(1) .error-message').to.be.visible;
    
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(4) div .error-message').to.be.visible;
     
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) .error-message').to.be.visible;
    
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .error-message').to.be.visible;
   
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) .error-message').to.be.visible;
    
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .error-message').to.be.visible;
    
//    browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(3) .form-groups .error-message').to.be.visible;
    
//    browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) .error-message').to.be.visible;
   
//    browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .error-message').to.be.visible;
    
//    browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) .error-message').to.be.visible;
    
//    browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .error-message').to.be.visible;
   
//    browser.expect.element('.main-content-text .contact-details-section .form-row .form-col-mid-6:nth-child(3) .form-groups .error-message').to.be.visible;
  
//     browser.expect.element('.main-content-text .main-content-form .cancel-and-next-button .next-cancel-group .cancel-form').to.be.visible;
//     browser.click('.main-content-text .main-content-form .cancel-and-next-button .next-cancel-group .cancel-form');

// })
// it('Enter invalid details in add customer form',function(browser){
    
//     browser.expect.element('.invoice-banks-section.customers-banks-section').to.be.visible;
    
//      browser.expect.element('.header-right-block li:nth-child(3) .add-user-text').to.be.visible;
    
//      browser.click('.header-right-block li:nth-child(3) .svg-full');
    
//     browser.expect.element('.add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header').to.be.visible;

//     // browser.pause(2000);
//     // browser.expect.element('.main-content-text .main-content-form form .company-details-section .add-customer-camera #imageUplaod').to.be.visible;
//     // browser.setValue('.company-details-section .infosys-logo-and-rounded-block #imageUplaod', require('path').resolve('C:/Users/swathi/Documents/inteliscanNew/test/img.png'));
        
//     // browser.pause(2000);
//     // browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #companyName').to.be.visible;
//     // browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #companyName','L&T');
  
//     // browser.pause(3000);
//     // browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-inputtext').to.be.visible;
//     // browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-inputtext','S/W');
    
//     // browser.pause(3000);
//     // browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input').to.be.visible;
//     // browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input','123');
   
//    browser.expect.element('.main-content-text .main-content-form form .company-details-section .company-form-details .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .ui-float-label .ui-inputtext').to.be.visible;
//    browser.pause(3000); 
//    browser.setValue('.main-content-text .main-content-form form .company-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .ui-inputtext','MY');
//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form form .company-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .error-message').to.be.visible;
//     browser.pause(3000);
// //     browser.pause(3000);
// //     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(1) #gstNumber').to.be.visible;
// //     browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(1) #gstNumber','29');
// //    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(1) .error-message').to.be.visible;

// //    browser.pause(3000);
// //    browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(4) .upload-attachment .upload-attachment-label').to.be.visible;
// //    browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(4) .upload-attachment .upload-attachment-label #fileUplaod', require('path').resolve('C:/Users/swathi/Documents/inteliscanNew/test/img.png'))
   
       
// //     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(1)').to.be.visible;
// //     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(1)','KKD');

// //     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(2)').to.be.visible;
// //     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(2)','5312');
// //     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .error-message').to.be.visible;

// // //     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(1)').to.be.visible;
// // //     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(1)','KKD')

// // //     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(1)').to.be.visible;
// // //     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(2)','AP')

    
// //     browser.pause(3000);
// //     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(3) .form-groups #float-input').to.be.visible;
// //     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(3) .form-groups #float-input','2332');
// //     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(3) .form-groups .error-message').to.be.visible;

// // //     browser.pause(3000);
// // //     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input').to.be.visible;
// // //     browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input','Hari');

// // //     browser.pause(3000);
// // //     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-float-label .ui-inputtext').to.be.visible;
// // //     browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-float-label .ui-inputtext','Krishna');

// //     browser.pause(3000);
// //     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input').to.be.visible;
// //     browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input','hari');
// //     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) .error-message').to.be.visible;

// //     browser.pause(3000);
// //     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #float-input').to.be.visible;
// //     browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #float-input','9372');
// //     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .error-message').to.be.visible;

// // //     browser.pause(3000);
// // //     browser.expect.element('.main-content-text .contact-details-section .form-row .form-col-mid-6:nth-child(3) .form-groups .ui-inputtext').to.be.visible;
// // //     browser.setValue('.main-content-text .contact-details-section .form-row .form-col-mid-6:nth-child(3) .form-groups .ui-inputtext','UX Engineer');


//     //browser.expect.element('.main-content-text .main-content-form form:nth-child(2) .cancel-and-next-button .next-cancel-group .next-button').to.be.visible;
//     //browser.click('.main-content-text .main-content-form form:nth-child(2) .cancel-and-next-button .next-cancel-group .cancel-form');
    
// })
// it.skip('Enter valid details in add customer form',function(browser){
//     browser.expect.element('.invoice-banks-section.customers-banks-section').to.be.visible;
//     browser.expect.element('.header-box .header-container-box .header-container .header-right-block .add-user-img-full .add-user-text add-user-text-full').to.be.visible;
//     browser.click('.header-box .header-container-box .header-container .header-right-block .add-user-img-full .add-user-text add-user-text-full');
//     browser.expect.element('app-add-customer .add-customer-request-header').to.be.visible;

//     browser.pause(3000);
//     browser.setValue('.company-details-section .infosys-logo-and-rounded-block #imageUplaod', require('path').resolve('C:/Users/swathi/Documents/inteliscanNew/test/img.png'));
        
//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #companyName').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #companyName','L&T');
    
//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-inputtext').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-inputtext','S/W');
    
//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input','123');
    
//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #pan').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #pan','MYPAN1234Z');
   
//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(1) #gstNumber').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(3) .form-groups:nth-child(1) #gstNumber','29MYPAN1234W9Z9');
    
//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(4) .upload-attachment .upload-attachment-label').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form form .company-form-details .form-row .form-col-mid-6:nth-child(4) .upload-attachment .upload-attachment-label #fileUplaod', require('path').resolve('C:/Users/swathi/Documents/inteliscanNew/test/img.png'))
       
//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input','KKD');

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) #float-input').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) #float-input','532312')

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) .ui-inputtext').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) .ui-inputtext','KKD')

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .ui-inputtext').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) .ui-inputtext','AP')

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(3) .form-groups #float-input').to.be.visible;
//     browser.setValue('.main-content-text .main-content-form .communication-section .communication-icon-title-block .register-branch-office-address form:nth-child(2) .register-office-form .form-col-mid-6:nth-child(3) .form-groups #float-input','23323322');

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input').to.be.visible;
//     browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(1) #float-input','Hari');

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-float-label .ui-inputtext').to.be.visible;
//     browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(1) .form-groups:nth-child(2) .ui-float-label .ui-inputtext','Krishna');

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input').to.be.visible;
//     browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(1) #float-input','hari@gmail.com');

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #float-input').to.be.visible;
//     browser.setValue('.main-content-text .contact-details-section .company-form-details .form-row .form-col-mid-6:nth-child(2) .form-groups:nth-child(2) #float-input','9372211333');

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .contact-details-section .form-row .form-col-mid-6:nth-child(3) .form-groups .ui-inputtext').to.be.visible;
//     browser.setValue('.main-content-text .contact-details-section .form-row .form-col-mid-6:nth-child(3) .form-groups .ui-inputtext','UX Engineer');

//     browser.pause(3000);
//     browser.expect.element('.main-content-text .main-content-form .cancel-and-next-button .next-cancel-group .next-button').to.be.visible;
//     browser.click('.main-content-text .main-content-form .cancel-and-next-button .next-cancel-group .next-button');
    
//     browser.expect.element('.add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header .add-customer-steps-list .active .add-customer-step-label').to.be.visible;
//     browser.assert.containsText('.add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header .add-customer-steps-list .active .add-customer-step-label','Service Details');

//     browser.expect.element('.add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header .add-customer-steps-list .active .add-customer-step-label').to.be.visible;
//     browser.expect.element('.main-content-text form .form-group .form-group .form-group:nth-child(3)  .property-block .form-group table tbody tr td:nth-child(6) .form-group .status .select-all-status .select-checkbox .radio-checkmark').to.be.visible;
//     browser.click('.main-content-text form .form-group .form-group .form-group:nth-child(3)  .property-block .form-group table tbody tr td:nth-child(6) .form-group .status .select-all-status .select-checkbox .radio-checkmark');
    
//     browser.expect.element('.main-content-text form .cancel-and-submit-button .next-cancel-group .submit-button').to.be.visible;
//     browser.click('.main-content-text form .cancel-and-submit-button .next-cancel-group .submit-button');
   
//     browser.assert.containsText('.invoice-banks-block table tbody tr td:nth-child(2) .customer-cell-block .customer-details .customer-name','Hari');
 
// });
// it.skip('To check the cancel and close button',function(browser){

//     browser.expect.element('.invoice-banks-section.customers-banks-section').to.be.visible;
//     browser.expect.element('.header-box .header-container-box .header-container .header-right-block .add-user-img-full .add-user-text add-user-text-full').to.be.visible;
//     browser.click('.header-box .header-container-box .header-container .header-right-block .add-user-img-full .add-user-text add-user-text-full');
//     browser.expect.element('app-add-customer .add-customer-request-header').to.be.visible;

//     browser.expect.element('.main-content-text form .cancel-and-submit-button .next-cancel-group .cancel-group').to.be.visible;
//     browser.click('.main-content-text form .cancel-and-submit-button .next-cancel-group .cancel-group');
   
//     browser.expect.element('.invoice-banks-section.customers-banks-section').to.be.visible;
//     browser.expect.element('.header-box .header-container-box .header-container .header-right-block .add-user-img-full .add-user-text add-user-text-full').to.be.visible;
//     browser.click('.header-box .header-container-box .header-container .header-right-block .add-user-img-full .add-user-text add-user-text-full');
//     browser.expect.element('app-add-customer .add-customer-request-header').to.be.visible;

//     browser.expect.element('.header-box p-dialog app-add-customer .add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header .close-popup').to.be.visible;
//     browser.click('.header-box p-dialog app-add-customer .add-customer-request-pop-up .add-customer-pop-up-content .add-customer-request-header .close-popup');
// })
});