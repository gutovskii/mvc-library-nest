import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class BasicAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest<Request>();
        const basic = (req.headers.authorization || '').split(' ')[0] || '';
        const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
        const [username, password] = Buffer.from(b64auth, 'base64')
            .toString()
            .split(':');
        
        if (basic !== 'Basic' || 
            username !== process.env.BASIC_AUTH_USER || 
            password !== process.env.BASIC_AUTH_PASS
        ) {
            throw new UnauthorizedException('Неправильный логин или пароль');
        }
        return true;
    }
}