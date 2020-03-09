const mongoose = require('mongoose');
const path = require('path');
const CountryModel = require(path.join(__dirname, 'models/country.js'));

mongoose.connect('mongodb://localhost:27017/yyy', {
	useNewUrlParser: true
});

async function go() {
	// let c = await CountryModel.create({
	// 	country: 'Germany',
	// 	population: 60,
	// 	nuclear: false,
	// 	area: 10000,
	// 	militaries: 500000
	// });
	// console.log(c);

	// await CountryModel.insertMany([
	// 	{
	// 		country: 'Germany',
	// 		population: 60,
	// 		nuclear: false,
	// 		area: 10000,
	// 		militaries: 500000
	// 	},
	// 	{
	// 		country: 'Ukraine',
	// 		population: 40,
	// 		nuclear: false,
	// 		area: 12000,
	// 		militaries: 200000
	// 	},
	// 	{
	// 		country: 'USA',
	// 		population: 100,
	// 		nuclear: true,
	// 		area: 50000,
	// 		militaries: 700000
	// 	},
	// 	{
	// 		country: 'Russia',
	// 		population: 80,
	// 		nuclear: true,
	// 		area: 80000,
	// 		militaries: 300000
	// 	},
	// 	{
	// 		country: 'France',
	// 		population: 70,
	// 		nuclear: true,
	// 		area: 10000,
	// 		militaries: 200000
	// 	}
	// ]);

	// - всіх з ядерною зброєю
	// let found = await CountryModel.find({nuclear: true})
	// console.log(found)

	// - де к-ть наслення > 5м
	// let found = await CountryModel.find({population: {
	//     $gt: 60
	// }}, 'country population')
	// console.log(found)

	// - 3 найбільших країн по площі
	// let found = await CountryModel.find({}, 'area country').sort({area: -1}).limit(3)
	// console.log(found)

	// - 3 найменших країн по населенню
	// let found = await CountryModel.find({}, 'population country').sort({population: 1}).limit(3)
	// console.log(found);

	// - всіх де є ядерна зброя або армія  кількістю > 400000
	// let found = await CountryModel.find({
	//     $or: [
	//         {nuclear: true},
	//         {militaries: { $gt : 400000}}
	//     ]
	// }, 'nuclear militaries country -_id')
	// console.log(found);

	// - всіх де є ядерна зброя і армія  кількістю > 400000
	// let found = await CountryModel.find({
	//     $and: [
	//         {nuclear: true},
	//         {militaries: { $gt : 400000}}
	//     ]
	// }, 'nuclear militaries country -_id')
	// console.log(found)

	// порахувати к-ть країн з ядерною зброєю і без неї(використовуючи групування)
	// let found = await CountryModel.aggregate([
	// 	{
	// 		$match: {
	// 			$or: [{ nuclear: true }, { nuclear: false }]
	// 		}
	// 	},
	// 	{
	// 		$group: {
	// 			_id: '$nuclear',
	// 			count: { $sum: 1 }
	// 		}
	// 	}
	// ]);
	// console.log(found);

	// порахувати населення всіх країн в яких є ядерна зброя(використовуючи групування)

	// let found = await CountryModel.aggregate([
	//     {
	//         $match: {
	//             $or: [
	//                 {nuclear: true},
	//                 {nuclear: false}
	//             ]
	//         }
	//     },
	//     {
	// 		$group: {
	//             _id: '$nuclear',
	//             // count:  {$sum: '$population'}
	//             // count:  {$avg: '$population'}
	//             count:  {$min: '$population'}
	//             // count:  {$max: '$population'}
	// 		}
	// 	}
	// ]);

	// console.log(found);

	// встановити всім країнам армію в 0 чоловік і відібрати ядерну зброю
	// await CountryModel.updateMany({}, {
	//     $set: {
	//         militaries: 0,
	//         nuclear: false
	//      }
	// });

	// видалити найменшу країну

	let found = await CountryModel.aggregate([
        {
            $group: {
                _id: null,
                min: {$min: '$population'}
            }
        }
    ]);

    console.log(found)

	// await found.remove();

	console.log('done');
}

go();
