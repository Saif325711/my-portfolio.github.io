import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../firebase.js';

const ADMIN_COLLECTION = 'admins';

export const registerAdmin = async (req, res) => {
	// One-time setup protected by ADMIN_SETUP_TOKEN env var
	const setupToken = process.env.ADMIN_SETUP_TOKEN;
	if (!setupToken || req.headers['x-setup-token'] !== setupToken) {
		return res.status(403).json({ error: 'Forbidden' });
	}

	const { email, password } = req.body;
	if (!email || !password) return res.status(400).json({ error: 'Missing fields' });

	const snap = await db.collection(ADMIN_COLLECTION).where('email', '==', email).get();
	if (!snap.empty) return res.status(409).json({ error: 'Admin already exists' });

	const hash = await bcrypt.hash(password, 12);
	await db.collection(ADMIN_COLLECTION).add({ email, passwordHash: hash, createdAt: new Date() });
	res.status(201).json({ message: 'Admin registered' });
};

export const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) return res.status(400).json({ error: 'Missing fields' });

	try {
		const snap = await db.collection(ADMIN_COLLECTION).where('email', '==', email).limit(1).get();
		if (snap.empty) return res.status(401).json({ error: 'Invalid credentials' });

		const doc = snap.docs[0];
		const admin = doc.data();
		const match = await bcrypt.compare(password, admin.passwordHash);
		if (!match) return res.status(401).json({ error: 'Invalid credentials' });

		const token = jwt.sign({ sub: doc.id, email }, process.env.JWT_SECRET, { expiresIn: '8h' });
		res.json({ token });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

// (placeholder removed) - real `login` implementation above
