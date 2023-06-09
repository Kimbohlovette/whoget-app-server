import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name field cannot be empty.'],
	},
});
CategorySchema.index({ name: 'text' });

export const Category = mongoose.model('Category', CategorySchema);
