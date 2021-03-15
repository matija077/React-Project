import jwt from 'jsonwebtoken';

type createTokenReturnType = {
    token: string,
    expiresIn: string
}
async function createToken(nickname: string): Promise<createTokenReturnType> {
    const expiresIn = process.env.TOKEN_EXPIRES_SECONDS || "60";

    const token = await signToken(
        {nickname},
        tokenEnum.TOKEN,
        {
            expiresIn: expiresIn
        }
    );
        
    return {
        token,
        expiresIn
    }
}

async function createRefreshToken(nickname: string): Promise<string> {
    return await signToken(
        nickname,
        tokenEnum.REFRESHTOKEN
    );
}


enum tokenEnum  {
    "TOKEN",
    "REFRESHTOKEN"
}
async function signToken(data: string | object | Buffer, token: tokenEnum, options: jwt.SignOptions = {}) {
    try {
        const token: string = await new Promise(function (resolve, reject) {
            jwt.sign(
                data,
                process.env.token as string,
                options,
                function(err: Error | null, token: string | undefined) {
                    if (token) {
                        resolve(token);
                    }

                    reject(err);
                }
            )
        })

        return token;
    } catch(error) {
        throw error;
    }
}

export {
    createToken,
    createRefreshToken
};