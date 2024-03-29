import { Request, Response } from 'express';
import { User } from '../../models/userModel';

export const updateUser = async (req: Request, res: Response) => {
	const id = String(req.params['id']);
	const payload = req.body;
	if (!id) {
		return res.status(400).json({
			success: false,
			message: 'bad request',
		});
	}
	try {
		const updated = await User.findByIdAndUpdate(id, payload);
		if (!updated) {
			return res.status(404).json({
				success: false,
				message: 'resource not found',
			});
		} else {
			return res.status(200).json({
				success: true,
				message: 'update user successful',
				updated: {
					id: updated._id.toString(),
					name: updated.name,
					email: updated.email,
					phoneNumber: updated.phoneNumber,
					profileImage: updated.profileImage,
					location: updated.location,
					role: updated.role,
					activities: updated.activities,
					status: updated.status,
					updatedAt: updated.updatedAt,
					...payload,
				},
			});
		}
	} catch (error) {
		return res.status(422).json({
			success: false,
			message: 'unprocessible',
		});
	}
};
