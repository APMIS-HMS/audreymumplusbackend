'use strict';

function sendEmailViaApi(sender, receiver, title, body) {
  var helper = require('sendgrid').mail;
  var from_email = new helper.Email(sender);
  var to_email = new helper.Email(receiver);
  var subject = title;
  var content = new helper.Content('text/html', body);
  var mail = new helper.Mail(from_email, subject, to_email, content);
  var sg = require('sendgrid')('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');
  var request_send_grid = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request_send_grid, function(error, response) {
    return response;
  });
}

function emailOtpTemplate(themeMessage, titleMessage, data) {
  let tem = `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f5f8fa; min-width: 350px; font-size: 1px; line-height: normal;">
    <tr>
      <td align="center" valign="top">
        <!--[if (gte mso 9)|(IE)]>
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" valign="top" width="750">
              <![endif]-->
              <table cellpadding="0" cellspacing="0" border="0" width="750" class="table750"
              style="width: 100%; max-width: 750px; min-width: 350px; background: #f5f8fa;">
                <tr>
                  <td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td>
                  <td align="center" valign="top" style="background: #ffffff;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;">
                      <tr>
                        <td align="right" valign="top">
                          <div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                      <tr>
                        <td align="center" valign="top">
                          <div style="height: 40px; line-height: 40px; font-size: 38px;">&nbsp;</div>
                          <a href="#"
                          style="display: block; max-width: 192px;">
                            <img src="https://ng.linkedin.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUCAAAAJGRmOTM3NzMwLTAwYjItNDFmZC1iMjM4LTY1OTE3N2YyMDJjOQ.png" alt="AudreyMumPlus" width="192"
                            border="0" style="display: block; width: 192px;" />
                          </a>
                          <div class="top_pad2" style="height: 48px; line-height: 48px; font-size: 46px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                      <tr>
                        <td align="left" valign="top"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;">
                                <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;">${titleMessage}</span>
                            </font>

                          <div style="height: 21px; line-height: 21px; font-size: 19px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#000000" style="font-size: 20px; line-height: 28px;">
                                <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;">
                                Hey ${data.name},
                                </span>
                            </font>

                          <div style="height: 6px; line-height: 6px; font-size: 4px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#000000" style="font-size: 20px; line-height: 28px;">
                                <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;">
                                  ${themeMessage}
                                </span>
                            </f ont>

                          <div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div>
                          <table class="mob_btn" cellpadding="0" cellspacing="0" border="0"
                          style="background: #6070E9; border-radius: 4px;">
                            <tr>
                              <td align="center" valign="top">
                                <a href="https://audrey-mum.herokuapp.com/"
                                target="_blank" style="display: block; border: 1px solid #6070E9; border-radius: 4px; padding: 19px 27px; font-family: 'Source Sans Pro', Arial, Verdana, Tahoma, Geneva, sans-serif; color: #ffffff; font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;"> <font face="'Source Sans Pro', sans-serif" color="#ffffff" style="font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;">
                <span style="font-family: 'Source Sans Pro', Arial, Verdana, Tahoma, Geneva, sans-serif; color: #ffffff; font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;">Visit for more details</span>
              </font>

                                </a>
                              </td>
                            </tr>
                          </table>
                          <div style="height: 90px; line-height: 90px; font-size: 88px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="90%" style="width: 90% !important; min-width: 90%; max-width: 90%; border-width: 1px; border-style: solid; border-color: #e8e8e8; border-bottom: none; border-left: none; border-right: none;">
                      <tr>
                        <td align="left" valign="top">
                          <div style="height: 28px; line-height: 28px; font-size: 26px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                      <tr>
                        <td align="left" valign="top"> <font face="'Source Sans Pro', sans-serif" color="#7f7f7f" style="font-size: 17px; line-height: 23px;">
                                <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #7f7f7f; font-size: 17px; line-height: 23px;">Once you confirm, all future messages about your Audrey account will be sent to ${data.email}.</span>
                            </font>

                          <div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;">
                      <tbody>
                        <tr>
                          <td align="center" valign="top">
                            <div style="height: 34px; line-height: 34px; font-size: 32px;">&nbsp;</div>
                            <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                              <tbody>
                                <tr>
                                  <td align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" border="0" width="78%" style="min-width: 300px;">
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="top" width="23%">
                                            <a href="mailto:help@theaudreypack.com" style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">
                                      <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">HELP</span>
                                  </font>

                                            </a>
                                          </td>
                                          <td align="center" valign="top" width="10%"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 17px; line-height: 17px; font-weight: bold;">
                                  <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 17px; font-weight: bold;">•</span>
                                </font>

                                          </td>
                                          <td align="center" valign="top" width="23%">
                                            <a href="#"
                                            style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">
                                      <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">SETTINGS</span>
                                  </font>

                                            </a>
                                          </td>
                                          <td align="center" valign="top" width="10%"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 17px; line-height: 17px; font-weight: bold;">
                                      <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 17px; font-weight: bold;">•</span>
                                  </font>

                                          </td>
                                          <td align="center" valign="top" width="23%">
                                            <a href="#"
                                            style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">
                                        <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">PROFILE</span>
                                      </font>

                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div style="height: 34px; line-height: 34px; font-size: 32px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#868686" style="font-size: 15px; line-height: 20px;">
                          <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #868686; font-size: 15px; line-height: 20px;">
                            AudreyMumPlus
                            <br>
                            11a George Crescent Ogba off Wempco Road Ogba Ikeja</span>
                      </font>

                                    <div style="height: 4px; line-height: 4px; font-size: 2px;">&nbsp;</div>
                                    <div style="height: 3px; line-height: 3px; font-size: 1px;">&nbsp;</div>
                                    <!-- <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size:
                                    17px; line-height: 20px;">
                          <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px;"><a href="mailto:help@theaudreypack.com" style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px; text-decoration: none;">help@theaudreypack.com</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" target="_blank" style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px; text-decoration: none;">1(800)232-90-26</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" target="_blank" style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px; text-decoration: none;">Unsubscribe</a></span>
                      </font>

                      <div style="height: 35px; line-height: 35px; font-size: 33px;">&nbsp;</div>

                      <table cellpadding="0" cellspacing="0" border="0">
                          <tbody><tr>
                            <td align="center" valign="top">
                                <a href="#" target="_blank" style="display: block; max-width: 19px;">
                                  <img src="images/soc_1.png" alt="img" width="19" border="0" style="display: block; width: 19px;">
                                </a>
                            </td>
                            <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                            <td align="center" valign="top">
                                <a href="#" target="_blank" style="display: block; max-width: 18px;">
                                  <img src="images/soc_2.png" alt="img" width="18" border="0" style="display: block; width: 18px;">
                                </a>
                            </td>
                            <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                            <td align="center" valign="top">
                                <a href="#" target="_blank" style="display: block; max-width: 21px;">
                                  <img src="images/soc_3.png" alt="img" width="21" border="0" style="display: block; width: 21px;">
                                </a>
                            </td>
                            <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                            <td align="center" valign="top">
                                <a href="#" target="_blank" style="display: block; max-width: 25px;">
                                  <img src="images/soc_4.png" alt="img" width="25" border="0" style="display: block; width: 25px;">
                                </a>
                            </td>
                          </tr>
                      </tbody></table>
                      -->
                                    <div style="height: 35px; line-height: 35px; font-size: 33px;">&nbsp;</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td>
                </tr>
              </table>
              <!--[if (gte mso 9)|(IE)]>
              </td>
            </tr>
          </table>
        <![endif]-->
      </td>
    </tr>
  </table>`;

  return tem;
}

