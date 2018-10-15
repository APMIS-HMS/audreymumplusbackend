/* eslint-disable no-unused-vars */
let jsend = require('jsend');
class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    let UserService = this.app.service('users');

    try {
      //
      if(data.email === undefined){
        return jsend.error({message:'email is required!'});
      }
      if(data.token === null){
        
      }
      //
      if(data.newPassword !== data.reEnterPassword){
        return jsend.error({message:'The passwords does not match'});
      }else{

      }
    } catch (error) {
      return jsend.error({message:'Reset password failed!',number:101,data:{errorDetail:error}});
    }
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }

  // function password(params) {
  //   router.post('/resetpassword', (req, res, next) => {
  //     console.log(req.body);
  //     async.waterfall([
  //       function (done) {
  //         crypto.randomBytes(20, function (err, buf) {
  //           var token = buf.toString('hex');
  //           done(err, token);
  //         });
  //       },
  //       function (token, done) {
  //         User.findOne({ email: req.body.email }, function (err, user) {
  //           if (!user) {
  //             //   console.log('error', 'No account with that email address exists.');
  //             /* req.flash('error', 'No account with that email address exists.'); */
  //             console.log('No account with that email address exists.')
  //             res.send({
  //               message: 0
  //             });
  //             return;
  //           }
  //           user.resetPasswordToken = token;
  //           user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    
  //           user.save(function (err) {
  //             done(err, token, user);
  //           });
  //         });
  //       },
  //       function (token, user, done) {
  //         var smtpTrans = nodemailer.createTransport({
  //           service: 'gmail',
  //           host: 'smtp.gmail.com',
  //           port: 465,
  //           secure: true,
  //           auth: {
  //             user: 'olangoad@gmail.com',
  //             pass: 'olangoadmin'
  //           },
  //           tls: {
  //             // do not fail on invalid certs
  //             rejectUnauthorized: false
  //           }
  //         });
  //         var mailOptions = {
    
  //           to: user.email,
  //           from: 'olangoad@gmail.com',
  //           subject: 'Olango Password Reset',
  //           text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
  //             'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
  //             'https://' + req.headers.host + '/changepassword/' + token + '\n\n' +
  //             'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    
  //         };
  //         smtpTrans.sendMail(mailOptions, function (err) {
  //           if (err) {
  //             console.log(err);
  //           } else {
  //             //req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
  //             console.log('An e-mail has been sent to ' + user.email + ' with further instructions.')
  //             res.send({
  //               message: 1
  //             });
  //           }
  //         });
  //       }
  //     ], function (err) {
  //       console.log('this err' + ' ' + err);
  //       res.send({
  //         message: 0
  //       });
  //     });
  //   });
  // }
  
  // function checkResetLink(data){
  //   //Check if reset password link has been used
  //   //Handle page errors
  //     User.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
  //       if (err) {
  //         res.send({
  //           message: -1//there was a problem saving
  //         })
  //       }
  //       if (!user) {
  //         /* req.flash('error', 'Password reset token is invalid or has expired.'); */
  //         //render token expired here
  //         res.render('changepassword', {
  //           message: 0
  //         })
  //         return;
  //       }
  //       user.password = user.generateHash(req.body.pwd);
  //       user.save((err) => {
  //         if (err) {
  //           res.send({
  //             message: -1//there was a problem saving
  //           });
  //         } else {
  //           res.send({
  //             message: 1//there was a problem saving
  //           });
  //         }
  //       });
  //     });
  // }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
