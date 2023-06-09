import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name field cannot be empty.'],
		},
		phoneNumber: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: [true, 'Email field cannot be empty.'],
		},
		location: {
			type: String,
			required: false,
		},
		profileImage: {
			type: String,
			required: false,
		},
		role: {
			type: String,
			required: [true, 'Profile Image Url field cannot be empty.'],
		},
		status: {
			type: String,
			required: [true, 'User status field cannot be empty.'],
		},
		activities: {
			type: String,
			required: false,
		},
		uid: {
			type: String,
			required: [true, 'uid field is required'],
		},
	},
	{ timestamps: true }
);
UserSchema.index({ '$**': 'text' });
const User = mongoose.model('User', UserSchema);

export { User };
