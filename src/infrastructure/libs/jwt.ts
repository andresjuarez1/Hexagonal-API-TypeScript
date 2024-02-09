import jwt from 'jsonwebtoken';

export function createAccessToken(payload: any): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            'secret123',
            { expiresIn: "2d" },
            (error, token) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(token);
                }
            }
        );
    });
}
