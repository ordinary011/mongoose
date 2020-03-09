const mongoose = require('mongoose');
const PersonModel = require('./models/person');

mongoose.connect('mongodb://localhost:27017/humans', {
	useNewUrlParser: true,
	useFindAndModify: false
});

// async function go(){
//     let john = new PersonModel({
//         name: 'JOHN',
//         age: 20,
//         skills: ['JS', 'JAVA'],
//         hair: true
//     })
//     await john.save()
//     console.log('the John has been created')
// }

// go();

// async function go1() {
// 	let guy = await PersonModel.create({
//         name: 'fifi',
//         age: 10,
//         hair: true,
//         skills: ['HTML', 'CSS']
//     });
//     console.log(guy);
// };

// go1();

// async function go2() {
// 	await PersonModel.insertMany([
//         {
//             name: 'john',
//             age: 32,
//             hair: true,
//             skills: ['python']
//         },
//         {
//             name: 'Smith',
//             age: 50,
//             hair: false,
//             skills: ['HTML', 'CSS', 'C++']
//         },
//         {
//             name: 'Rob',
//             age: 30,
//             hair: true,
//             skills: ['Ruby']
//         },
//         {
//             name: 'Kigo',
//             age: 60,
//             hair: false,
//             skills: ['C++', 'JS']
//         },
//         {
//             name: 'Bob',
//             age: 18,
//             hair: true,
//             skills: ['Ruby', 'Java']
//         }
//     ]);

//     console.log('ALl people were added');
// };

// go2();

async function go3() {
	// await PersonModel.updateMany({name: 'Will'}, {hair: false}, {runValidators: true})
	// await PersonModel.updateMany({name: 'Will'}, {age: 20}, {runValidators: true})
	// await PersonModel.updateMany({name: 'WILL'}, {age: 22}, {runValidators: true})
	// await PersonModel.findByIdAndUpdate('5cd188d9dab76505ac66f060', {age: 50})
	// await PersonModel.deleteOne({name: 'JOHN'});
	// let found = await PersonModel.find().sort({age: 1}).skip(2).limit(1);
	// let found = await PersonModel.find({}, 'name age -_id').sort({age: 1}).skip(2).limit(1);
	// let found = await PersonModel.find({
	//     age: {
	//         $gt: 40
	//     }
	// }, 'name')
	// let found = await PersonModel.find()
	// 	.where('age')
    //     .lt(40)
    //     .select('name age')
    //     .sort({age: 1})
    //     // .exec()
    let found = await PersonModel.find({}, 'name age').OlderThan(40);
	console.log(found);
}

go3();
