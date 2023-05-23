const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

exports.postUsers = async (req,res,next) => {

    const { name, email, password } = req.body
    try{
        const users = await User.findAll() 
        for(let i=0; i<users.length; i++){
            if(users[i].email === email)
            {
                console.log(email)
                let responseObject = { message: 'Email Already Taken' }
                return res.send(responseObject)
            }
    }
    
    bcrypt.hash(password,10, async (err, hash)=> {
        const data = await User.create({
            name: name,
            email: email,
            password: hash
        })
        
        res.json({data: data, message: 'User Created'})

    })
    }
    catch(err){
        console.log(err)
    }   
    
    
}

function generateAccessToken(id) {
    return jwt.sign({userId : id}, 'dvElG2diDtMN4DQoyEMcCQ7HaAGEuEM4')
}

exports.postLogin = async (req,res,next) => {
    try{
        const {email, password} = req.body
         
        console.log("email " + email)
        console.log("password " + password)


        const loginUser = await User.findAll({where: {email}})
    

        if(loginUser.length>0){

            bcrypt.compare(password, loginUser[0].password, async (err, result) => {

                if(err) {
                    throw new Error('some error ocured')
                }
                if(result === true){
                    res.status(200).json({ message: 'credentials matched', success: true, token: generateAccessToken(loginUser[0].id) })
                }
                else {
                    res.json({ message: 'not matched', success: false})
                }

            })   
        }
        else{
            return res.json({message: 'user do not exist', success: false})
        } 
        }
    catch(err){
        console.log(err)
    }

}



exports.getUser404 = (req,res,next) => {
    let responseObject = { message: 'user not found'}
    res.json(responseObject)
}