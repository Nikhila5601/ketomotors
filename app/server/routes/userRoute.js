import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12); // Hash the password

        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save(); // Save the new user to the database
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
);
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password); // Compare the provided password with the hashed password

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate a token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;