const express  = require('express');



class HomeController {



    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index(req, res) {
        res.render("home");
    }




}


module.exports = new HomeController()