function passwordResetConfirmation(themeMessage, titleMessage, data) {
  let tem = `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f5f8fa; min-width: 350px; font-size: 1px; line-height: normal;">
    <tr>
      <td align="center" valign="top">
        <!--[if (gte mso 9)|(IE)]>
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" valign="top" width="750">
              <![endif]-->
              <table cellpadding="0" cellspacing="0" border="0" width="750" class="table750"
              style="width: 100%; max-width: 750px; min-width: 350px; background: #f5f8fa;">
                <tr>
                  <td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td>
                  <td align="center" valign="top" style="background: #ffffff;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;">
                      <tr>
                        <td align="right" valign="top">
                          <div class="top_pad" style="height: 25px; line-height: 25px; font-size: 23px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                      <tr>
                        <td align="center" valign="top">
                          <div style="height: 40px; line-height: 40px; font-size: 38px;">&nbsp;</div>
                          <a href="#"
                          style="display: block; max-width: 192px;">
                            <img src="https://ng.linkedin.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAUCAAAAJGRmOTM3NzMwLTAwYjItNDFmZC1iMjM4LTY1OTE3N2YyMDJjOQ.png" alt="AudreyMumPlus" width="192"
                            border="0" style="display: block; width: 192px;" />
                          </a>
                          <div class="top_pad2" style="height: 48px; line-height: 48px; font-size: 46px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                      <tr>
                        <td align="left" valign="top"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;">
                                <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 52px; line-height: 54px; font-weight: 300; letter-spacing: -1.5px;">${titleMessage}</span>
                            </font>

                          <div style="height: 21px; line-height: 21px; font-size: 19px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#000000" style="font-size: 20px; line-height: 28px;">
                                <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;">
                                Hey ${data.name},
                                </span>
                            </font>

                          <div style="height: 6px; line-height: 6px; font-size: 4px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#000000" style="font-size: 20px; line-height: 28px;">
                                <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;">
                                  ${themeMessage}
                                </span>
                            </f ont>

                          <div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div>
                          <table class="mob_btn" cellpadding="0" cellspacing="0" border="0"
                          style="background: #6070E9; border-radius: 4px;">
                            <tr>
                              <td align="center" valign="top">
                                <a href="https://audrey-mum.herokuapp.com/"
                                target="_blank" style="display: block; border: 1px solid #6070E9; border-radius: 4px; padding: 19px 27px; font-family: 'Source Sans Pro', Arial, Verdana, Tahoma, Geneva, sans-serif; color: #ffffff; font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;"> <font face="'Source Sans Pro', sans-serif" color="#ffffff" style="font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;">
                <span style="font-family: 'Source Sans Pro', Arial, Verdana, Tahoma, Geneva, sans-serif; color: #ffffff; font-size: 26px; line-height: 30px; text-decoration: none; white-space: nowrap; font-weight: 600;">Visit for more details</span>
              </font>

                                </a>
                              </td>
                            </tr>
                          </table>
                          <div style="height: 90px; line-height: 90px; font-size: 88px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="90%" style="width: 90% !important; min-width: 90%; max-width: 90%; border-width: 1px; border-style: solid; border-color: #e8e8e8; border-bottom: none; border-left: none; border-right: none;">
                      <tr>
                        <td align="left" valign="top">
                          <div style="height: 28px; line-height: 28px; font-size: 26px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                      <tr>
                        <td align="left" valign="top"> <font face="'Source Sans Pro', sans-serif" color="#7f7f7f" style="font-size: 17px; line-height: 23px;">
                                <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #7f7f7f; font-size: 17px; line-height: 23px;">Once you confirm, all future messages about your Audrey account will be sent to ${data.email}.</span>
                            </font>

                          <div style="height: 30px; line-height: 30px; font-size: 28px;">&nbsp;</div>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100% !important; min-width: 100%; max-width: 100%; background: #f5f8fa;">
                      <tbody>
                        <tr>
                          <td align="center" valign="top">
                            <div style="height: 34px; line-height: 34px; font-size: 32px;">&nbsp;</div>
                            <table cellpadding="0" cellspacing="0" border="0" width="88%" style="width: 88% !important; min-width: 88%; max-width: 88%;">
                              <tbody>
                                <tr>
                                  <td align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" border="0" width="78%" style="min-width: 300px;">
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="top" width="23%">
                                            <a href="help@theaudreypack.com" style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">
                                      <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">HELP</span>
                                  </font>

                                            </a>
                                          </td>
                                          <td align="center" valign="top" width="10%"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 17px; line-height: 17px; font-weight: bold;">
                                  <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 17px; font-weight: bold;">•</span>
                                </font>

                                          </td>
                                          <td align="center" valign="top" width="23%">
                                            <a href="#"
                                            style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">
                                      <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">SETTINGS</span>
                                  </font>

                                            </a>
                                          </td>
                                          <td align="center" valign="top" width="10%"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 17px; line-height: 17px; font-weight: bold;">
                                      <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 17px; font-weight: bold;">•</span>
                                  </font>

                                          </td>
                                          <td align="center" valign="top" width="23%">
                                            <a href="#"
                                            style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;"> <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">
                                        <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 14px; line-height: 20px; text-decoration: none; white-space: nowrap; font-weight: bold;">PROFILE</span>
                                      </font>

                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div style="height: 34px; line-height: 34px; font-size: 32px;">&nbsp;</div> <font face="'Source Sans Pro', sans-serif" color="#868686" style="font-size: 15px; line-height: 20px;">
                          <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #868686; font-size: 15px; line-height: 20px;">
                            AudreyMum Plus
                            <br>
                            11a George Crescent Ogba off Wempco Road Ogba Ikeja</span>
                      </font>

                                    <div style="height: 4px; line-height: 4px; font-size: 2px;">&nbsp;</div>
                                    <div style="height: 3px; line-height: 3px; font-size: 1px;">&nbsp;</div>
                                    <!-- <font face="'Source Sans Pro', sans-serif" color="#1a1a1a" style="font-size:
                                    17px; line-height: 20px;">
                          <span style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px;"><a href="mailto:help@theaudreypack.com" style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px; text-decoration: none;">help@theaudreypack.com</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" target="_blank" style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px; text-decoration: none;">1(800)232-90-26</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href="#" target="_blank" style="font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 17px; line-height: 20px; text-decoration: none;">Unsubscribe</a></span>
                      </font>

                      <div style="height: 35px; line-height: 35px; font-size: 33px;">&nbsp;</div>

                      <table cellpadding="0" cellspacing="0" border="0">
                          <tbody><tr>
                            <td align="center" valign="top">
                                <a href="#" target="_blank" style="display: block; max-width: 19px;">
                                  <img src="images/soc_1.png" alt="img" width="19" border="0" style="display: block; width: 19px;">
                                </a>
                            </td>
                            <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                            <td align="center" valign="top">
                                <a href="#" target="_blank" style="display: block; max-width: 18px;">
                                  <img src="images/soc_2.png" alt="img" width="18" border="0" style="display: block; width: 18px;">
                                </a>
                            </td>
                            <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                            <td align="center" valign="top">
                                <a href="#" target="_blank" style="display: block; max-width: 21px;">
                                  <img src="images/soc_3.png" alt="img" width="21" border="0" style="display: block; width: 21px;">
                                </a>
                            </td>
                            <td width="45" style="width: 45px; max-width: 45px; min-width: 45px;">&nbsp;</td>
                            <td align="center" valign="top">
                                <a href="#" target="_blank" style="display: block; max-width: 25px;">
                                  <img src="images/soc_4.png" alt="img" width="25" border="0" style="display: block; width: 25px;">
                                </a>
                            </td>
                          </tr>
                      </tbody></table>
                      -->
                                    <div style="height: 35px; line-height: 35px; font-size: 33px;">&nbsp;</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td class="mob_pad" width="25" style="width: 25px; max-width: 25px; min-width: 25px;">&nbsp;</td>
                </tr>
              </table>
              <!--[if (gte mso 9)|(IE)]>
              </td>
            </tr>
          </table>
        <![endif]-->
      </td>
    </tr>
  </table>`;

  return tem;
}

function sendToken(data) {
  const title = 'AudreyMum plus password reset';
  const message = `Please use the OTP code ${data.generatedPass} to login and complete your password reset.`;
  let tem = emailOtpTemplate(message, title, data);
  let sender = 'help@theaudreypack.com';
  sendEmailViaApi(sender, data.email, title, tem);
}

function confirmReset(data) {
  const title = 'AudreyMum plus password reset';
  const message = `Congratulations ${data.name} ! Your password reset was successful.`;
  let tem = passwordResetConfirmation(message, title, data);
  let sender = 'help@theaudreypack.com';
  sendEmailViaApi(sender, data.email, title, tem);
}


module.exports = {
  sendToken: function (data) {
    sendToken(data);
  },
  confirmReset: function(data){
    confirmReset(data);
  }
};
