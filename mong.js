const user= await User.create({
    name:"hi",
    email:"hi@gmail.com"
})

const userres = await User.find({name:{$gte:99}})

const userRes= await User.findById({_id:Object("99")});


const updateUser = await User.updateOne({_id:Object(99)},{val:"gen"})

const updateUserRes = await User.findByIdAndUpdate(id,{val:"hi"})

// create Takes plain JS object(s).
// Creates Mongoose document(s).
// Saves them in one step.
await User.create({ name: "hi", val:"gen" });

// save If document is new → insert.
// If document exists → update changed fields.
const userG = new User({ name: "hi" });
await userG.save(); // insert
userG.age = 30;
await userG.save(); // update


// middleware
userSchema.pre('save',function(next){
    console.log("save method");
    next();
})

userSchema.post('save',function(doc,next){
console.log("saved doc",doc);
next();    
})