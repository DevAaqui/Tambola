const User = require('../model/userModel')
const Ticket = require('../model/ticketModel')

// Getting all tickets(involving three rows)
exports.getTickets = async (req,res)=> {
    try{
        const allTickets = await Ticket.findAll()
        let arr = []
        console.log(allTickets)
        allTickets.forEach(obj => {
            let parsedTicket = JSON.parse(obj.ticket) 
            
            arr.push({tRow:parsedTicket, uniqueId: obj.id})
        });
        
        //console.log(arr)
        return res.status(200).json({data:arr, succes:true})
    }
    catch(err){
        return res.status(500).json({message:'Something went wrong'})
    }
    
}

// Creating Ticket
exports.createTicket= async(req,res)=> {
const userId = req.user.id

try{
    var row1a= [0,0,0,0,0,0,0,0,0]
    var row2a= [0,0,0,0,0,0,0,0,0]
    var row3a= [0,0,0,0,0,0,0,0,0]

    var numDone= [0]
    var numDone1 = [0]
    var numDone2 =[0]
    var numDone02 = []

    var randNum = 0
    var k =0

    for(var i=0; i<5; i++){
        randNum = Math.floor(Math.random() * 90 +1)

        for(var j=0; j<numDone.length; j++){
            if(randNum === numDone[j]){
                randNum = Math.floor(Math.random() * 90 +1)
                j=0
            }
        }

        numDone02.push(randNum)

        if(randNum <=9){
            numDone.push(1,2,3,4,5,6,7,8,9)
            row1a[0] =randNum
        }
        else if(randNum>=10 && randNum <=19){
            numDone.push(10,11,12,13,14,15,16,17,18,19)
            row1a[1] =randNum
        }
        else if(randNum>=20 && randNum <=29){
            numDone.push(20,21,22,23,24,25,26,27,28,29)
            row1a[2] =randNum
        }
        else if(randNum>=30 && randNum <=39){
            numDone.push(30,31,32,33,34,35,36,37,38,39)
            row1a[3] =randNum
        }
        else if(randNum>=40 && randNum <=49){
            numDone.push(40,41,42,43,44,45,46,47,48,49)
            row1a[4] =randNum
        }
        else if(randNum>=50 && randNum <=59){
            numDone.push(50,51,52,53,54,55,56,57,58,59)
            row1a[5] =randNum
        }
        else if(randNum>=60 && randNum <=69){
            numDone.push(60,61,62,63,64,65,66,67,68,69)
            row1a[6] =randNum
        }
        else if(randNum>=70 && randNum <=79){
            numDone.push(70,71,72,73,74,75,76,77,78,79)
            row1a[7] =randNum
        }
        else if(randNum>=80 && randNum <=90){
            numDone.push(80,81,82,83,84,85,86,87,88,89,90)
            row1a[8] =randNum
        }
    }

    // This is for Row2

    for(var i=0; i<5; i++){
        randNum = Math.floor(Math.random() * 90 +1)

        for(var j=0; j<numDone1.length; j++){
            if(randNum ===numDone1[j]){
                randNum = Math.floor(Math.random() * 90 + 1)
                j=0
            }

            for(var y=0; y<numDone02.length; y++){
                if(randNum ===numDone02[y]){
                    randNum = Math.floor(Math.random() * 90 + 1)
                    y=0
                }
            }
        }

        numDone02.push(randNum)

        if(randNum <=9){
            numDone1.push(1,2,3,4,5,6,7,8,9)
            row2a[0] =randNum
        }
        else if(randNum>=10 && randNum <=19){
            numDone1.push(10,11,12,13,14,15,16,17,18,19)
            row2a[1] =randNum
        }
        else if(randNum>=20 && randNum <=29){
            numDone1.push(20,21,22,23,24,25,26,27,28,29)
            row2a[2] =randNum
        }
        else if(randNum>=30 && randNum <=39){
            numDone1.push(30,31,32,33,34,35,36,37,38,39)
            row2a[3] =randNum
        }
        else if(randNum>=40 && randNum <=49){
            numDone1.push(40,41,42,43,44,45,46,47,48,49)
            row2a[4] =randNum
        }
        else if(randNum>=50 && randNum <=59){
            numDone1.push(50,51,52,53,54,55,56,57,58,59)
            row2a[5] =randNum
        }
        else if(randNum>=60 && randNum <=69){
            numDone1.push(60,61,62,63,64,65,66,67,68,69)
            row2a[6] =randNum
        }
        else if(randNum>=70 && randNum <=79){
            numDone1.push(70,71,72,73,74,75,76,77,78,79)
            row2a[7] =randNum
        }
        else if(randNum>=80 && randNum <=90){
            numDone1.push(80,81,82,83,84,85,86,87,88,89,90)
            row2a[8] =randNum
        }
    }

    // This is for Row3

    for(var i=0; i<5; i++){
        randNum = Math.floor(Math.random()*90 +1)

        for(var j=0; j<numDone2.length; j++){
            if(randNum ===numDone2[j]){
                randNum = Math.floor(Math.random()*90 +1)
                j=0
            }

            for(var y=0; y<numDone02.length; y++){
                if(randNum ===numDone02[y]){
                    randNum = Math.floor(Math.random() * 90 +1)
                    y=0
                }
            }
        }

        numDone02.push(randNum)

        if(randNum <=9){
            numDone2.push(1,2,3,4,5,6,7,8,9)
            row3a[0] =randNum
        }
        else if(randNum>=10 && randNum <=19){
            numDone2.push(10,11,12,13,14,15,16,17,18,19)
            row3a[1] =randNum
        }
        else if(randNum>=20 && randNum <=29){
            numDone2.push(20,21,22,23,24,25,26,27,28,29)
            row3a[2] =randNum
        }
        else if(randNum>=30 && randNum <=39){
            numDone2.push(30,31,32,33,34,35,36,37,38,39)
            row3a[3] =randNum
        }
        else if(randNum>=40 && randNum <=49){
            numDone2.push(40,41,42,43,44,45,46,47,48,49)
            row3a[4] =randNum
        }
        else if(randNum>=50 && randNum <=59){
            numDone2.push(50,51,52,53,54,55,56,57,58,59)
            row3a[5] =randNum
        }
        else if(randNum>=60 && randNum <=69){
            numDone2.push(60,61,62,63,64,65,66,67,68,69)
            row3a[6] =randNum
        }
        else if(randNum>=70 && randNum <=79){
            numDone2.push(70,71,72,73,74,75,76,77,78,79)
            row3a[7] =randNum
        }
        else if(randNum>=80 && randNum <=90){
            numDone2.push(80,81,82,83,84,85,86,87,88,89,90)
            row3a[8] =randNum
        }
    }

    // Values in Rows should be in ascending order

    for(var i=0; i<9; i++){
        if(row1a[i] !==0 && row2a[i] !==0){
            if(row1a[i]>row2a[i]){
                k = row1a[i]
                row1a[i]= row2a[i]
                row2a[i] = k
            }
        }
        if(row1a[i] !==0 && row3a[i] !==0){
            if(row1a[i]>row3a[i]){
                k = row1a[i]
                row1a[i]= row3a[i]
                row3a[i] = k
            }
        }
        if(row2a[i] !==0 && row3a[i] !==0){
            if(row2a[i]>row3a[i]){
                k = row2a[i]
                row2a[i]= row3a[i]
                row3a[i] = k
            }
        }
        
    }
    let arr = []
    arr.push(row1a)
    arr.push(row2a)
    arr.push(row3a)

    let str1 = JSON.stringify(arr)


    const data = await Ticket.create({
        ticket: str1,
        userId: userId
    })

    return res.status(200).json({data:data, message:'CREATED', succes: true})

}
catch(err){
    return res.status(500).json({message:'Something went wrong'})
}


}
// Serving Pagination
exports.getPagination = async (req,res)=> {
    try{
        const ITEMS_PER_PAGE = 5
        const page =  +req.query.page || 1 
        const limit = +req.query.limit || 1
        console.log('>>>>>>>>>>>>>>>>>>>', page, limit )
        let totalItems

        Ticket.count()
        .then((total)=> {
            totalItems=total
            return Ticket.findAll({
                offset: (page - 1)*limit,
                limit: limit
            })
        })
        .then((files)=> {
            res.json({
                files:files,
                currentPage: page,
                hasNextPage: limit * page <totalItems,
                nextPage: page+1,
                hasPreviousPage: page > 1,
                previousPage: page - 1,
                lastPage: Math.ceil(totalItems/limit)
            })
        })
        .catch(err=>console.log(err))
    }
    catch(err){
        return res.status(500).json({message:'Something went wrong'})
    }
    
}