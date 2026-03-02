import { db } from '../firebase.js';

const COLLECTION = 'blogs';

export const listBlogs = async (req, res) => {
	try {
		const snap = await db.collection(COLLECTION).orderBy('createdAt', 'desc').get();
		const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
		res.json(items);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

export const getBlog = async (req, res) => {
	try {
		const doc = await db.collection(COLLECTION).doc(req.params.id).get();
		if (!doc.exists) return res.status(404).json({ error: 'Not found' });
		res.json({ id: doc.id, ...doc.data() });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

export const createBlog = async (req, res) => {
	try {
		const data = { ...req.body, createdAt: new Date() };
		const ref = await db.collection(COLLECTION).add(data);
		const doc = await ref.get();
		res.status(201).json({ id: doc.id, ...doc.data() });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

export const updateBlog = async (req, res) => {
	try {
		const ref = db.collection(COLLECTION).doc(req.params.id);
		await ref.update({ ...req.body, updatedAt: new Date() });
		const doc = await ref.get();
		res.json({ id: doc.id, ...doc.data() });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

export const deleteBlog = async (req, res) => {
	try {
		await db.collection(COLLECTION).doc(req.params.id).delete();
		res.status(204).end();
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

// (placeholders removed) - real implementations are defined above
