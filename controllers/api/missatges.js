var Missatge = require("../../models/missatge");
var router = require("express").Router();
router.get("/", function(req, res, next) {
    Missatge.find()
            .sort('-date')
            .exec(function(err, misstages) {
        if (err) {
            return next(err);
        }
        res.json(misstages);
    });
    
});

router.post("/", function (req,res,next) {
    var missatge = new Missatge({
        username : req.body.username,
        body: req.body.body
    });
    missatge.save(function(err, missatge) {
        if (err) { return next(err) }
        res.status(201).json(missatge);
    });
});

module.exports = router;
