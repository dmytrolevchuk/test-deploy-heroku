const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.post("/test", (req, res) => {
    console.log("req.body", req.body)

    res.send({
        status: true
    })

})

router.post("/registration", (req, res) => {
    // Check if the user already exist


    Users.findOne({email: req.body.email}).then(user => {
        if (user) {
            // if user already exist then deny request from front
            res.json({result: false});
        } else {
            // If not exist - create user object according to mongoose schema

            const newUser = new Users({
                nickname: req.body.nickname,
                email: req.body.email,
                password: req.body.password
            });
            newUser
                .save()
                .then(user => {
                    console.log("saved")
                    res.json(user);
                })
                .catch(err => console.log(err));

        }
    });
});


router.post("/login", (req, res) => {

    Users.findOne({email: req.body.email})
        .then((user) => {
            if (!user) {
                res.json({status: false});
            } else {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (!isMatch) {
                        res.json({status: false});
                    } else {
                        res.json({status: true});

                    }
                });
            }
        });

});


module.exports = router;