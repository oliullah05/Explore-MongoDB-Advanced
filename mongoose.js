// db.test.aggregate([
    
//     // stage 1    
//   { $match: {gender:"Male",age:{$lt: 30}}},
//     // stage 2
//   {$project: {name:1,age:1,gender:1}}
    
//     ])



// db.test.aggregate([
//     // stage 1    
//     { $match: {gender:"Male"}},
//       // stage 2
//     {$addFields: {course:"next level web development" ,eduTech:"programing hero",monerMoto:"moner issa"}}  ,
//       // stage 3
//     {$project: {gender:1,course:1,eduTech:1,monerMoto:1}},
//     // stage 4    
//       {$out: "course-student"}
//     ])
    
    
    
    
    
    // db.test.aggregate([
    // // stage 1    
    // { $match: {gender:"Male"}},
    //   // stage 2
    // {$addFields: {course:"next level web development" ,eduTech:"programing hero",monerMoto:"moner issa"}}  ,
   
    // // stage 3   
    //  {$merge: "test" }
    // ])
    
    
    
    
    // db.test.aggregate([
        
    // //   stage -1
    //   { $group: { _id: "$gender",count :{ $sum: 1}                 }}
        
    //     ])
        
    
    
    
    
    
    // db.test.aggregate([
        
    // //   stage -1
    // //   { $group: { _id: "$address.country",amakeDekhaoNam :{$push: "$name"},count :{$sum: 1}               }}
    //   { $group: { _id: "$address.country",fullDoc :{$push: "$$ROOT"},count :{$sum: 1}  }},
    //       //   stage -2
    //   {$project: {"fullDoc.gender":1,"fullDoc.age":1,"fullDoc.email":1}}
    //     ])
        
    
    
    
    
    // db.test.aggregate([
    //     //stage 1
    //     {
    //         $group: { _id: null,totalSallery:{$sum: "$salary"}}
    //     } ])
    
    
    
    
    // db.test.aggregate([
    //     //stage 1
    //     {
    //         $group: { _id: null,
    //         totalSallery:{$sum: "$salary"},
    //         maxSalary:{$max: "$salary"},
    //         minSalary:{$min:"$salary"},
    //         avgSalary:{$avg:"$salary"}
                
                
    //         }},
            
    //          // stage -2
    //     {$project: {
    //         totalSallery:1,
    //         maxSalary:1,
    //         minSalary:1,
    //         // avgSalary:1
    //         avarageSalary:"$avgSalary",
    //         rangeBetweenMaxAndMin:{$subtract: ["$maxSalary","$minSalary"]}
    //     }}
        
    //     ])
    
    
    
    // db.test.aggregate([
    //     //stage 1
    //     {$unwind: "$friends"},
      
    //     // stage -2
        
    //     {$group: { _id: "$friends",count:{$sum:1}}}
     
    //     ])
    
    
    
    
    // db.test.aggregate([
    //     //stage 1
    //     {$unwind: "$interests"},
        
    //     //stage 2
    //     {$group: { _id: "$age",count:{$sum:1},interestPerAge:{$push:"$interests"}}},
    //     ])
    
    
    
    
    
    
    // db.test.aggregate([
    //     //stage 1
        
    //     {$bucket: {
    //         groupBy:"$age",
    //         boundaries:[20,40,60,80],
    //         default:"80 up",
    //         output:{
    //             count:{$sum:1},
    //             whoIsHere:{
    //                 $push: "$$ROOT"
    //             }
    //         }
            
    //     }
           
    //               },
        

    //     //stage 2
        
    //     {$sort: {
    //         count:-1
    //     }},
        
    //     //stage 3
    //     {$project: {count:1}},
        
    //     //stage 4
    //     {$limit: 1}
    //     ])
    
    
    
    
    
    // db.test.aggregate([

    //     {$facet: {
    //         //pipeline 1
    //         "friendzCount":[
    //             //stage 1
    //             {$unwind: "$friends"},
    //             //stage 2
    //             {$group: { _id: "$friends",count:{$sum:1}}}
                
    //             ],
    //             //pipeline 2
    //             "educationCount":[
    //                 {$unwind: "$education"},
    //                 {$group: { _id: "$education",count :{$sum:1}}},
    //               ],
    //               //pipeline 3
                  
    //               "skillCount":[
    //                   {$unwind: "$skills"},
    //                   {$group: { _id: "$skills",count:{$sum:1}}}
                      
    //                   ]
    //     }}

    //     ])

    
    
    
    
    
    
    
    
    
    
    
    