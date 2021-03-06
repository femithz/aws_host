const express = require('express');

const router = express.Router();

router.get('/', function( req, res)  {
    res.send({message: 'Hello Abu'});
})

router.get('/home', function(req, res) {
    res.sendFile(process.cwd() + '\\public\\index.html');
})

router.get('/about', function(req, res) {
    res.sendFile(process.cwd() + '\\public\\about.html');
})

router.get('/service', function(req, res) {
    res.sendFile(process.cwd() + '\\public\\service.html');     
})

router.post('/register', function(req, res) {
      let body = {
        student_id: 64,
        name: 'Abubakar0132',
        email: 'abubakar02231@gmail.com',
        class: 'Graduate-102'
      }
      let new_student = new Student(body);
      new_student.save().then((student) => {
          console.log('Student created successfully');
          let Pusher = require('pusher');
                let pusher = new Pusher({
                    appId: process.env.PUSHER_APP_ID,
                    key: process.env.PUSHER_KEY,
                    secret: process.env.PUSHER_SECRET,
                    cluster: process.env.PUSHER_CLUSTER
                });
                console.log(pusher);
                pusher.trigger('notifications', 'post_updated', student, req.headers['x-socket-id']);
                res.send('');
      })
})



module.exports = router;




