import mysql from 'mysql';
import { con } from '../config/db.js';


// signup
export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    con.query(sql, [name, email, password], (err, result) => {
        if (err) throw err;
        console.log("User created");
        res.send(result);
    });
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    con.query(sql, [email, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            console.log("Login successful");
            res.send(result);
        } else {
            console.log("Login failed");
            res.send("Login failed");
        }
    });
}