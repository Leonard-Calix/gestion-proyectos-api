import { Request, Response } from 'express';

export const helloWord = (req: Request, res: Response) => {
    res.json({ mensaje: 'Hello word!!' });
}

